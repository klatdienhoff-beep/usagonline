/*
 * Supabase authentication helpers for the USAG Okinawa portal.
 * The publishable key is safe for browser use; never expose a secret key here.
 */
window.Auth = (() => {
    const client = () => window.supabaseClient;
    const allowedEmails = [
        'b1cksp1c2@gmail.com',
        'dashboardash@gmail.com',
        '98205knji34@gmail.com'
    ];
    const PENDING_KEY = 'pendingActivation';

    const normalizeEmail = email => typeof email === 'string' ? email.trim().toLowerCase() : '';
    const isAllowedEmail = email => allowedEmails.includes(normalizeEmail(email));
    const allowedEmailError = () => `利用できるメールアドレスは${allowedEmails.join('、')}です`;
    const getPending = () => JSON.parse(sessionStorage.getItem(PENDING_KEY) || 'null');
    const setPending = value => sessionStorage.setItem(PENDING_KEY, JSON.stringify(value));
    const clearPending = () => sessionStorage.removeItem(PENDING_KEY);

    function toast(message, type = 'success', ms = 4000) {
        let container = document.getElementById('toastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            document.body.appendChild(container);
        }
        const el = document.createElement('div');
        el.className = 'toast' + (type === 'error' ? ' error' : type === 'info' ? ' info' : '');
        el.textContent = message;
        container.appendChild(el);
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transition = 'opacity .3s';
            setTimeout(() => el.remove(), 300);
        }, ms);
    }

    function authError(error) {
        return error && error.message ? error.message : '認証に失敗しました';
    }

    async function sendOtp(email) {
        const normalizedEmail = normalizeEmail(email);
        if (!isAllowedEmail(normalizedEmail)) return { ok: false, error: allowedEmailError() };
        const { error } = await client().auth.signInWithOtp({
            email: normalizedEmail,
            options: { shouldCreateUser: true }
        });
        return error ? { ok: false, error: authError(error) } : { ok: true };
    }

    async function verifyOtp(email, code) {
        const normalizedEmail = normalizeEmail(email);
        if (!isAllowedEmail(normalizedEmail)) return { ok: false, error: allowedEmailError() };
        const { data, error } = await client().auth.verifyOtp({
            email: normalizedEmail,
            token: code,
            type: 'email'
        });
        return error ? { ok: false, error: authError(error) } : { ok: true, session: data.session };
    }

    async function uploadAvatar(file) {
        if (!file || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
            return { ok: false, error: 'Please choose a JPG, PNG, or WEBP image' };
        }
        if (file.size > 5 * 1024 * 1024) {
            return { ok: false, error: 'Profile photo must be 5 MB or smaller' };
        }
        const { data: userData, error: userError } = await client().auth.getUser();
        if (userError || !userData.user) return { ok: false, error: authError(userError) };
        const extension = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
        const path = `${userData.user.id}/${crypto.randomUUID()}.${extension}`;
        const bucket = window.AVATAR_STORAGE_BUCKET;
        const { error } = await client().storage.from(bucket).upload(path, file, {
            contentType: file.type,
            upsert: false
        });
        if (error) return { ok: false, error: `写真のアップロードに失敗しました：${error.message}` };
        const { data } = client().storage.from(bucket).getPublicUrl(path);
        return { ok: true, url: data.publicUrl };
    }

    async function setPassword(password, profile, avatarUrl) {
        const pending = getPending();
        if (!pending || !isAllowedEmail(pending.email) || !pending.verified) {
            return { ok: false, error: allowedEmailError() };
        }
        const { data: userData, error: userError } = await client().auth.getUser();
        if (userError || !userData.user || !isAllowedEmail(userData.user.email)) {
            return { ok: false, error: authError(userError) };
        }
        const fullName = `${profile.firstName} ${profile.surname}`.trim();
        const { error } = await client().auth.updateUser({
            password,
            data: {
                full_name: fullName,
                first_name: profile.firstName,
                surname: profile.surname,
                title: profile.title,
                date_of_birth: profile.dateOfBirth,
                occupation: profile.occupation,
                address: profile.address,
                avatar_url: avatarUrl
            }
        });
        if (error) return { ok: false, error: authError(error) };
        const profileResult = await client().from('profiles').upsert({
            id: userData.user.id,
            email: userData.user.email,
            full_name: fullName,
            first_name: profile.firstName,
            surname: profile.surname,
            title: profile.title,
            date_of_birth: profile.dateOfBirth,
            occupation: profile.occupation,
            address: profile.address,
            avatar_url: avatarUrl
        });
        if (profileResult.error) return { ok: false, error: authError(profileResult.error) };
        return { ok: true };
    }

    async function signIn(email, password) {
        const normalizedEmail = normalizeEmail(email);
        if (!isAllowedEmail(normalizedEmail)) return { ok: false, error: allowedEmailError() };
        const { error } = await client().auth.signInWithPassword({ email: normalizedEmail, password });
        return error ? { ok: false, error: authError(error) } : { ok: true };
    }

    async function signInWithGoogle() {
        const { error } = await client().auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: `${window.location.origin}/profile.html` }
        });
        return error ? { ok: false, error: authError(error) } : { ok: true };
    }

    async function resetPassword(email) {
        const normalizedEmail = normalizeEmail(email);
        if (!isAllowedEmail(normalizedEmail)) return { ok: false, error: allowedEmailError() };
        const { error } = await client().auth.resetPasswordForEmail(normalizedEmail, {
            redirectTo: `${window.location.origin}/set-password.html`
        });
        return error ? { ok: false, error: authError(error) } : { ok: true };
    }

    async function hasSession() {
        const { data, error } = await client().auth.getUser();
        return !error && !!data.user && isAllowedEmail(data.user.email);
    }

    async function signOut() {
        clearPending();
        await client().auth.signOut();
    }

    async function getCurrentUser() {
        const { data, error } = await client().auth.getUser();
        if (error || !data.user || !isAllowedEmail(data.user.email)) return null;
        const { data: profile } = await client().from('profiles').select('*').eq('id', data.user.id).maybeSingle();
        return profile ? { email: data.user.email, user_metadata: profile } : data.user;
    }

    return {
        toast, uploadAvatar, isAllowedEmail, getPending, setPending, clearPending,
        sendOtp, verifyOtp, setPassword, signIn, signInWithGoogle, resetPassword,
        signOut, hasSession, getCurrentUser,
        profileUrl: email => `profile-${normalizeEmail(email).replace(/[^a-z0-9]+/g, '-')}.html`
    };
})();

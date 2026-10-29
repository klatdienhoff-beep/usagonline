const SUPABASE_URL = 'https://eitykihybimtnlhdvtwb.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Z0Ghr9aPeiuXGRhdJ-Wl2w_-OtC1Srd';
window.AVATAR_STORAGE_BUCKET = 'avatars';

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

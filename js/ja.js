(function () {
    'use strict';

    const translations = {
        'Sign Up - USAG Okinawa': '新規登録 - USAG沖縄',
        'Secure Sign-In - USAG Okinawa': '安全なサインイン - USAG沖縄',
        'Email Verification - USAG Okinawa': 'メール認証 - USAG沖縄',
        'Secure Your Account - USAG Okinawa': 'アカウントを保護',
        'User Profile - USAG Okinawa': 'ユーザープロフィール - USAG沖縄',
        'USAG Okinawa - Identity Synchronization Portal': 'USAG沖縄 - 本人確認ポータル',
        'USAG Okinawa // Identity Synchronization': 'USAG沖縄 // 本人確認',
        'USAG Okinawa // Secure Access': 'USAG沖縄 // 安全なアクセス',
        'Activate Your Profile': 'プロフィールを有効化',
        'Verify Your Email': 'メールアドレスを認証',
        'Secure Your Account': 'アカウントを保護',
        'Personnel Sign-In': '職員サインイン',
        'Encrypted Secure Connection': '暗号化された安全な接続',
        'Full Name': '氏名',
        'Email Address': 'メールアドレス',
        'Password': 'パスワード',
        'Enter your full name': '氏名を入力してください',
        'Enter your registered email': '登録済みのメールアドレスを入力してください',
        'Enter your email address': 'メールアドレスを入力してください',
        'Enter your password': 'パスワードを入力してください',
        'Remember device': 'この端末を記憶する',
        'Forgot password?': 'パスワードを忘れた場合',
        'Authenticate': '認証する',
        'Reset Password': 'パスワードをリセット',
        'Enter the email address of your activated profile. A reset link will be transmitted if the profile exists.': '有効化済みプロフィールのメールアドレスを入力してください。プロフィールが存在する場合、リセット用リンクを送信します。',
        'Cancel': 'キャンセル',
        'Send Reset Link': 'リセットリンクを送信',
        '1 · Identify': '1 · 本人情報',
        '2 · Verify': '2 · 認証',
        '3 · Secure': '3 · 保護',
        'Email verified for': 'メール認証済み：',
        'Create a password to complete activation.': '有効化を完了するため、パスワードを作成してください。',
        'Enter Verification Code': '認証コードを入力',
        'Didn’t receive a code?': 'コードが届きませんでしたか？',
        "Didn't receive a code?": 'コードが届きませんでしたか？',
        'Resend Code': 'コードを再送信',
        'Verify Code': 'コードを認証',
        'Verification code sent to': '認証コードを送信しました：',
        'Profile Details': 'プロフィール詳細',
        'Title': '敬称',
        'Mr.': '氏',
        'Mrs.': '夫人',
        'Ms.': '氏',
        'Dr.': '博士',
        'Surname': '姓',
        'First Name': '名',
        'Date Of Birth': '生年月日',
        'Address': '住所',
        'Occupation': '職業',
        'Profile Photo': 'プロフィール写真',
        'Take a live photo': 'カメラで撮影',
        'Camera capture only · max 5 MB': 'カメラ撮影のみ · 最大5MB',
        'Allow camera access when prompted. Gallery uploads are disabled.': '表示されたらカメラへのアクセスを許可してください。ギャラリーからのアップロードは無効です。',
        'Start Camera': 'カメラを起動',
        'Capture Photo': '写真を撮影',
        'Retake Photo': '撮り直す',
        'Create Password': 'パスワードを作成',
        'Create a strong password': '強力なパスワードを作成してください',
        'Confirm Password': 'パスワードを確認',
        'Confirm your password': 'パスワードをもう一度入力してください',
        'Create Account': 'アカウントを作成',
        'Show password': 'パスワードを表示',
        'Hide password': 'パスワードを隠す',
        'At least 8 characters': '8文字以上',
        'Upper & lower case letters': '大文字と小文字を含む',
        'At least one number': '数字を1つ以上含む',
        'At least one symbol (!@#$%^&*)': '記号を1つ以上含む（!@#$%^&*）',
        'USAG OKINAWA': 'USAG沖縄',
        'SEC-LEVEL: 04': 'セキュリティレベル：04',
        'COMMAND PORTAL': '司令部ポータル',
        'SYS STATUS': 'システム状態',
        'ENCRYPTED': '暗号化済み',
        'JP-STATION': '日本拠点',
        'AUTHENTICATED PERSONNEL': '認証済み職員',
        'WELCOME ONBOARD,': 'ようこそ、',
        'RANK / NAME UNASSIGNED': '階級 / 氏名未登録',
        'BNB Verification Status': 'BNB認証状況',
        'NO PHOTO': '写真なし',
        'Official Communications Email': '公式連絡用メール',
        'End-to-end encrypted military dispatch system': 'エンドツーエンド暗号化軍用通信システム',
        'Risk Benefit Amount': 'リスク・ベネフィット金額',
        'Live Database Link Active': 'ライブデータベース接続中',
        'WARNING:': '警告：',
        'PROCESS REQUIRES 1.5BNB TO COMPLETE VERIFICATION': '認証完了には1.5BNBが必要です',
        'Deposit Procedure Details': '入金手順の詳細',
        'Contact': 'お問い合わせ',
        'LOGOUT SESSION': 'セッションをログアウト',
        'TERMINATE SESSION?': 'セッションを終了しますか？',
        'Stay Signed In': 'サインインしたままにする',
        'Log Out': 'ログアウト',
        'This field is required': 'この項目は必須です',
        'Please enter a valid email address': '有効なメールアドレスを入力してください',
        'Passwords do not match': 'パスワードが一致しません',
        'Selfie upload is required': '本人写真のアップロードは必須です',
        'Transmitting code...': '認証コードを送信中…',
        'Send Verification Code': '認証コードを送信',
        'Authenticating...': '認証中…',
        'Sending...': '送信中…',
        'Verifying...': '認証中…',
        'Creating account...': 'アカウントを作成中…',
        'Initializing Profile...': 'プロフィールを初期化中…',
        'You are not authorised to access this site': 'このサイトへのアクセス権がありません',
        'Invalid or expired verification code': '認証コードが無効、または期限切れです',
        'Please choose a JPG, PNG, or WEBP image': 'JPG、PNG、またはWEBP画像を選択してください',
        'Profile photo must be 5 MB or smaller': 'プロフィール写真は5MB以下にしてください',
        'Could not read profile photo': 'プロフィール写真を読み込めませんでした',
        'Your verified session has expired. Please start again.': '認証済みセッションの期限が切れました。もう一度最初から行ってください。',
        'Photo upload failed:': '写真のアップロードに失敗しました：',
        'Invalid credentials or profile not activated': '認証情報が無効、またはプロフィールが有効化されていません',
        'No activated profile found for that email': 'そのメールアドレスの有効化済みプロフィールが見つかりません',
        'Live camera capture is unavailable. Use a supported browser over HTTPS or localhost.': 'ライブカメラ撮影を利用できません。HTTPSまたはlocalhostで対応ブラウザーを使用してください。',
        'Requesting camera access...': 'カメラへのアクセスを要求中…',
        'Camera is live. Take a photo when ready.': 'カメラが起動しました。準備ができたら撮影してください。',
        'Camera unavailable. No photo has been selected.': 'カメラを利用できません。写真が選択されていません。',
        'The camera is not ready yet. Wait for the preview, then try again.': 'カメラの準備がまだできていません。プレビューが表示されてから再度お試しください。',
        'Live camera photo captured': 'カメラで写真を撮影しました',
        'Photo captured. Retake it if needed before creating your account.': '写真を撮影しました。必要に応じて撮り直してからアカウントを作成してください。',
        'Could not capture a photo from the camera.': 'カメラで写真を撮影できませんでした。',
        'A profile photo is required': 'プロフィール写真は必須です',
        'Profile photo preview': 'プロフィール写真のプレビュー',
        'US Army Garrison Okinawa logo': '在日米陸軍沖縄基地ロゴ',
        'Japan flag': '日本国旗',
        'USAG Okinawa': 'USAG沖縄',
        'Enter your name and the email address registered. A verification code will be transmitted to confirm ownership.': '氏名と登録済みのメールアドレスを入力してください。本人確認のため認証コードを送信します。',
        'Already activated?': 'すでに有効化済みですか？',
        'Sign in': 'サインイン',
        'Sign up': '新規登録',
        'SEC-LEVEL: 04 // Eligibility is verified against trusted records': 'セキュリティレベル：04 // 登録情報を信頼できる記録と照合します',
        'Wrong email?': 'メールアドレスが違いますか？',
        'Start over': '最初からやり直す',
        'Resend': '再送信',
        'SEC-LEVEL: 04 // Codes expire and resend is rate-limited': 'セキュリティレベル：04 // コードには有効期限と再送信制限があります',
        'Select your title': '敬称を選択してください',
        'Miss': '嬢',
        'Prof.': '教授',
        'Other': 'その他',
        'Open Camera': 'カメラを開く',
        'SEC-LEVEL: 04 // Unauthorized access is prohibited': 'セキュリティレベル：04 // 許可のないアクセスは禁止されています',
        'Identity Synchronization': '本人確認の同期',
        'Profile Status: NOT DETECTED': 'プロフィール状態：未検出',
        'A verified identity is required to access network resources. Please complete the registration sequence by entering your information below.': 'ネットワークリソースへのアクセスには認証済みの本人情報が必要です。以下に情報を入力して登録手続きを完了してください。',
        'Complete all required fields marked with an asterisk (*) to establish your verified identity profile. All information provided will be encrypted and securely stored in accordance with military security protocols.': 'アスタリスク（*）の付いた必須項目をすべて入力し、認証済みプロフィールを作成してください。入力された情報は暗号化され、軍事セキュリティ規程に従って安全に保管されます。',
        'Date of Birth': '生年月日',
        'Upload Selfie': '本人写真をアップロード',
        'Click to upload selfie or drag and drop': 'クリックして本人写真をアップロード、またはドラッグ＆ドロップ',
        '(PNG, JPG up to 5MB)': '（PNG、JPG、最大5MB）',
        'Clear Form': 'フォームをクリア',
        'Initialize Profile': 'プロフィールを初期化',
        'Occupation / Military Assignment': '職業 / 軍務',
        'Please select your title': '敬称を選択してください',
        'Could not resend code': 'コードを再送信できませんでした',
        'Verification failed': '認証に失敗しました',
        'Could not open the camera:': 'カメラを開けませんでした：',
        'Unknown camera error': '不明なカメラエラー',
        'Email rate limit exceeded': 'メール送信回数の上限に達しました。しばらくしてから再度お試しください。',
        'For security purposes, you can only request this once every 60 seconds.': 'セキュリティ上、リクエストは60秒に1回のみ実行できます。',
        'Invalid login credentials': 'ログイン情報が正しくありません',
        'User already registered': 'このメールアドレスはすでに登録されています',
        'Email not confirmed': 'メールアドレスが確認されていません',
        'Password should be at least 6 characters': 'パスワードは6文字以上にしてください',
        'JWT expired': 'セッションの有効期限が切れました。もう一度サインインしてください。',
        'Full name is required': '氏名は必須です',
        'Email is required': 'メールアドレスは必須です',
        'Enter a valid email address': '有効なメールアドレスを入力してください',
        'You are not authorised to create an account': 'アカウントを作成する権限がありません',
        'You are not authorised to sign in': 'サインインする権限がありません',
        'Could not send verification code': '認証コードを送信できませんでした',
        'Verification code transmitted': '認証コードを送信しました',
        'Password is required': 'パスワードは必須です',
        'Authentication failed': '認証に失敗しました',
        'ACCESS GRANTED — redirecting to profile': 'アクセスが許可されました — プロフィールへ移動します',
        'Reset link transmitted — check your inbox': 'リセットリンクを送信しました — 受信トレイを確認してください',
        'Camera access was denied. Allow camera access in your browser settings, then try again.': 'カメラへのアクセスが拒否されました。ブラウザー設定でカメラを許可して再度お試しください。',
        'No camera was found on this device.': 'この端末にカメラが見つかりませんでした。',
        'The camera is already in use by another app.': 'カメラは別のアプリで使用中です。',
        'The camera could not meet the requested settings.': 'カメラが要求された設定に対応できません。',
        'The camera is not ready yet. Wait for the preview, then try again.': 'カメラの準備がまだできていません。プレビューが表示されてから再度お試しください。',
        'Could not create an account': 'アカウントを作成できませんでした',
        'Please enter your surname': '姓を入力してください',
        'Please enter your first name': '名を入力してください',
        'Please enter your date of birth': '生年月日を入力してください',
        'Please enter your address': '住所を入力してください',
        'Please enter your occupation': '職業を入力してください',
        'Date of birth cannot be in the future': '生年月日に未来の日付は指定できません',
        'Password does not meet all requirements': 'パスワードがすべての要件を満たしていません',
        'You must agree to the terms and conditions to continue.': '続行するには利用規約への同意が必要です。',
        'This field is required': 'この項目は必須です',
        'PLEASE CONTACT THE OFFICIAL ACCOUNT HANDLER OF THE US ARMY GARRISON OKINAWA JAPAN FOR MORE INFORMATION. LISTEN TO THEM CALMLY AND UNDERSTAND THE UPGRADE AND KYC PROCEDURE TO ENABLE THE TRANSACTION TO PROCEED SUCCESSFULLY.': '詳細については、在日米陸軍沖縄基地の公式担当者にお問い合わせください。担当者の説明を落ち着いて聞き、取引を進めるためのアップグレードおよびKYC手続きをご理解ください。',
        'All secure channels and encrypted logs will be synchronized and locked.': 'すべての安全な通信経路と暗号化ログが同期され、ロックされます。',
        'CANCEL': 'キャンセル',
        'TERMINATE': '終了'
    };

    function translate(value) {
        const key = value.trim();
        if (translations[key]) return translations[key];
        for (const [source, target] of Object.entries(translations)) {
            if (source.length > 8 && value.includes(source)) return value.replace(source, target);
        }
        return value;
    }

    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.parentElement && ['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) return;
            const translated = translate(node.nodeValue);
            if (translated !== node.nodeValue.trim()) {
                node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translated);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (['SCRIPT', 'STYLE'].includes(node.tagName)) return;
            ['placeholder', 'aria-label', 'alt', 'title'].forEach(attribute => {
                if (node.hasAttribute(attribute)) {
                    node.setAttribute(attribute, translate(node.getAttribute(attribute)));
                }
            });
        }
    }

    function localize(root) {
        if (document.title) document.title = translate(document.title);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.nodeType === Node.ELEMENT_NODE && ['SCRIPT', 'STYLE'].includes(node.tagName)) {
                continue;
            }
            translateNode(node);
        }
    }

    localize(document.documentElement);
    new MutationObserver(records => records.forEach(record => {
        record.addedNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) translateNode(node);
            if (node.nodeType === Node.ELEMENT_NODE) localize(node);
        });
    })).observe(document.documentElement, { childList: true, subtree: true });
})();

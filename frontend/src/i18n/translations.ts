export type Lang = 'ar' | 'en';

const translations = {
    ar: {
        // Settings panel
        settings:     'الإعدادات',
        account:      'الحساب',
        myPlaylist:   'قائمتي',
        logout:       'تسجيل الخروج',
        appearance:   'المظهر',
        darkMode:     'الوضع الداكن',
        lightMode:    'الوضع الفاتح',
        language:     'اللغة',
        // Navbar
        login:        'دخول',
        // Player
        share:        'مشاركة',
        linkCopied:   'تم نسخ الرابط ✓',
        // Surah info
        makki:        'مكية',
        madani:       'مدنية',
        verses:       'آية',
    },
    en: {
        // Settings panel
        settings:     'Settings',
        account:      'Account',
        myPlaylist:   'My Playlist',
        logout:       'Log out',
        appearance:   'Appearance',
        darkMode:     'Dark Mode',
        lightMode:    'Light Mode',
        language:     'Language',
        // Navbar
        login:        'Login',
        // Player
        share:        'Share',
        linkCopied:   'Link copied ✓',
        // Surah info
        makki:        'Meccan',
        madani:       'Medinan',
        verses:       'verses',
    },
} as const;

export type TranslationKey = keyof typeof translations.ar;

export const getTranslations = (lang: Lang) => translations[lang];

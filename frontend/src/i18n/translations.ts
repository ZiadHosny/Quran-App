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
        search:       'ابحث...',
        // Player
        share:        'مشاركة',
        linkCopied:   'تم نسخ الرابط ✓',
        cantPlay:     'لا يمكن تشغيل السورة في الوقت الحالي',
        // Surah info
        makki:        'مكية',
        madani:       'مدنية',
        verses:       'آية',
        // Repeat section
        times:        'مرة',
        // Pages
        mostPlayed:   'الأكثر تشغيلاً',
        noSurah:      'لا يوجد اي سورة',
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
        search:       'Search...',
        // Player
        share:        'Share',
        linkCopied:   'Link copied ✓',
        cantPlay:     'Cannot play this surah right now',
        // Surah info
        makki:        'Meccan',
        madani:       'Medinan',
        verses:       'verses',
        // Repeat section
        times:        'times',
        // Pages
        mostPlayed:   'Most Played',
        noSurah:      'No surah found',
    },
} as const;

export type TranslationKey = keyof typeof translations.ar;

export const getTranslations = (lang: Lang) => translations[lang];

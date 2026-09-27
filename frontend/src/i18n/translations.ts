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
        previous:     'السابقة',
        next:         'التالية',
        playPause:    'تشغيل / إيقاف',
        seekBackward: 'رجوع 10 ثواني',
        seekForward:  'تقديم 10 ثواني',
        queue:        'قائمة السور',
        volume:       'الصوت',
        speed:        'سرعة التشغيل',
        repeat:       'تكرار السورة',
        repeatSection: 'تكرار مقطع',
        random:       'تشغيل عشوائي',
        more:         'المزيد',
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
        previous:     'Previous',
        next:         'Next',
        playPause:    'Play / Pause',
        seekBackward: 'Back 10 seconds',
        seekForward:  'Forward 10 seconds',
        queue:        'Queue',
        volume:       'Volume',
        speed:        'Playback speed',
        repeat:       'Repeat surah',
        repeatSection: 'Repeat section',
        random:       'Shuffle',
        more:         'More',
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

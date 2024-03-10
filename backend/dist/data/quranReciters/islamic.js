import { generateSuwarForReciter } from "../generateList.js";
export const ISLAMIC = 'https://cdn.islamic.network/quran/audio-surah/128/ar';
export const islamic = [
    {
        id: 'muhammadsiddiqalminshawimujawwad',
        quranReciter: 'محمد صديق المنشاوي (مجود)',
        photo: 'https://ar.islamway.net/uploads/authors/1032.jpg',
    }, {
        id: 'abdulbasitmujawwad',
        quranReciter: 'عبد الباسط عبد الصمد (مجود)',
        photo: 'https://i.pinimg.com/564x/c2/c5/57/c2c5579d6becfccbb4e98f6bcf008127.jpg',
    }, {
        id: 'abdulbasitmurattal',
        quranReciter: 'عبد الباسط عبد الصمد (مرتل)',
        photo: 'https://ar.islamway.net/uploads/authors/abdul-baset-abdul-samad.jpg',
    }, {
        id: 'ahmedalajmi',
        quranReciter: 'أحمد علي العجمي',
        photo: 'https://ar.islamway.net/uploads/authors/ahmad-bin-ali-al-ajmy.jpg',
    }, {
        id: 'mohamedtablawi',
        quranReciter: 'محمد محمود الطبلاوي',
        photo: 'https://upload.wikimedia.org/wikipedia/ar/0/08/%D9%85%D8%AD%D9%85%D8%AF_%D9%85%D8%AD%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%B7%D8%A8%D9%84%D8%A7%D9%88%D9%8A.jpeg',
    }, {
        id: 'abdullahkhayat',
        quranReciter: 'عبد الله خياط',
        photo: 'https://ar.islamway.net/uploads/authors/abdullah-bin-khayat.jpg',
    }, {
        id: 'muhammadayyub',
        quranReciter: 'محمد ايوب',
        photo: 'https://ar.islamway.net/uploads/authors/mohammad-ayyoob-bin-mohammad-yousuf.jpg',
    }, {
        id: 'yousufbinnoahahmad',
        quranReciter: 'يوسف بن نوح',
        photo: 'https://ar.islamway.net/uploads/authors/1405.jpg',
    }
];
export const getIslamic = () => generateSuwarForReciter({
    quranReciters: islamic,
    website: "islamic",
});

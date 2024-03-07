import { generateSuwarForReciter } from "../generateList.js";
export const ISLAMWAY = 'https://download.quran.islamway.net/quran3';
export const islamway = [
    {
        id: 'mahmoudkalilAlHussary',
        quranReciter: 'محمود خليل الحصري',
        photo: 'https://thenationpress.net/imgs/2020/08/1598579203blobid0.jpg',
        quranReciterInWebsite: '316',
    },
    {
        id: 'maherAlMuaiqely',
        quranReciter: 'ماهر المعيقلي',
        photo: 'https://ar.islamway.net/uploads/authors/maher-al-mueaqly.jpg',
        quranReciterInWebsite: '1025/18126/32',
    }, {
        id: 'mahmoudalielbana',
        quranReciter: 'محمود علي البنا',
        photo: 'https://ar.islamway.net/uploads/authors/mahmoud-ali-al-banna.jpg',
        quranReciterInWebsite: '518',
    }, {
        id: 'muhammadsiddiqalminshawimurattal',
        quranReciter: 'محمد صديق المنشاوي (مرتل)',
        photo: 'https://ar.islamway.net/uploads/authors/1032.jpg',
        quranReciterInWebsite: '133/128',
    },
];
export const getIslamway = () => generateSuwarForReciter({
    quranReciters: islamway,
    website: "islamway"
});

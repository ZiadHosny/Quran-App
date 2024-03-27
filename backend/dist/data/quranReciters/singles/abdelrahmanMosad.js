import { generateSingleReciter } from "../../generateList.js";
const url = 'https://download.tvquran.com/download/recitations/372/303';
const arrOfSuwar = [
    32,
    73,
    78,
    87,
    88,
    100,
    107,
];
export const reciterAbdelrahmanMosad = {
    id: 'abdelrahmanMosad',
    quranReciter: 'عبد الرحمن مسعد',
    photo: 'https://i.pinimg.com/564x/bc/8f/2b/bc8f2b7a713d2021b9258475d67b588a.jpg',
};
export const getAbdelrahmanMosad = () => (generateSingleReciter({
    arrOfSuwar,
    reciter: reciterAbdelrahmanMosad,
    url
}));

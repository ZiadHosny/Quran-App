import { addZeros } from "../../../utils/addZeros.js";
import { QURAN_SUWAR } from "../../../utils/constants/suwar.js";
export const ABDELRAHMAN_MOSAD = 'https://download.tvquran.com/download/recitations/372/303';
const abdelrahmanMosadNumbers = [
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
export const getAbdelrahmanMosad = () => {
    const abdelrahmanMosad = [];
    const { id: quranReciterId, photo, quranReciter } = reciterAbdelrahmanMosad;
    abdelrahmanMosadNumbers.forEach((surahNumber) => {
        const surahIdWithZero = addZeros({ number: surahNumber, numOfZeros: 3 });
        abdelrahmanMosad.push({
            id: `${quranReciterId}-${surahNumber}`,
            surahNumber: surahNumber,
            photo,
            quranReciter,
            title: QURAN_SUWAR[surahNumber - 1],
            url: `${ABDELRAHMAN_MOSAD}/${surahIdWithZero}.mp3`
        });
    });
    return {
        abdelrahmanMosad: abdelrahmanMosad
    };
};

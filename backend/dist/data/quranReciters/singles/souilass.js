import { generateSingleReciter } from "../../generateList.js";
const url = `https://server16.mp3quran.net/souilass/Rewayat-Warsh-A-n-Nafi`;
const arrOfSuwar = [
    1, 18, 19, 25, 50, 51, 56, 57, 67, 73, 91, 97, 112,
];
export const reciterSouilass = {
    id: "souilass",
    quranReciter: "يونس اسويلص",
    photo: "https://i.pinimg.com/564x/dd/60/ca/dd60ca72855cee2c61b142d5f522542b.jpg",
};
export const getSouilass = () => generateSingleReciter({
    arrOfSuwar,
    reciter: reciterSouilass,
    url,
});

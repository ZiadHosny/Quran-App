import { QuranReciterInWebsite } from "../../utils/types.js";
import { generateSuwarForReciter } from "../generateList.js";

export const ISLAMWAY = "https://download.quran.islamway.net/quran3";

export const islamway: QuranReciterInWebsite[] = [
  {
    id: "ahmad_nu_mujawwad",
    quranReciter: "(مجود) أحمد نعينع",
    photo:
      "https://i.pinimg.com/564x/e7/5f/e1/e75fe1583ffecf9e2a78d0593f66cac4.jpg",
    quranReciterInWebsite: "2331/10935/48",
  },
];

export const getIslamway = () =>
  generateSuwarForReciter({
    quranReciters: islamway,
    website: "islamway",
  });

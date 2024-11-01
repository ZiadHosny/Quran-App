import { QuranReciterInWebsite } from "../../utils/types.js";
import { generateSuwarForReciter } from "../generateList.js";

export const ISLAMIC = "https://cdn.islamic.network/quran/audio-surah/128/ar";

export const islamic: QuranReciterInWebsite[] = [];

export const getIslamic = () =>
  generateSuwarForReciter({
    quranReciters: islamic,
    website: "islamic",
  });

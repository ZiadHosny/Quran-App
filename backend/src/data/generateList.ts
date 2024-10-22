import { addZeros } from "../utils/addZeros.js";
import { QURAN_SUWAR } from "./suwar.js";
import {
  QuranReciterInWebsite,
  QuranRecitersWithWebsite,
  Surah,
  SuwarMap,
  Website,
} from "../utils/types.js";
import { ISLAMWAY } from "./quranReciters/islamway.js";

interface GenerateUrlProps {
  index: number;
  website?: Website;
  quranReciterInWebsite: string;
  websiteUrl?: string;
}
const generateUrl = ({
  index,
  website,
  quranReciterInWebsite,
  websiteUrl,
}: GenerateUrlProps) => {
  const id = addZeros({ number: index, numOfZeros: 3 });

  const quranReciterInWebsiteWithSurahId = `${quranReciterInWebsite}/${id}.mp3`;
  if (website === "mp3quran" && websiteUrl) {
    return `${websiteUrl}/${quranReciterInWebsiteWithSurahId}`;
  } else if (website === "islamway")
    return `${ISLAMWAY}/${quranReciterInWebsiteWithSurahId}`;
  else return "WebsiteNotFound";
  // if (website === 'islamic')
  //     return `${ISLAMIC}.${quranReciterInWebsite}/${index}.mp3`
  // else if (website === 'islamway')
  //     return `${ISLAMWAY}/${quranReciterInWebsiteWithSurahId}`
  // else if (website === 'surahQuran')
  //     return `${SURAH_QURAN}__${quranReciterInWebsiteWithSurahId}`
};
interface GenerateListProps extends QuranReciterInWebsite {
  website: Website;
}
export const generateList = ({
  id,
  quranReciter,
  photo,
  website,
  quranReciterInWebsite,
  websiteUrl,
}: GenerateListProps) => {
  const list: Surah[] = [];

  for (let i = 1; i <= 114; i++) {
    const url = generateUrl({
      index: i,
      website,
      quranReciterInWebsite: quranReciterInWebsite ?? id,
      websiteUrl,
    });
    list.push({
      id: `${id}-${i.toString()}`,
      surahNumber: i,
      title: QURAN_SUWAR[i - 1],
      quranReciter,
      photo,
      url,
    });
  }
  return list;
};

export const generateSuwarForReciter = ({
  quranReciters,
  website,
}: QuranRecitersWithWebsite): SuwarMap => {
  let quran: SuwarMap = {};
  quranReciters.forEach(
    ({ id, photo, quranReciter, quranReciterInWebsite, websiteUrl }) => {
      quran[id] = generateList({
        id,
        quranReciter,
        photo,
        quranReciterInWebsite,
        website,
        websiteUrl,
      });
    }
  );

  return quran;
};

type GenerateSingleReciterProps = {
  arrOfSuwar: number[];
  reciter: QuranReciterInWebsite;
  url: string;
};

export const generateSingleReciter = ({
  arrOfSuwar,
  reciter,
  url,
}: GenerateSingleReciterProps) => {
  const reciterSuwar: Surah[] = [];
  const { photo, quranReciter, id: reciterId } = reciter;
  arrOfSuwar.forEach((surahNumber) => {
    const surahIdWithZero = addZeros({ number: surahNumber, numOfZeros: 3 });
    reciterSuwar.push({
      id: `${reciterId}-${surahNumber}`,
      title: QURAN_SUWAR[surahNumber - 1],
      photo,
      quranReciter,
      surahNumber,
      url: `${url}/${surahIdWithZero}.mp3`,
    });
  });

  return {
    [reciterId]: reciterSuwar,
  };
};

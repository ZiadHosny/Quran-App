import { addZeros } from '../utils/addZeros';
import { QURAN_SUWAR } from './suwar';
import type {
  QuranReciterInWebsite,
  QuranRecitersWithWebsite,
  Surah,
  SuwarMap,
  Website,
} from '../utils/types';

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
  if (website === 'mp3quran' && websiteUrl) {
    return `${websiteUrl}/${quranReciterInWebsiteWithSurahId}`;
  }
  else return 'WebsiteNotFound';
};

interface GenerateListProps extends QuranReciterInWebsite {
  website: Website;
}
export const generateList = ({
  id,
  quranReciter,
  quranReciterEn,
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
      title: QURAN_SUWAR[i - 1].ar,
      titleEn: QURAN_SUWAR[i - 1].en,
      ayahs: QURAN_SUWAR[i - 1].ayahs,
      type: QURAN_SUWAR[i - 1].type,
      quranReciter,
      quranReciterEn,
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
    ({ id, photo, quranReciter, quranReciterEn, quranReciterInWebsite, websiteUrl }) => {
      quran[id] = generateList({
        id,
        quranReciter,
        quranReciterEn,
        photo,
        quranReciterInWebsite,
        website,
        websiteUrl,
      });
    },
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
  const { photo, quranReciter, quranReciterEn, id: reciterId } = reciter;
  arrOfSuwar.forEach((surahNumber) => {
    const surahIdWithZero = addZeros({ number: surahNumber, numOfZeros: 3 });
    reciterSuwar.push({
      id: `${reciterId}-${surahNumber}`,
      title: QURAN_SUWAR[surahNumber - 1].ar,
      titleEn: QURAN_SUWAR[surahNumber - 1].en,
      ayahs: QURAN_SUWAR[surahNumber - 1].ayahs,
      type: QURAN_SUWAR[surahNumber - 1].type,
      photo,
      quranReciter,
      quranReciterEn,
      surahNumber,
      url: `${url}/${surahIdWithZero}.mp3`,
    });
  });

  return {
    [reciterId]: reciterSuwar,
  };
};

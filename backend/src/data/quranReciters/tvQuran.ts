import { generateSuwarForReciter } from '../generateList';

export const TV_QURAN = 'https://download.tvquran.com/download/recitations';

export const tvQuran = [];

export const getTvQuran = () =>
  generateSuwarForReciter({
    quranReciters: tvQuran,
    website: 'tvQuran',
  });

import { getIslamic, islamic } from './quranReciters/islamic';
import type { SuwarMap } from '../utils/types';
import {
  reciterAbdelrahmanMosad,
  getAbdelrahmanMosad,
} from './quranReciters/singles/abdelrahmanMosad';
import {
  getAhmedKhadr,
  reciterAhmedKhadr,
} from './quranReciters/singles/ahmedKhadr';
import { getMp3Quran, mp3Quran } from './quranReciters/mp3Quran';
import {
  getIslamSobhy,
  reciterIslamSobhy,
} from './quranReciters/singles/islamSobhy';
import { getIslamway, islamway } from './quranReciters/islamway';
import {
  getSouilass,
  reciterSouilass,
} from './quranReciters/singles/souilass';

export const getAllQuran = (): SuwarMap => {
  return {
    ...getIslamic(),
    ...getIslamway(),
    ...getMp3Quran(),
    ...getAbdelrahmanMosad(),
    ...getAhmedKhadr(),
    ...getIslamSobhy(),
    ...getSouilass(),
  };
};

export const allQuranReciters = () => {
  const allReciters = [
    ...islamway,
    ...islamic,
    ...mp3Quran,
    reciterAbdelrahmanMosad,
    reciterAhmedKhadr,
    reciterIslamSobhy,
    reciterSouilass,
  ];

  return allReciters.map(({ id, photo, quranReciter }) => ({
    id,
    quranReciter,
    photo,
  }));
};

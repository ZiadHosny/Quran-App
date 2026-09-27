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
  getAhmadNuainaaMujawwad,
  reciterAhmadNuainaaMujawwad,
} from './quranReciters/singles/ahmadNuainaaMujawwad';

export const getAllQuran = (): SuwarMap => {
  return {
    ...getIslamic(),
    ...getMp3Quran(),
    ...getAbdelrahmanMosad(),
    ...getAhmedKhadr(),
    ...getAhmadNuainaaMujawwad(),
  };
};

export const allQuranReciters = () => {
  const allReciters = [
    ...islamic,
    ...mp3Quran,
    reciterAbdelrahmanMosad,
    reciterAhmedKhadr,
    reciterAhmadNuainaaMujawwad,
  ];

  return allReciters.map(({ id, photo, quranReciter, quranReciterEn }) => ({
    id,
    quranReciter,
    quranReciterEn,
    photo,
  }));
};

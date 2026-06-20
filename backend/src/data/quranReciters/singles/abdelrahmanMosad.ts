import type { SuwarMap } from '../../../utils/types';
import { generateSingleReciter } from '../../generateList';

const url = 'https://download.tvquran.com/download/recitations/372/303';

const arrOfSuwar: number[] = [32, 73, 78, 87, 88, 100, 107];

export const reciterAbdelrahmanMosad = {
  id: 'abdelrahmanMosad',
  quranReciter: 'عبد الرحمن مسعد',
  quranReciterEn: 'Abdul Rahman Masad',
  photo: 'https://i.pinimg.com/564x/bc/8f/2b/bc8f2b7a713d2021b9258475d67b588a.jpg',
};

export const getAbdelrahmanMosad = (): SuwarMap =>
  generateSingleReciter({
    arrOfSuwar,
    reciter: reciterAbdelrahmanMosad,
    url,
  });

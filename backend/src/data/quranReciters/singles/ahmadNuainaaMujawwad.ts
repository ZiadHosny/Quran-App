import type { SuwarMap } from '../../../utils/types';
import { generateSingleReciter } from '../../generateList';

const url = `https://archive.org/download/Ahmed_Nuaina-Mujawwad2_el-moslem.com`;

const arrOfSuwar: number[] = Array.from({ length: 114 }, (_, i) => i + 1);

export const reciterAhmadNuainaaMujawwad = {
  id: 'ahmad_nu_mujawwad',
  quranReciter: '(مجود) أحمد نعينع',
  quranReciterEn: "Ahmad Na'inaa (Mujawwad)",
  photo: 'https://i.pinimg.com/564x/e7/5f/e1/e75fe1583ffecf9e2a78d0593f66cac4.jpg',
};

export const getAhmadNuainaaMujawwad = (): SuwarMap =>
  generateSingleReciter({
    arrOfSuwar,
    reciter: reciterAhmadNuainaaMujawwad,
    url,
  });

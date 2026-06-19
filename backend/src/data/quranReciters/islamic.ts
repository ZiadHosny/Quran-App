import type { QuranReciterInWebsite } from '../../utils/types';
import { generateSuwarForReciter } from '../generateList';

export const ISLAMIC = 'https://cdn.islamic.network/quran/audio-surah/128/ar';

export const islamic: QuranReciterInWebsite[] = [];

export const getIslamic = () =>
  generateSuwarForReciter({
    quranReciters: islamic,
    website: 'islamic',
  });

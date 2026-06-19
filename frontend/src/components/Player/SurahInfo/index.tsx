import { useGetSurahsInfoQuery } from '../../../store/quran.store';
import { SurahType } from '../../../utils/types';
import './surahInfo.scss';

type Props = {
    surah: SurahType;
};

export const SurahInfo = ({ surah }: Props) => {
    const { data: surahsInfo } = useGetSurahsInfoQuery();

    if (!surahsInfo || !surah.surahNumber) return null;

    const info = surahsInfo[surah.surahNumber - 1];
    if (!info) return null;

    return (
        <div className="surah-info" dir="rtl">
            <span className="surah-info__badge surah-info__badge--num">
                {surah.surahNumber} / 114
            </span>
            <span className={`surah-info__badge surah-info__badge--type ${info.type === 'مكية' ? 'makki' : 'madani'}`}>
                {info.type}
            </span>
            <span className="surah-info__badge surah-info__badge--ayahs">
                {info.ayahs} آية
            </span>
        </div>
    );
};

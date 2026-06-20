import { useGetSurahsInfoQuery } from '../../../store/quran.store';
import { SurahType } from '../../../utils/types';
import { useTranslation } from '../../../hooks/useTranslation';
import './surahInfo.scss';

type Props = {
    surah: SurahType;
};

export const SurahInfo = ({ surah }: Props) => {
    const { data: surahsInfo } = useGetSurahsInfoQuery();
    const { t, lang } = useTranslation();

    if (!surahsInfo || !surah.surahNumber) return null;

    const info = surahsInfo[surah.surahNumber - 1];
    if (!info) return null;

    const typeLabel = info.type === 'مكية' ? t('makki') : t('madani');

    return (
        <div className="surah-info" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <span className="surah-info__badge surah-info__badge--num">
                {surah.surahNumber} / 114
            </span>
            <span className={`surah-info__badge surah-info__badge--type ${info.type === 'مكية' ? 'makki' : 'madani'}`}>
                {typeLabel}
            </span>
            <span className="surah-info__badge surah-info__badge--ayahs">
                {info.ayahs} {t('verses')}
            </span>
        </div>
    );
};

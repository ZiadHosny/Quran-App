import { SurahType } from '../../../utils/types';
import { useTranslation } from '../../../hooks/useTranslation';
import './surahInfo.scss';

type Props = {
    surah: SurahType;
};

export const SurahInfo = ({ surah }: Props) => {
    const { t, lang } = useTranslation();

    if (!surah.surahNumber || !surah.ayahs || !surah.type) return null;

    const typeLabel = lang === 'en' ? surah.type : (surah.type === 'Meccan' ? 'مكية' : 'مدنية');

    return (
        <div className="surah-info" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <span className="surah-info__badge surah-info__badge--num">
                {surah.surahNumber} / 114
            </span>
            <span className={`surah-info__badge surah-info__badge--type ${surah.type === 'Meccan' ? 'makki' : 'madani'}`}>
                {typeLabel}
            </span>
            <span className="surah-info__badge surah-info__badge--ayahs">
                {surah.ayahs} {t('verses')}
            </span>
        </div>
    );
};

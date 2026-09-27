import { useEffect } from 'react'
import { useMostPlayed } from '../hooks/useMostPlayed';
import { Surah } from '../components/Surah';
import { useTranslation } from '../hooks/useTranslation';

export const MostPlayed = () => {
    const { getMostPlayed, mostPlayed } = useMostPlayed()
    const { t, lang } = useTranslation();

    useEffect(() => {
        const fn = async () => {
            await getMostPlayed()
        }
        fn()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        mostPlayed && mostPlayed.length > 0 ?
            <div className='playlist' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                {mostPlayed.map((surah) => (
                    <Surah key={surah.id} surah={surah} />
                ))}
            </div>
            :
            <div className='noSurah'>
                {t('noSurah')}
            </div>
    )
}

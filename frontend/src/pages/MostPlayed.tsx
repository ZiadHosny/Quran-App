import { useEffect } from 'react'
import { useSurah } from '../hooks/useSurah';
import { useControllers } from '../hooks/useControllers';
import { useMostPlayed } from '../hooks/useMostPlayed';
import { Player } from '../components/Player';
import { Surah } from '../components/Surah';
import { useTranslation } from '../hooks/useTranslation';

export const MostPlayed = () => {
    const { setIsPlaying, setRepeatSection } = useControllers();
    const {
        setSurahDuration,
        setSurahProgress,
    } = useSurah()
    const { getMostPlayed, mostPlayed } = useMostPlayed()
    const { t } = useTranslation();

    useEffect(() => {
        setIsPlaying(false)
        setSurahDuration('')
        setSurahProgress(0)
        setRepeatSection({ times: 0, isRepeat: false, end: 100, start: 0 })
        const fn = async () => {
            await getMostPlayed()
        }
        fn()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        mostPlayed && mostPlayed.length > 0 ?
            <>
                <Player />
                <div className='playlist'>
                    {mostPlayed.map((surah) => (
                        <Surah key={surah.id} surah={surah} />
                    ))}
                </div>
            </>
            :
            <div className='noSurah'>
                {t('noSurah')}
            </div>
    )
}

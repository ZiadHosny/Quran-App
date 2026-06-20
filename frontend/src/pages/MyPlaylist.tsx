/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Player } from '../components/Player';
import { useSurah } from '../hooks/useSurah';
import { useControllers } from '../hooks/useControllers';
import { Surah } from '../components/Surah';
import { usePlaylist } from '../hooks/usePlaylist';
import { useTranslation } from '../hooks/useTranslation';

export const MyPlaylist = () => {
  const { setIsPlaying, setRepeatSection } = useControllers();
  const {
    setSurahDuration,
    setSurahProgress,
  } = useSurah()
  const { getPlaylist, playlist } = usePlaylist()
  const { t, lang } = useTranslation();

  useEffect(() => {
    setIsPlaying(false)
    setSurahDuration('')
    setSurahProgress(0)
    setRepeatSection({ times: 0, isRepeat: false, end: 100, start: 0 })
    const fn = async () => {
      await getPlaylist()
    }
    fn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    playlist && playlist.length > 0 ?
      <>
        <Player />
        <div className='playlist' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          {playlist.map((surah) => (
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

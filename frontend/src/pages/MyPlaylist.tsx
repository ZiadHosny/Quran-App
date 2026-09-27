/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Surah } from '../components/Surah';
import { usePlaylist } from '../hooks/usePlaylist';
import { useTranslation } from '../hooks/useTranslation';

export const MyPlaylist = () => {
  const { getPlaylist, playlist } = usePlaylist()
  const { t, lang } = useTranslation();

  useEffect(() => {
    const fn = async () => {
      await getPlaylist()
    }
    fn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    playlist && playlist.length > 0 ?
      <div className='playlist' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {playlist.map((surah) => (
          <Surah key={surah.id} surah={surah} />
        ))}
      </div>
      :
      <div className='noSurah'>
        {t('noSurah')}
      </div>
  )
}

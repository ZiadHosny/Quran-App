/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Player } from '../components/Player';
import { useSurah } from '../hooks/useSurah';
import { useControllers } from '../hooks/useControllers';
import { Surah } from '../components/Surah';
import { usePlaylist } from '../hooks/usePlaylist';

export const MyPlaylist = () => {
  const { setIsPlaying, setRepeatSection } = useControllers();
  const {
    setCurrentSurah,
    setSurahDuration,
    setSurahProgress,
    playlist,
  } = useSurah()
  const { getPlaylist } = usePlaylist()

  useEffect(() => {
    setCurrentSurah(playlist[0]);
  }, [playlist])

  useEffect(() => () => {
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
        <div className='playlist'>
          {playlist.map((surah) => (
            <Surah key={surah.id} surah={surah} />
          ))}
        </div>
      </>
      :
      <div style={{ textAlign: 'center', fontSize: 20, color: 'darkgray', marginTop: 16 }}>Not Found Any Surah in Your Playlist</div>
  )
}

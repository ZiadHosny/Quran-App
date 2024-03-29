import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllSuwarByQuranReciterQuery } from '../store/quran.store';
import { Player } from '../components/Player';
import { useSurah } from '../hooks/useSurah';
import { objIsEmpty } from '../utils/obj';
import { SurahType } from '../utils/types';
import { useControllers } from '../hooks/useControllers';
import { Surah } from '../components/Surah';
import { useLoading } from '../hooks/useLoading';
import { usePlaylist } from '../hooks/usePlaylist';
import { Id } from 'react-toastify';

export const QuranSuwar = () => {
  const params = useParams();
  const { setIsPlaying, setRepeatSection } = useControllers();
  const [id, setId] = useState<Id>()
  const { setLoading } = useLoading()
  const {
    setCurrentSurah,
    setSuwar,
    currentSurah,
    setSurahDuration,
    setSurahProgress,
    quranSuwarFilter
  } = useSurah()
  const { isLoading, data: suwar } = useGetAllSuwarByQuranReciterQuery({ quranReciter: params.quranReciter! })
  const { getPlaylist } = usePlaylist()
  useEffect(() => {
    if (suwar) {
      setSuwar(suwar)
      if (objIsEmpty(currentSurah)) {
        setCurrentSurah(suwar[0])
      }
    }
  }, [params, currentSurah, setCurrentSurah, setSuwar, suwar])

  // useEffect(() => {
  //   console.log(id)
  //   if (isLoading) {
  //     const id = setLoading({ msg: `${params.quranReciter} جاري تحميل السور للقارئ` })
  //     if (id)
  //       setId(id)
  //   }
  //   else {
  //     setLoading({ id })
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading])

  useEffect(() => {
    setCurrentSurah({} as SurahType);
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
    quranSuwarFilter ?
      <>
        <Player />
        <div className='playlist'>
          {quranSuwarFilter.map((surah) => (
            <Surah key={surah.id} surah={surah} />))}
        </div>
      </>
      :
      <></>
  )
}

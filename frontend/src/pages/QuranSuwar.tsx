import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllSuwarByQuranReciterQuery } from '../store/quran.store';
import { useSurah } from '../hooks/useSurah';
import { objIsEmpty } from '../utils/obj';
import { Surah } from '../components/Surah';
import { usePlaylist } from '../hooks/usePlaylist';
import { useTranslation } from '../hooks/useTranslation';

export const QuranSuwar = () => {
  const params = useParams();
  const { lang } = useTranslation();
  const {
    setCurrentSurah,
    setSuwar,
    currentSurah,
    quranSuwarFilter
  } = useSurah()
  const { data: suwar } = useGetAllSuwarByQuranReciterQuery({ quranReciter: params.quranReciter! })
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
    const fn = async () => {
      await getPlaylist()
    }
    fn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    quranSuwarFilter ?
      <div className='playlist' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {quranSuwarFilter.map((surah) => (
          <Surah key={surah.id} surah={surah} />))}
      </div>
      :
      <></>
  )
}

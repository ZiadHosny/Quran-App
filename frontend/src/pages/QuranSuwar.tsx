import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks';
import { loadingActions } from '../store/loading.store';
import { useGetAllSuwarByQuranReciterQuery } from '../store/quran.store';
import { Player } from '../components/Player';
import { useSurah } from '../hooks/useSurah';
import { objIsEmpty } from '../utils/obj';
import { SurahType } from '../utils/types';
import { useControllers } from '../hooks/useControllers';
import { Surah } from '../components/Surah';

export const QuranSuwar = () => {
  const params = useParams()
  const dispatch = useAppDispatch();
  const { setIsPlaying } = useControllers();
  const { setCurrentSurah, setSuwar, currentSurah } = useSurah()
  const { isLoading, data: suwar } = useGetAllSuwarByQuranReciterQuery({ quranReciter: params.quranReciter! })

  useEffect(() => {
    if (suwar) {
      setSuwar(suwar)
      if (objIsEmpty(currentSurah)) {
        setCurrentSurah(suwar[0])
      }
    }
  }, [params, currentSurah, setCurrentSurah, setSuwar, suwar])

  useEffect(() => {
    dispatch(loadingActions.loading(isLoading))
  }, [isLoading, dispatch])

  useEffect(() => () => {
    setCurrentSurah({} as SurahType);
    setIsPlaying(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []
  );

  return (
    <main>
      <div className='container'>
        {
          suwar ?
            <>
              <Player />
              <div className='playlist'>
                {suwar.map((surah) => (
                  <Surah key={surah.id} surah={surah} />
                ))}
              </div>
            </>
            :
            <></>
        }
      </div>
    </main>
  )
}

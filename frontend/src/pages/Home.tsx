import { useEffect } from 'react'
import { QuranReciter } from '../components/QuranReciter'
import { useGetAllQuranRecitersQuery } from '../store/quran.store'
import { useAppDispatch } from '../store/hooks';
import { loadingActions } from '../store/loading.store';

export const Home = () => {
  const { isLoading, data: quranReciters } = useGetAllQuranRecitersQuery({})
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadingActions.loading(isLoading))
  }, [isLoading, dispatch])

  return (
    <main>
      <div className='container'>
        {quranReciters?.map((quranReciter) => (
          <QuranReciter key={quranReciter.id} quranReciter={quranReciter} />
        ))}
      </div>
    </main>
  )
}

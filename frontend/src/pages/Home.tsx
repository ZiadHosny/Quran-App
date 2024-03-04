import { useEffect } from 'react'
import { QuranReciter } from '../components/QuranReciter'
import { useGetAllQuranRecitersQuery } from '../store/quran.store'
import { useLoading } from '../hooks/useLoading';

export const Home = () => {
  const { isLoading, data: quranReciters } = useGetAllQuranRecitersQuery({});
  const { setLoading } = useLoading();
  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading, setLoading])

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

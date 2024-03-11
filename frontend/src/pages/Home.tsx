import { useEffect } from 'react'
import { QuranReciter } from '../components/QuranReciter'
import { useProgress } from '../hooks/useProgress';
import { useSurah } from '../hooks/useSurah';

export const Home = () => {
  const { getAllQuranReciters } = useProgress();
  const { quranRecitersFilter } = useSurah()

  useEffect(() => {
    const fn = async () => {
      await getAllQuranReciters()
    }
    fn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <div className='container'>
        {quranRecitersFilter.map((quranReciter) => (
          <QuranReciter key={quranReciter.id} quranReciter={quranReciter} />
        ))}
      </div>
    </main>
  )
}

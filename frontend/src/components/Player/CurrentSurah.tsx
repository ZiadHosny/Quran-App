import { SurahType } from '../../utils/types'

type Props = {
    imgRef: React.RefObject<HTMLInputElement>
    surah: SurahType
}

export const CurrentSurah = ({ imgRef, surah }: Props) => {
    return (
        <>
            <header>
                <h2 className='arabic-font'>{surah.title}</h2>
            </header>
            <div className="cd" ref={imgRef}>
                <div className="cd-thumb" style={{ backgroundImage: `url(${surah.photo})` }}>
                </div>
            </div>
            <h3 className='arabic-font' style={{ textAlign: 'center', fontWeight: 600 }}>{surah.quranReciter}</h3>
        </>
    )
}

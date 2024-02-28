import { SurahType } from '../../utils/types'

type Props = {
    imgRef: React.RefObject<HTMLInputElement>
    surah: SurahType
}

export const CurrentSurah = ({ imgRef, surah }: Props) => {
    return (
        <>
            <header>
                <h2>{surah.title}</h2>
            </header>
            <div className="cd" ref={imgRef}>
                <div className="cd-thumb" style={{ backgroundImage: `url(${surah.photo})` }}>
                </div>
            </div>
            <h3 style={{ textAlign: 'center' }}>{surah.quranReciter}</h3>
        </>
    )
}

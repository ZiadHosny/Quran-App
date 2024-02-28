import { TbRepeatOnce } from 'react-icons/tb'
import { MdRepeatOn } from 'react-icons/md'
import { FaBackward, FaForward, FaRandom, FaPlay, FaPause } from 'react-icons/fa';
import { useControllers } from '../../../hooks/useControllers';
import { SurahElemInput } from '../../../utils/types';
import { useSurah } from '../../../hooks/useSurah';

export const Controllers = ({ surahElem }: SurahElemInput) => {
    const {
        isPlaying,
        handleIsPlaying,
        isRepeat,
        handleIsRepeat,
        isRandom,
        handleIsRandom,
        repeatSection,
        setRepeatSection,
    } = useControllers()
    const { handleNextSurah, prevSurah } = useSurah()

    // Handle Prev And Next
    const handlePrevSurahBtn = () => {
        prevSurah()
    }

    const handleNextSurahBtn = () => {
        handleNextSurah(surahElem.current)
    }

    const handleIsRepeatSection = () => {
        setRepeatSection({ isRepeat: !repeatSection.isRepeat })
    }

    return (
        <div className="control">
            <div className="btn" style={{ position: 'relative', color: repeatSection.isRepeat ? 'black' : 'grey' }}
                onClick={handleIsRepeatSection}>
                <div style={{ position: 'absolute', top: 0, left: 8 }}>{repeatSection.times}</div>
                <MdRepeatOn />
            </div>
            <div className="btn" onClick={handleIsRepeat}>
                {isRepeat ? <TbRepeatOnce color='black' /> : <TbRepeatOnce />}
            </div>
            <div className="btn" onClick={handlePrevSurahBtn}>
                <FaBackward color='black' />
            </div>
            <div className="btn btn-toggle-play" onClick={handleIsPlaying}>
                {
                    isPlaying ?
                        <FaPause color='white' />
                        :
                        <FaPlay color='white' />
                }
            </div>
            <div className="btn btn-next" onClick={handleNextSurahBtn}>
                <FaForward color='black' />
            </div>
            <div className="btn btn-random" onClick={handleIsRandom}>
                {isRandom ? <FaRandom color='black' /> : <FaRandom />}
            </div>
            <div className="btn"></div>
        </div>
    )
}

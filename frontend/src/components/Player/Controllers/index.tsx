import { TbRepeatOnce } from 'react-icons/tb'
import { MdRepeatOn } from 'react-icons/md'
import { FaBackward, FaForward, FaRandom, FaPlay, FaPause } from 'react-icons/fa';
import { useControllers } from '../../../hooks/useControllers';
import { SurahElemInput } from '../../../utils/types';
import { useSurah } from '../../../hooks/useSurah';
import { useTranslation } from '../../../hooks/useTranslation';

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
    const { lang } = useTranslation();

    const handlePrevSurahBtn = () => prevSurah()
    const handleNextSurahBtn = () => handleNextSurah(surahElem.current)
    const handleIsRepeatSection = () => setRepeatSection({ isRepeat: !repeatSection.isRepeat })

    const arrowStyle = lang === 'ar' ? { transform: 'scaleX(-1)' } : {};
    const badgePos = lang === 'ar' ? { position: 'absolute' as const, top: 0, right: 8, fontSize: 10 }
                                   : { position: 'absolute' as const, top: 0, left: 8, fontSize: 10 };

    return (
        <div className="control">
            <div
                className={`btn ${repeatSection.isRepeat ? 'active' : ''}`}
                style={{ position: 'relative' }}
                onClick={handleIsRepeatSection}
            >
                {repeatSection.times > 0 && (
                    <div style={badgePos}>
                        {repeatSection.times}
                    </div>
                )}
                <MdRepeatOn />
            </div>

            <div className={`btn ${isRepeat ? 'active' : ''}`} onClick={handleIsRepeat}>
                <TbRepeatOnce />
            </div>

            <div className="btn" onClick={handlePrevSurahBtn}>
                <FaBackward style={arrowStyle} />
            </div>

            <div className="btn btn-toggle-play" onClick={handleIsPlaying}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </div>

            <div className="btn" onClick={handleNextSurahBtn}>
                <FaForward style={arrowStyle} />
            </div>

            <div className={`btn ${isRandom ? 'active' : ''}`} onClick={handleIsRandom}>
                <FaRandom />
            </div>

            <div className="btn" />
        </div>
    )
}

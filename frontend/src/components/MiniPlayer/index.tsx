import { FaPlay, FaPause, FaForward } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SurahType } from '../../utils/types';
import { useTranslation } from '../../hooks/useTranslation';
import './miniPlayer.scss';

type Props = {
    isVisible: boolean;
    surah: SurahType;
    isPlaying: boolean;
    surahSlider: number;
    onExpand: () => void;
    onPlayPause: () => void;
    onNext: () => void;
};

export const MiniPlayer = ({ isVisible, surah, isPlaying, surahSlider, onExpand, onPlayPause, onNext }: Props) => {
    const { lang } = useTranslation();

    const surahTitle = lang === 'en' && surah.titleEn ? surah.titleEn : surah.title;
    const reciterName = lang === 'en' && surah.quranReciterEn ? surah.quranReciterEn : surah.quranReciter;
    const arrowStyle = lang === 'ar' ? { transform: 'scaleX(-1)' } : {};

    return (
        <div
            className={`mini-player${isVisible ? ' mini-player--visible' : ''}`}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
            <div className="mini-progress-track">
                <div className="mini-progress-fill" style={{ width: `${surahSlider}%` }} />
            </div>

            <div
                className="mini-thumb"
                style={{ backgroundImage: `url(${surah.photo})` }}
                onClick={onExpand}
            />

            <div className="mini-info" onClick={onExpand}>
                <span className={`mini-title${!(lang === 'en' && surah.titleEn) ? ' arabic-font' : ''}`}>
                    {surahTitle}
                </span>
                <span className={`mini-reciter${!(lang === 'en' && surah.quranReciterEn) ? ' arabic-font' : ''}`}>
                    {reciterName}
                </span>
            </div>

            <div className="mini-controls">
                <div className="mini-btn" onClick={onPlayPause}>
                    {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
                </div>
                <div className="mini-btn" onClick={onNext}>
                    <FaForward size={16} style={arrowStyle} />
                </div>
            </div>

            <div className="mini-btn mini-expand-btn" onClick={onExpand}>
                <MdKeyboardArrowDown size={22} />
            </div>
        </div>
    );
};

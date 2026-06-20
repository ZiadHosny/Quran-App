import { useControllers } from '../../../hooks/useControllers';
import { SurahElemInput } from '../../../utils/types';
import { useSurahSlider } from '../../../hooks/useSurahSlider';
import { useTranslation } from '../../../hooks/useTranslation';
import './repeatSection.scss';

export const RepeatSection = ({ surahElem }: SurahElemInput) => {
    const { repeatSection, setRepeatSection } = useControllers();
    const { setSurahSlider } = useSurahSlider();
    const { t } = useTranslation();

    if (!repeatSection.isRepeat) return null;

    const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        if (val >= repeatSection.end) return;
        setRepeatSection({ start: val });
        if (surahElem.current?.duration) {
            surahElem.current.currentTime = val * surahElem.current.duration / 100;
            setSurahSlider(val);
        }
    };

    const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        if (val <= repeatSection.start) return;
        setRepeatSection({ end: val });
    };

    const decrement = () => setRepeatSection({ times: Math.max(1, repeatSection.times - 1) });
    const increment = () => setRepeatSection({ times: repeatSection.times + 1 });

    const fillLeft = `${repeatSection.start}%`;
    const fillWidth = `${repeatSection.end - repeatSection.start}%`;

    return (
        <div className="repeat-section">
            <div className="repeat-range-wrap">
                <div className="repeat-track">
                    <div className="repeat-fill" style={{ left: fillLeft, width: fillWidth }} />
                </div>
                <input
                    type="range" min={0} max={100} step={1}
                    value={repeatSection.start}
                    className="repeat-input"
                    onChange={handleStartChange}
                />
                <input
                    type="range" min={0} max={100} step={1}
                    value={repeatSection.end}
                    className="repeat-input"
                    onChange={handleEndChange}
                />
            </div>

            <div className="repeat-labels">
                <span>{repeatSection.start}%</span>
                <span>{repeatSection.end}%</span>
            </div>

            <div className="repeat-times-row">
                <button className="times-btn" onClick={decrement} disabled={repeatSection.times <= 1}>−</button>
                <div className="times-value">
                    <strong>{repeatSection.times}</strong>
                    <small>{t('times')}</small>
                </div>
                <button className="times-btn" onClick={increment}>+</button>
            </div>
        </div>
    );
};

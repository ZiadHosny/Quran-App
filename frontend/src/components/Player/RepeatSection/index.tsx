import MultiRangeSlider from "multi-range-slider-react";
import { useControllers } from "../../../hooks/useControllers";
import { SurahElemInput } from "../../../utils/types";
import { useSurahSlider } from "../../../hooks/useSurahSlider";

export const RepeatSection = ({ surahElem }: SurahElemInput) => {
    const {
        repeatSection,
        setRepeatSection,
    } = useControllers()

    const {
        setSurahSlider,
    } = useSurahSlider()


    return (
        <div style={{ display: `${repeatSection.isRepeat ? 'flex' : 'none'}`, alignItems: 'center' }}>
            <MultiRangeSlider
                style={{ width: '100%', marginRight: 10 }}
                minValue={repeatSection.start}
                maxValue={repeatSection.end}
                onChange={(e) => {
                    if (surahElem.current && surahElem.current.duration && e.minValue !== repeatSection.start) {
                        setRepeatSection({ start: e.minValue })
                        setSurahSlider(e.minValue);
                        surahElem.current.currentTime = e.minValue * surahElem.current.duration / 100
                    }
                    setRepeatSection({ end: e.maxValue })
                }}
            />
            <div>
                <div style={{ textAlign: 'center' }}>Times :
                    <input
                        style={{ borderRadius: 5, textAlign: 'center', fontSize: 17, width: 70 }}
                        type="number" min={0}
                        value={Number(repeatSection.times).toString()}
                        onChange={(e) => {
                            setRepeatSection({ times: Number(e.target.value) })
                        }} />
                </div>
            </div>
        </div>
    )
}

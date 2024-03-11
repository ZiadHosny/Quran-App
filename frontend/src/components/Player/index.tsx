import { useEffect, useRef } from 'react'

import './player.scss'
import { useControllers } from '../../hooks/useControllers';
import { Slider } from './Slider';
// import { useUpdateProgress } from '../../hooks/useUpdateProgress';
import { CurrentSurah } from './CurrentSurah';
import { useSurahSlider } from '../../hooks/useSurahSlider';
import { Controllers } from './Controllers';
import { useSurah } from '../../hooks/useSurah';
import { RepeatSection } from './RepeatSection';
import { useParams } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';
import { toast } from 'react-toastify';
import { cantPlaySurahRightNow } from '../../utils/strings';

export const Player = () => {
    const params = useParams()
    const { saveProgress } = useProgress()
    // useControllers
    const {
        isPlaying,
        setIsPlaying,
        volume,
        onChangeVolume,
        repeatSection,
        setRepeatSection,
    } = useControllers()
    // useSurah
    const {
        currentSurah,
        surahDuration,
        handlePlayAndPause,
        resizeSingerImage,
        onSurahEnded,
        setSurahDuration,
    } = useSurah()
    // handle Volume
    const handleOnchangeVolume = (event: any) => {
        onChangeVolume(audioElem.current, event.target.value)
    }
    const {
        surahSlider,
        setSurahSlider,
        updateSurahSlider,
        onChangeSurahSlider,
        setSurahProgressFromLoggedInUser,
        getCurrentTime,
        setSurahDurationFn,
    } = useSurahSlider()

    const imgRef = useRef<HTMLInputElement>(null);
    const audioElem = useRef<HTMLAudioElement>(null);
    // const [repeatSection, setRepeatSection] = useState(false)
    // const [startSection, setStartSection] = useState(0)
    // const [endSection, setEndSection] = useState(100)
    // const [repeatTimes, setRepeatTimes] = useState(0)

    // const [{ }, updateProgress] = useUpdateProgress()

    const currentTime = getCurrentTime(audioElem.current)

    // get Surah Duration And set Surah Progress From Logged In User
    const onLoadedData = (event: any) => {
        const duration = event.currentTarget.duration
        setSurahDurationFn(duration)
        setSurahProgressFromLoggedInUser(audioElem.current, duration)
    }

    // handle surah Slider
    const handleOnChangeSurahSlider = (event: any) => {
        onChangeSurahSlider(audioElem.current, event.target.value)
    }

    // Update current Surah Time
    const onTimeUpdate = (event: any) => {
        const { currentTime, duration } = event.currentTarget

        if (repeatSection.isRepeat && audioElem.current && duration) {
            if (repeatSection.end <= surahSlider && repeatSection.times === 1) {
                setIsPlaying(false)
                setRepeatSection({ times: 0 })
            } else if (repeatSection.end <= surahSlider && repeatSection.times > 1) {
                audioElem.current.currentTime = repeatSection.start * duration / 100
                setSurahSlider(repeatSection.start)
                return setRepeatSection({ times: repeatSection.times - 1 })
            }
        }
        updateSurahSlider(currentTime, duration)
    }
    // Handle Surah End
    const handleOnEnded = () => {
        if (repeatSection.times > 0 && audioElem.current) {
            audioElem.current.currentTime = 0
            audioElem.current.play()
        } else {
            onSurahEnded(audioElem.current)
        }
    }
    // Handle Play and Pause
    useEffect(() => {
        handlePlayAndPause(audioElem.current);
    }, [isPlaying, currentSurah, handlePlayAndPause]);

    // Save User Progress
    // useEffect(() => {
    //     console.log('--------- save Progress ----------')

    //     const fn = async () => {
    //         const intervalId = setInterval(async () => {
    //             console.log(volume, 'setInterval')
    //             if (params.quranReciter) {
    //                 await saveProgress({
    //                     audioElem: audioElem.current,
    //                     quranReciter: params.quranReciter,
    //                 })
    //             }
    //         }, 5000)
    //         return () => clearInterval(intervalId);
    //     }
    //     fn()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // on Surah Error
    const onError = () => {
        toast.error(cantPlaySurahRightNow)
    }
    // onLoad Start
    const onLoadStart = () => {
        setSurahDuration("Loading")
    }
    // onChangeVolume
    useEffect(() => {
        onChangeVolume(audioElem.current, volume)
    }, [onChangeVolume, volume])
    // Resize Image
    useEffect(() => {
        const handleResizeSingerImg = () => {
            resizeSingerImage(imgRef.current)
        }
        window.addEventListener("scroll", handleResizeSingerImg);
        return () => window.removeEventListener("scroll", handleResizeSingerImg);
    }, [resizeSingerImage]);

    return (
        <div className='dashboard'>
            <CurrentSurah imgRef={imgRef} surah={currentSurah} />
            <Controllers surahElem={audioElem} />
            <Slider onChange={handleOnchangeVolume} percentage={volume} volume />
            <Slider onChange={handleOnChangeSurahSlider}
                percentage={surahSlider}
                startSection={repeatSection.start}
                endSection={repeatSection.end}
                repeatTimes={repeatSection.times} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, fontWeight: 'bold' }}>
                <div>{currentTime}</div>
                <div>{surahDuration}</div>
            </div>
            <RepeatSection surahElem={audioElem} />
            <audio
                style={{ display: 'none' }}
                src={currentSurah.url}
                onLoadStart={onLoadStart}
                onTimeUpdate={onTimeUpdate}
                onLoadedData={onLoadedData}
                onEnded={handleOnEnded}
                onError={onError}
                ref={audioElem} >
            </audio>
        </div>
    )
}


{/* Start: <input
                            style={{ borderRadius: 5, textAlign: 'center', fontSize: 15, width: 70, marginRight: 3 }}
                            type="number"
                            min={0} max={endSection}
                            value={startSection}++
                            onChange={(e) => { setStartSection(Number(e.target.value)) }} />
                        End: <input
                            style={{ borderRadius: 5, textAlign: 'center', fontSize: 15, width: 70, marginRight: 3 }}
                            type="number"
                            min={0}
                            value={endSection}
                            onChange={(e) => { setEndSection(Number(e.target.value)) }} />
                        Times : <input
                            style={{ borderRadius: 5, textAlign: 'center', fontSize: 15, width: 70 }}
                            type="number" min={0}
                            value={repeatTimes}
                            onChange={(e) => { setRepeatTimes(Number(e.target.value)) }} />
                        <button onClick={() => {
                            if (audioElem.current) {
                                audioElem.current.currentTime = startSection
                                UpdateSongSlider(startSection, audioElem.current.duration ?? 0)
                            }
                        }}>Ok</button> */}
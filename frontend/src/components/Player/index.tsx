import { useEffect, useRef } from 'react'

import './player.scss'
import { useControllers } from '../../hooks/useControllers';
import { Slider } from './Slider';
// import { useUpdateProgress } from '../../hooks/useUpdateProgress';
import { playListPageState } from '../../atoms';
import { useRecoilValue } from 'recoil';
import { CurrentSurah } from './CurrentSurah';
import { useSurahSlider } from '../../hooks/useSurahSlider';
import { Controllers } from './Controllers';
import { useSurah } from '../../hooks/useSurah';
import { RepeatSection } from './RepeatSection';

export const Player = () => {
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
        setSurahDurationFn
    } = useSurahSlider()

    const imgRef = useRef<HTMLInputElement>(null);
    const audioElem = useRef<HTMLAudioElement>(null);
    const playListPage = useRecoilValue(playListPageState)
    // const [repeatSection, setRepeatSection] = useState(false)
    // const [startSection, setStartSection] = useState(0)
    // const [endSection, setEndSection] = useState(100)
    // const [repeatTimes, setRepeatTimes] = useState(0)

    // const [{ }, updateProgress] = useUpdateProgress()

    const currentTime = getCurrentTime(audioElem.current)

    // get Song Duration And set Song Progress From Logged In User
    const onLoadedData = (event: any) => {
        const duration = event.currentTarget.duration
        setSurahDurationFn(duration)
        setSurahProgressFromLoggedInUser(audioElem.current, duration)
    }

    // handle surah Slider
    const handleOnChangeSongSlider = (event: any) => {
        onChangeSurahSlider(audioElem.current, event.target.value)
    }

    // Update current Song Time
    const onTimeUpdate = (event: any) => {
        const { currentTime, duration } = event.currentTarget

        if (repeatSection.isRepeat && audioElem.current && duration) {
            if (repeatSection.end <= surahSlider && repeatSection.times === 1) {
                setIsPlaying(false)
                setRepeatSection({ times: 0 })
                return
            }
            if (repeatSection.end <= surahSlider) {
                audioElem.current.currentTime = repeatSection.start * duration / 100
                setSurahSlider(repeatSection.start)
                setRepeatSection({ times: repeatSection.times - 1 })
                return
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
    //     const intervalId = setInterval(async () => {
    //         updateProgress({
    //             surah: currentSong,
    //             volume: Math.trunc(volume),
    //             audioElem: audioElem.current,
    //             random: isRandom,
    //             repeat: isRepeat
    //         })
    //     }, 5000)
    //     return () => clearInterval(intervalId);
    // }, [currentSong, volume, isRandom, isRepeat, updateProgress])

    // useEffect(() => {
    //     setRepeatSection({ isRepeat: false })
    // }, [repeatSection.isRepeat])

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
            <Slider onChange={handleOnChangeSongSlider}
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
                onTimeUpdate={onTimeUpdate}
                onLoadedData={onLoadedData}
                onEnded={handleOnEnded}
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
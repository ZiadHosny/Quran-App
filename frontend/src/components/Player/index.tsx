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
import { toast } from 'react-toastify';
import { useMostPlayed } from '../../hooks/useMostPlayed';
import { useTranslation } from '../../hooks/useTranslation';

export const Player = () => {
    const { addSurahToMostPlayed } = useMostPlayed()
    const { t } = useTranslation();
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
    const dashboardRef = useRef<HTMLDivElement>(null);
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
    // onPlay
    const onPlay = async () => {
        await addSurahToMostPlayed({ surah: currentSurah })
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
        toast.error(t('cantPlay'))
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

    // Track player height so .playlist margin-top stays correct on mobile
    useEffect(() => {
        if (!dashboardRef.current) return;
        const el = dashboardRef.current;

        const update = () => {
            const h = el.offsetHeight + 60; // offsetHeight includes padding; +60 for navbar
            document.documentElement.style.setProperty('--player-height', `${h}px`);
        };

        update(); // set immediately on mount — no flash on first render

        const observer = new ResizeObserver(update);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div className='dashboard' ref={dashboardRef}>
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
                onPlay={onPlay}
                ref={audioElem}
            />
        </div >
    )
}
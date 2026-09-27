import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaRandom } from 'react-icons/fa';
import {
  MdSkipPrevious,
  MdSkipNext,
  MdReplay10,
  MdForward10,
  MdPlaylistPlay,
  MdVolumeUp,
  MdVolumeOff,
  MdRepeat,
  MdMoreVert,
  MdRepeatOn,
} from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

import './player.scss';
import { useControllers } from '../../hooks/useControllers';
import { Slider } from './Slider';
import { useSurahSlider } from '../../hooks/useSurahSlider';
import { useSurah } from '../../hooks/useSurah';
import { RepeatSection } from './RepeatSection';
import { SurahInfo } from './SurahInfo';
import { useMostPlayed } from '../../hooks/useMostPlayed';
import { useTranslation } from '../../hooks/useTranslation';
import { SurahType } from '../../utils/types';

const PLAYBACK_RATES = [1, 1.25, 1.5, 2];
const MOBILE_QUERY = '(max-width: 699px)';

type Panel = 'queue' | 'volume' | 'more' | null;

export const Player = () => {
  const { addSurahToMostPlayed } = useMostPlayed();
  const { t, lang } = useTranslation();

  const {
    isPlaying,
    setIsPlaying,
    handleIsPlaying,
    volume,
    onChangeVolume,
    isRandom,
    handleIsRandom,
    isRepeat,
    handleIsRepeat,
    repeatSection,
    setRepeatSection,
  } = useControllers();

  const {
    currentSurah,
    setCurrentSurah,
    surahDuration,
    handlePlayAndPause,
    handleNextSurah,
    prevSurah,
    onSurahEnded,
    setSurahDuration,
    suwar,
    isCurrentSurah,
  } = useSurah();

  const {
    surahSlider,
    setSurahSlider,
    updateSurahSlider,
    onChangeSurahSlider,
    setSurahProgressFromLoggedInUser,
    getCurrentTime,
    setSurahDurationFn,
  } = useSurahSlider();

  const [openPanel, setOpenPanel] = useState<Panel>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  );

  const audioElem = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const panelWrapRef = useRef<HTMLDivElement>(null);

  const currentTime = getCurrentTime(audioElem.current);
  const togglePanel = (panel: Panel) => setOpenPanel((prev) => (prev === panel ? null : panel));

  // track viewport so the many secondary controls collapse into "more" on mobile
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // close any open popover on outside click
  useEffect(() => {
    if (!openPanel) return;
    const handler = (e: MouseEvent) => {
      if (panelWrapRef.current && !panelWrapRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [openPanel]);

  // handle Volume
  const handleOnchangeVolume = (event: any) => {
    onChangeVolume(audioElem.current, event.target.value);
  };

  // get Surah Duration And set Surah Progress From Logged In User
  const onLoadedData = (event: any) => {
    const duration = event.currentTarget.duration;
    setSurahDurationFn(duration);
    setSurahProgressFromLoggedInUser(audioElem.current, duration);
    if (audioElem.current) audioElem.current.playbackRate = playbackRate;
  };

  // handle surah Slider
  const handleOnChangeSurahSlider = (event: any) => {
    onChangeSurahSlider(audioElem.current, event.target.value);
  };

  // Update current Surah Time
  const onTimeUpdate = (event: any) => {
    const { currentTime, duration } = event.currentTarget;

    if (repeatSection.isRepeat && audioElem.current && duration) {
      if (repeatSection.end <= surahSlider && repeatSection.times === 1) {
        setIsPlaying(false);
        setRepeatSection({ times: 0 });
      } else if (repeatSection.end <= surahSlider && repeatSection.times > 1) {
        audioElem.current.currentTime = (repeatSection.start * duration) / 100;
        setSurahSlider(repeatSection.start);
        return setRepeatSection({ times: repeatSection.times - 1 });
      }
    }
    updateSurahSlider(currentTime, duration);

    if ('mediaSession' in navigator && duration && isFinite(duration)) {
      try {
        navigator.mediaSession.setPositionState({
          duration,
          playbackRate: audioElem.current?.playbackRate || 1,
          position: currentTime,
        });
      } catch { }
    }
  };

  // Handle Surah End
  const handleOnEnded = () => {
    if (repeatSection.times > 0 && audioElem.current) {
      audioElem.current.currentTime = 0;
      audioElem.current.play();
    } else {
      onSurahEnded(audioElem.current);
    }
  };

  // onPlay
  const onPlay = async () => {
    await addSurahToMostPlayed({ surah: currentSurah });
  };

  // Handle Play and Pause
  useEffect(() => {
    handlePlayAndPause(audioElem.current);
  }, [isPlaying, currentSurah, handlePlayAndPause]);

  // playback speed
  const cyclePlaybackRate = () => {
    const nextRate = PLAYBACK_RATES[(PLAYBACK_RATES.indexOf(playbackRate) + 1) % PLAYBACK_RATES.length];
    setPlaybackRate(nextRate);
    if (audioElem.current) audioElem.current.playbackRate = nextRate;
  };

  // seek by n seconds
  const seekBy = (seconds: number) => {
    const elem = audioElem.current;
    if (!elem || !isFinite(elem.duration)) return;
    elem.currentTime = Math.min(Math.max(elem.currentTime + seconds, 0), elem.duration);
  };

  // share current surah
  const handleShare = async () => {
    const surahTitle = lang === 'en' && currentSurah.titleEn ? currentSurah.titleEn : currentSurah.title;
    const reciterName = lang === 'en' && currentSurah.quranReciterEn ? currentSurah.quranReciterEn : currentSurah.quranReciter;
    const text = lang === 'en'
      ? `Listen to ${surahTitle} recited by ${reciterName}`
      : `استمع إلى ${currentSurah.title} بصوت ${currentSurah.quranReciter}`;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: surahTitle, text, url });
      } catch (_) { }
    } else {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      toast.success(t('linkCopied'), { autoClose: 2000 });
    }
  };

  // OS/browser "Now Playing" media controls: metadata
  useEffect(() => {
    if (!('mediaSession' in navigator) || !currentSurah?.id) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentSurah.title,
      artist: currentSurah.quranReciter,
      album: 'Quran',
      artwork: currentSurah.photo
        ? [
          { src: currentSurah.photo, sizes: '96x96', type: 'image/jpeg' },
          { src: currentSurah.photo, sizes: '512x512', type: 'image/jpeg' },
        ]
        : [],
    });
  }, [currentSurah]);

  // OS/browser "Now Playing" media controls: playback state
  useEffect(() => {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
  }, [isPlaying]);

  // OS/browser "Now Playing" media controls: transport actions
  useEffect(() => {
    if (!('mediaSession' in navigator)) return;

    navigator.mediaSession.setActionHandler('play', () => setIsPlaying(true));
    navigator.mediaSession.setActionHandler('pause', () => setIsPlaying(false));
    navigator.mediaSession.setActionHandler('previoustrack', () => prevSurah());
    navigator.mediaSession.setActionHandler('nexttrack', () => handleNextSurah(audioElem.current));
    navigator.mediaSession.setActionHandler('seekbackward', (details) => seekBy(-(details.seekOffset || 10)));
    navigator.mediaSession.setActionHandler('seekforward', (details) => seekBy(details.seekOffset || 10));
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      const elem = audioElem.current;
      if (elem && details.seekTime != null) elem.currentTime = details.seekTime;
    });

    return () => {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
      navigator.mediaSession.setActionHandler('seekbackward', null);
      navigator.mediaSession.setActionHandler('seekforward', null);
      navigator.mediaSession.setActionHandler('seekto', null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsPlaying, prevSurah, handleNextSurah]);

  // on Surah Error
  const onError = () => {
    toast.error(t('cantPlay'));
  };

  // onLoad Start
  const onLoadStart = () => {
    setSurahDuration('Loading');
  };

  // onChangeVolume
  useEffect(() => {
    onChangeVolume(audioElem.current, volume);
  }, [onChangeVolume, volume]);

  // Track bar height so page content isn't hidden behind the fixed bottom bar
  useEffect(() => {
    if (!barRef.current) return;
    const el = barRef.current;

    const update = () => {
      document.documentElement.style.setProperty('--player-height', `${el.offsetHeight}px`);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const surahTitle = lang === 'en' && currentSurah.titleEn ? currentSurah.titleEn : currentSurah.title;
  const reciterName = lang === 'en' && currentSurah.quranReciterEn ? currentSurah.quranReciterEn : currentSurah.quranReciter;
  const arrowStyle = lang === 'ar' ? { transform: 'scaleX(-1)' as const } : {};

  const goToSurah = (surah: SurahType) => {
    setCurrentSurah(surah);
    setIsPlaying(true);
    setOpenPanel(null);
  };

  const queueList = (
    suwar.length === 0 ? (
      <div className="pb-popover-empty">{t('noSurah')}</div>
    ) : (
      suwar.map((surah) => (
        <div
          key={surah.id}
          className={`pb-queue-item${isCurrentSurah(surah.id) ? ' active' : ''}`}
          onClick={() => goToSurah(surah)}
        >
          <span className={lang === 'en' && surah.titleEn ? '' : 'arabic-font'}>
            {lang === 'en' && surah.titleEn ? surah.titleEn : surah.title}
          </span>
        </div>
      ))
    )
  );

  return (
    <div className="player-bar" ref={barRef} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="pb-backdrop" style={{ backgroundImage: `url(${currentSurah.photo})` }} />

      <Slider
        onChange={handleOnChangeSurahSlider}
        percentage={surahSlider}
        startSection={repeatSection.start}
        endSection={repeatSection.end}
        repeatTimes={repeatSection.times}
      />

      <div className="player-bar-row" ref={panelWrapRef}>
        <div className="pb-side pb-side--info">
          <div className="pb-thumb" style={{ backgroundImage: `url(${currentSurah.photo})` }} />
          <div className="player-bar-info">
            <span className={`pb-title${lang === 'en' && currentSurah.titleEn ? '' : ' arabic-font'}`}>{surahTitle}</span>
            <span className={`pb-reciter${lang === 'en' && currentSurah.quranReciterEn ? '' : ' arabic-font'}`}>{reciterName}</span>
          </div>
        </div>

        <div className="pb-center">
          <button className="pb-btn" onClick={() => prevSurah()} title={t('previous')}>
            <MdSkipPrevious size={22} style={arrowStyle} />
          </button>
          <button className="pb-btn pb-btn--play" onClick={handleIsPlaying} title={t('playPause')}>
            {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
          </button>
          <button className="pb-btn" onClick={() => handleNextSurah(audioElem.current)} title={t('next')}>
            <MdSkipNext size={22} style={arrowStyle} />
          </button>
        </div>

        <div className="pb-side pb-side--controls">
          <span className="pb-time">{currentTime} / {surahDuration}</span>

          {!isMobile && (
            <>
              <button className="pb-btn" onClick={() => seekBy(-10)} title={t('seekBackward')}>
                <MdReplay10 size={20} />
              </button>
              <button className="pb-btn" onClick={() => seekBy(10)} title={t('seekForward')}>
                <MdForward10 size={20} />
              </button>

              <div className="pb-popover-wrap">
                <button className={`pb-btn${openPanel === 'queue' ? ' active' : ''}`} onClick={() => togglePanel('queue')} title={t('queue')}>
                  <MdPlaylistPlay size={22} />
                </button>
                {openPanel === 'queue' && (
                  <div className="pb-popover pb-popover--queue">{queueList}</div>
                )}
              </div>

              <div className="pb-popover-wrap">
                <button className={`pb-btn${openPanel === 'volume' ? ' active' : ''}`} onClick={() => togglePanel('volume')} title={t('volume')}>
                  {volume > 0 ? <MdVolumeUp size={22} /> : <MdVolumeOff size={22} />}
                </button>
                {openPanel === 'volume' && (
                  <div className="pb-popover pb-popover--volume">
                    <Slider onChange={handleOnchangeVolume} percentage={volume} volume showIcon={false} />
                  </div>
                )}
              </div>

              <button className="pb-btn pb-btn--rate" onClick={cyclePlaybackRate} title={t('speed')}>
                x{playbackRate}
              </button>

              <button className={`pb-btn${isRepeat ? ' active' : ''}`} onClick={handleIsRepeat} title={t('repeat')}>
                <MdRepeat size={22} />
              </button>
            </>
          )}

          <div className="pb-popover-wrap">
            <button className={`pb-btn${openPanel === 'more' ? ' active' : ''}`} onClick={() => togglePanel('more')} title={t('more')}>
              <MdMoreVert size={22} />
            </button>
            {openPanel === 'more' && (
              <div className="pb-popover pb-popover--more">
                {isMobile && (
                  <>
                    <div className="pb-more-row">
                      <button className="pb-more-btn" onClick={() => seekBy(-10)}>
                        <MdReplay10 /> <span>{t('seekBackward')}</span>
                      </button>
                      <button className="pb-more-btn" onClick={cyclePlaybackRate}>
                        <span className="pb-more-rate">x{playbackRate}</span> <span>{t('speed')}</span>
                      </button>
                      <button className="pb-more-btn" onClick={() => seekBy(10)}>
                        <MdForward10 /> <span>{t('seekForward')}</span>
                      </button>
                      <button className={`pb-more-btn${isRepeat ? ' active' : ''}`} onClick={handleIsRepeat}>
                        <MdRepeat /> <span>{t('repeat')}</span>
                      </button>
                    </div>
                    <div className="pb-more-volume">
                      {volume > 0 ? <MdVolumeUp /> : <MdVolumeOff />}
                      <Slider onChange={handleOnchangeVolume} percentage={volume} volume showIcon={false} />
                    </div>
                  </>
                )}

                <SurahInfo surah={currentSurah} />
                <div className="pb-more-row">
                  <button className={`pb-more-btn${isRandom ? ' active' : ''}`} onClick={handleIsRandom}>
                    <FaRandom /> <span>{t('random')}</span>
                  </button>
                  <button className="pb-more-btn" onClick={handleShare}>
                    <IoShareSocialOutline /> <span>{t('share')}</span>
                  </button>
                  <button className={`pb-more-btn${repeatSection.isRepeat ? ' active' : ''}`} onClick={() => setRepeatSection({ isRepeat: !repeatSection.isRepeat })}>
                    <MdRepeatOn /> <span>{t('repeatSection')}</span>
                  </button>
                </div>
                <RepeatSection surahElem={audioElem} />
              </div>
            )}
          </div>
        </div>
      </div>

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
    </div>
  );
};

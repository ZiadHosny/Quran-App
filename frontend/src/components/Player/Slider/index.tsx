import { useState, useRef, useEffect } from 'react';
import './slider.scss';
import { VscMute, VscUnmute } from 'react-icons/vsc';

export const Slider = ({
  percentage = 0,
  onChange,
  volume = false,
  showIcon = true,
  startSection = 0,
  endSection = 0,
  repeatTimes = 0,
}: {
  percentage: number;
  onChange: any;
  volume?: boolean;
  showIcon?: boolean;
  startSection?: number;
  endSection?: number;
  repeatTimes?: number;
}) => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);

  const rangeRef = useRef<HTMLInputElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rangeRef.current && thumbRef.current) {
      const rangeWidth = rangeRef.current.offsetWidth;
      const thumbWidth = thumbRef.current.offsetWidth;
      const centerThumb = (thumbWidth / 100) * percentage * -1;
      const centerProgressBar =
        thumbWidth +
        (rangeWidth / 100) * percentage -
        (thumbWidth / 100) * percentage;
      setPosition(percentage);
      setMarginLeft(centerThumb);
      setProgressBarWidth(centerProgressBar);

      setStartPosition(((rangeWidth - 1.5) * startSection) / 100);
      setEndPosition(((rangeWidth - 1.5) * endSection) / 100);
    }
  }, [percentage, startSection, endSection]);

  return (
    <div
      className={`slider-container-main ${volume ? 'volume-container' : 'slider-container'}`}
    >
      {volume && showIcon ? (
        percentage !== 0 ? (
          <VscUnmute
            size={17}
            style={{ position: 'absolute', insetInlineStart: '-22px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}
          />
        ) : (
          <VscMute
            size={17}
            style={{ position: 'absolute', insetInlineStart: '-22px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}
          />
        )
      ) : null}

      <div
        className="progress-bar-cover"
        style={{
          width: `${progressBarWidth}px`,
        }}
      ></div>
      <div
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      {!volume && repeatTimes > 0 ? (
        <>
          <div
            style={{
              backgroundColor: 'blue',
              top: 5,
              width: 3,
              height: 10,
              position: 'absolute',
              left: `${startPosition}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: 'red',
              top: 5,
              width: 3,
              height: 10,
              position: 'absolute',
              left: `${endPosition}px`,
            }}
          ></div>
        </>
      ) : (
        <></>
      )}
      <input
        aria-label="progress-bar"
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className="range"
        onChange={onChange}
      />
    </div>
  );
};

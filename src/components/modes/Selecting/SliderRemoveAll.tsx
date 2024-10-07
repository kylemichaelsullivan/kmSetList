import { type ChangeEvent, type MouseEvent, useRef, useState } from 'react';

import { useSetlist } from '@/context/setlist';

function SliderRemoveAll() {
  const { resetSetlist } = useSetlist();

  const [rangePositions, setRangePositions] = useState<number[]>([]);
  const [currentRangePosition, setCurrentRangePosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  function resetSlider() {
    setRangePositions([]);
    setCurrentRangePosition(0);
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--SliderRemoveAll-position', '0%');
    }
  }

  function reset() {
    resetSlider();
    resetSetlist();
  }

  function handleMouseDown(e: MouseEvent<HTMLInputElement>) {
    const rangePosition = Number(e.currentTarget.value);
    if (!isNaN(rangePosition)) {
      setRangePositions((prev) => [...prev, rangePosition]);
    }
  }

  function handleMouseUp() {
    console.log(currentRangePosition);
    console.log(rangePositions);
    if (currentRangePosition >= 100 && rangePositions[1] < 10) {
      reset();
    } else {
      resetSlider();
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const rangePosition = Number(e.target.value);
    if (!isNaN(rangePosition)) {
      if (sliderRef.current) {
        sliderRef.current.style.setProperty(
          '--SliderRemoveAll-position',
          `${rangePosition}%`,
        );
      }
      setRangePositions((prev) => [...prev, rangePosition]);
      setCurrentRangePosition(rangePosition);
    }
  }

  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //   const rangePosition = Number(e.target.value);
  //   if (!isNaN(rangePosition)) {
  //     if (sliderRef.current) {
  //       sliderRef.current.style.setProperty(
  //         '--SliderRemoveAll-position',
  //         `${rangePosition}%`,
  //       );
  //     }
  //     setRangePositions((prev) => [...prev, rangePosition]);
  //     setCurrentRangePosition(rangePosition);
  //   }
  // }

  return (
    <div className="SliderRemoveAll relative flex w-full" ref={sliderRef}>
      <div className="flex w-full py-2">
        <input
          type="range"
          className="slider appearance-none border border-black rounded-full ring-blue-500 cursor-pointer w-full p-2 hover:ring"
          value={currentRangePosition}
          title="Slide from Left to Right to Reset"
          onMouseDown={handleMouseDown}
          onChange={handleChange}
          onMouseUp={handleMouseUp}
        />
      </div>
    </div>
  );
}

export default SliderRemoveAll;

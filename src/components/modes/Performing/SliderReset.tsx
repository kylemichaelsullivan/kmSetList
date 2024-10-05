import { type ChangeEvent, type MouseEvent, useState } from 'react';

function SliderReset() {
  const [rangePositions, setRangePositions] = useState<number[]>([]);
  const [currentRangePosition, setCurrentRangePosition] = useState(0);

  function resetSlider() {
    setRangePositions([]);
    setCurrentRangePosition(0);
  }

  function reset() {
    alert('Reset function executed');
    resetSlider();
  }

  function handleMouseDown(e: MouseEvent<HTMLInputElement>) {
    const rangePosition = Number(e.currentTarget.value);
    if (!isNaN(rangePosition)) {
      setRangePositions((prev) => [...prev, rangePosition]);
    }
  }

  function handleMouseUp() {
    if (currentRangePosition >= 100 && rangePositions[1] < 10) {
      reset();
    } else {
      resetSlider();
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const rangePosition = Number(e.target.value);
    if (!isNaN(rangePosition)) {
      setRangePositions((prev) => [...prev, rangePosition]);
      setCurrentRangePosition(rangePosition);
    }
  }

  return (
    <div className="SliderReset relative flex w-full">
      <div className="flex w-full py-2">
        <input
          type="range"
          className="appearance-none rounded-full cursor-pointer w-full p-2"
          value={currentRangePosition}
          onMouseDown={handleMouseDown}
          onChange={handleChange}
          onMouseUp={handleMouseUp}
        />
      </div>
    </div>
  );
}

export default SliderReset;

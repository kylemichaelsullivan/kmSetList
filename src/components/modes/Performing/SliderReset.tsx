import { useState } from 'react';

function SliderReset() {
  const [rangePosition, setRangePosition] = useState(0);

  function reset() {
    alert('Please define reset()');
  }

  function handleBlur() {
    console.log(rangePosition);
    if (rangePosition >= 100) {
      reset();
    } else {
      setRangePosition(0);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRangePosition(Number(event.target.value));
  }

  return (
    <div className="SliderReset relative flex w-full">
      <div className="flex w-full py-2">
        <input
          type="range"
          className="appearance-none rounded-full cursor-pointer w-full p-2"
          value={rangePosition}
          onChange={handleChange}
          onMouseUp={handleBlur}
        />
      </div>
    </div>
  );
}

export default SliderReset;

// import { useState } from 'react';

// function SliderReset() {
//   const [rangePosition, setRangePosition] = useState<number>(0);

//   function handleBlur(rangePosition: number) {
//     console.log(rangePosition);
//   }

//   return (
//     <div className="SliderReset relative flex w-full">
//       <div className="flex w-full py-2">
//         <input
//           type="range"
//           className="appearance-none rounded-full cursor-pointer w-full p-2"
//           defaultValue={0}
//           onBlur={() => handleBlur(1)}
//         />
//       </div>
//     </div>
//   );
// }

// export default SliderReset;

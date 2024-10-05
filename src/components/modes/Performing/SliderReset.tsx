function SliderReset() {
  return (
    <div className="SliderReset relative flex w-full">
      <div className="flex w-full py-2">
        <input
          type="range"
          className="appearance-none rounded-full cursor-pointer w-full"
          defaultValue={0}
        />
      </div>
    </div>
  );
}

export default SliderReset;

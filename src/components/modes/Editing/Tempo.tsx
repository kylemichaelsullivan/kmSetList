type TempoProps = {
	bpm: number;
};

function Tempo({ bpm }: TempoProps) {
	return (
		<input
			type='number'
			className='Tempo flex-1 rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
			min={1}
			max={300}
			defaultValue={bpm}
		/>
	);
}

export default Tempo;

type TempoProps = {
	bpm: number;
};

function Tempo({ bpm }: TempoProps) {
	return <div className='Tempo'>{bpm}</div>;
}

export default Tempo;

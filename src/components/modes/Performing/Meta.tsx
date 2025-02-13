import type { Notes } from '@/types';

import Key from './Key';
import Tempo from './Tempo';

type MetaProps = {
	note: Notes;
	bpm: number;
};

function Meta({ note, bpm }: MetaProps) {
	return (
		<div className='Meta flex gap-2'>
			<Key note={note} />
			<span>|</span>
			<Tempo bpm={bpm} />
		</div>
	);
}

export default Meta;

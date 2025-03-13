import type { Notes } from '@/types';

import SongKey from './SongKey';
import Tempo from './Tempo';

type MetaProps = {
	note: Notes;
	bpm: number;
};

function Meta({ note, bpm }: MetaProps) {
	return (
		<div className='Meta flex gap-2'>
			<SongKey note={note} />
			<span>|</span>
			<Tempo bpm={bpm} />
		</div>
	);
}

export default Meta;

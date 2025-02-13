import type { TSong } from '@/types';

import Key from './Key';
import Tempo from './Tempo';

type MetaProps = {
	song: TSong;
};

function Meta({ song }: MetaProps) {
	return (
		<div className='Meta flex gap-2 w-full'>
			<Key note={song[1]} />
			<Tempo bpm={Number(song[2])} />
		</div>
	);
}

export default Meta;

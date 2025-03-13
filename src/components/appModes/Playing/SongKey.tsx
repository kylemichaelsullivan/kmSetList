import type { Notes } from '@/types';

type SongKeyProps = {
	note: Notes;
};

function SongKey({ note }: SongKeyProps) {
	return <div className='SongKey'>{note ? note : '?'}</div>;
}

export default SongKey;

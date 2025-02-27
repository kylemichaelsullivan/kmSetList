import type { Notes } from '@/types';

type KeyProps = {
	note: Notes;
};

function Key({ note }: KeyProps) {
	return <div className='Key'>{note.length > 0 ? note : '?'}</div>;
}

export default Key;

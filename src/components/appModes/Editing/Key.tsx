import type { Notes } from '@/types';

type KeyProps = {
	note: Notes;
};

function Key({ note }: KeyProps) {
	return (
		<input
			type='text'
			className='Key flex-1 rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
			defaultValue={note}
			placeholder='Key'
		/>
	);
}

export default Key;

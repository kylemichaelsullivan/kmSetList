import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

import { useSetlist } from '@/context/setlist';

function RestoreSetlist() {
	const { restoreSetlist } = useSetlist();

	return (
		<button
			type='button'
			className='RestoreSetlist text-xxxl flex h-8 w-8 items-center justify-center rounded-full border border-current font-bold ring-blue-500 transition-colors duration-300 hover:bg-white hover:text-black hover:ring'
			title='Reset Setlist'
			onClick={restoreSetlist}
		>
			<FontAwesomeIcon icon={faRotate} />
		</button>
	);
}

export default RestoreSetlist;

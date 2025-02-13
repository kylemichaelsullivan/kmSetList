import { useCatalog } from '@/context/catalog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddSong() {
	const { addSongToCatalog } = useCatalog();

	return (
		<button
			type='button'
			className='AddSong text-xxxl flex w-8 h-8 items-center justify-center rounded-full border border-current font-bold ring-blue-500 transition-colors duration-300 hover:bg-black hover:text-white hover:ring'
			title='Add Song to Catalog'
			onClick={addSongToCatalog}
		>
			<FontAwesomeIcon icon={faPlus} />
		</button>
	);
}

export default AddSong;

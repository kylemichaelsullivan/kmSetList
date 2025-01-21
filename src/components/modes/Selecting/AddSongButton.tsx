import { useSetlist } from '@/context/setlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

function AddSongButton() {
	const { selectSong, addSongToSetlist } = useSetlist();

	function handleClick() {
		addSongToSetlist();
	}

	return (
		<button
			type='button'
			className={`AddSong flex items-center justify-center rounded-full border border-current ring-blue-500 ${selectSong ? 'text-black' : 'text-gray-400'} h-8 w-8 font-bold transition-colors duration-300 ${selectSong ? 'hover:bg-black hover:text-white hover:ring' : 'hover:bg-gray-400'}`}
			title={selectSong ? `Add ${selectSong} to Setlist` : 'Pick a Song First'}
			onClick={handleClick}
		>
			<FontAwesomeIcon icon={faThumbtack} />
		</button>
	);
}

export default AddSongButton;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type RemoveSongProps = {
	song: string;
};

function RemoveSong({ song }: RemoveSongProps) {
	function confirmDelete() {
		if (
			confirm(
				`Are you sure you want to DELETE ${song}?\nThis action cannot be undone.`,
			)
		) {
			alert(`${song} has been deleted.`);
		}
	}

	return (
		<button
			type='button'
			className='RemoveSong min-w-4 flex-1 text-gray-500 transition-colors duration-300 hover:text-gray-900'
			title={`Delete ${song} from Catalog`}
			onClick={confirmDelete}
		>
			<FontAwesomeIcon icon={faTrash} />
		</button>
	);
}

export default RemoveSong;

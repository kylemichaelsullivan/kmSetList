import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type ToggleSongProps = {
	songName: string;
	isActive: boolean;
	toggleIsActive: () => void;
};

function ToggleSong({ songName, isActive, toggleIsActive }: ToggleSongProps) {
	return (
		<button
			type='button'
			className={`ToggleSong flex items-center justify-center rounded-full border border-black box-border ${isActive ? 'bg-gray-900' : 'bg-white'} text-white w-12 h-8 mt-1 transition-colors hover:bg-gray-500 ${isActive ? 'hover:text-white' : 'hover:text-gray-500'}`}
			title={isActive ? `Disable ${songName}` : `Enable ${songName}`}
			onClick={toggleIsActive}
		>
			<FontAwesomeIcon icon={faCheck} />
		</button>
	);
}

export default ToggleSong;

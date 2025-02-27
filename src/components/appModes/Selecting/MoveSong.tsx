import { useSetlist } from '@/context/setlist';

type MoveSongProps = {
	songName: string;
	isFirst: boolean;
	isLast: boolean;
};

function MoveSong({ songName, isFirst, isLast }: MoveSongProps) {
	const { moveUpSongInSetlist, moveDownSongInSetlist } = useSetlist();

	return (
		<div className='MoveSong flex-no-wrap relative flex h-8 min-w-4 flex-1 flex-col'>
			<button
				type='button'
				className={`btn-up flex-1 rounded-t-md bg-gray-500 transition-colors z-10${isFirst ? ' pointer-events-none' : ''} hover:bg-gray-900`}
				title={`Move Up ${songName}`}
				onClick={() => moveUpSongInSetlist(songName)}
			></button>

			<button
				type='button'
				className={`btn-down flex-1 rounded-b-md bg-gray-500 transition-colors z-10${isLast ? ' pointer-events-none' : ''} hover:bg-gray-900`}
				title={`Move Down ${songName}`}
				onClick={() => moveDownSongInSetlist(songName)}
			></button>
		</div>
	);
}

export default MoveSong;

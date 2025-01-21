import MoveSong from './MoveSong';
import RemoveSong from './RemoveSong';

type SongProps = {
	song: string;
	isFirst: boolean;
	isLast: boolean;
};

function Song({ song, isFirst, isLast }: SongProps) {
	return (
		<div className='Song group flex w-full items-center gap-2'>
			<MoveSong song={song} isFirst={isFirst} isLast={isLast} />

			<div
				className='song w-full flex-auto cursor-grab rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				title={`Drag ${song} to Reorder`}
			>
				{song}
			</div>

			<RemoveSong song={song} />
		</div>
	);
}

export default Song;

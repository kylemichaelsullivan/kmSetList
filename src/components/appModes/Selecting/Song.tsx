import MoveSong from './MoveSong';
import RemoveSong from './RemoveSong';

type SongProps = {
	songName: string;
	isFirst: boolean;
	isLast: boolean;
};

function Song({ songName, isFirst, isLast }: SongProps) {
	return (
		<div className='Song group flex w-full items-center gap-4'>
			<MoveSong songName={songName} isFirst={isFirst} isLast={isLast} />

			<div
				className='song w-full flex-auto cursor-grab rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				title={`Drag ${songName} to Reorder`}
			>
				{songName}
			</div>

			<RemoveSong songName={songName} />
		</div>
	);
}

export default Song;

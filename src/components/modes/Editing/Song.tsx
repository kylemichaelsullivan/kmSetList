import ToggleSong from '@/components/modes/Editing/ToggleSong';
import RemoveSong from '@/components/modes/Editing/RemoveSong';

type SongProps = {
	song: string;
};

function Song({ song }: SongProps) {
	return (
		<div className='Song group flex w-full items-center gap-2'>
			<ToggleSong song={song} />

			<input
				type='text'
				className='song w-full rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				name={song}
				defaultValue={song}
			/>

			<RemoveSong song={song} />
		</div>
	);
}

export default Song;

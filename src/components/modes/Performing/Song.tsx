import { useSetlist } from '@/context/setlist';

type SongProps = {
	song: string;
};

function Song({ song }: SongProps) {
	const { hasPlayed, toggleHasPlayed } = useSetlist();

	return (
		<div
			className={`Song w-full cursor-pointer rounded-md border border-current px-4 shadow ring-blue-500 py-2${hasPlayed[song] ? 'played' : ''} hover:ring`}
			title={`${hasPlayed[song] ? 'Enable' : 'Disable'} ${song}`}
			onClick={() => toggleHasPlayed(song)}
		>
			{song}
		</div>
	);
}

export default Song;

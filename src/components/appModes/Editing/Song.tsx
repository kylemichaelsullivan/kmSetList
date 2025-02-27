import { useCatalog } from '@/context/catalog';

import ToggleSong from './ToggleSong';
import SongDetails from './SongDetails';
import RemoveSong from './RemoveSong';

import type { TSong } from '@/types';

type SongProps = {
	song: TSong;
};

function Song({ song }: SongProps) {
	const { toggleSongInCatalog } = useCatalog();
	const songName = song[0];
	const isActive = song[3];

	return (
		<div className='Song group flex w-full gap-4'>
			<ToggleSong
				songName={songName}
				isActive={isActive}
				toggleSong={() => toggleSongInCatalog(songName)}
			/>
			<SongDetails song={song} isActive={isActive} />
			<RemoveSong song={song} />
		</div>
	);
}

export default Song;

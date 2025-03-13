import Songs from '../Songs';
import RestoreSetlist from '../RestoreSetlist';

import type { PlayingProps } from '@/types';

function Perform({
	songRefs,
	restoreSetlistRef,
	focusFirstSong,
}: PlayingProps) {
	return (
		<>
			<Songs songRefs={songRefs} restoreSetlistRef={restoreSetlistRef} />
			<RestoreSetlist ref={restoreSetlistRef} onRestore={focusFirstSong} />
		</>
	);
}

export default Perform;

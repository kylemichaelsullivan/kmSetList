import Songs from '../Songs';
import RestoreSetlist from '../RestoreSetlist';

import { PlayingProps } from '@/types';

function Rehearse({
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

export default Rehearse;

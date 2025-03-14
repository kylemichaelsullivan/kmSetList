import Songs from '../Songs';
import RestoreSetlist from '../RestoreSetlist';

import type { PlayingProps } from '@/types';

function Focus({ songRefs, restoreSetlistRef, focusFirstSong }: PlayingProps) {
	return (
		<>
			<Songs songRefs={songRefs} restoreSetlistRef={restoreSetlistRef} />
			<RestoreSetlist ref={restoreSetlistRef} onRestore={focusFirstSong} />
		</>
	);
}

export default Focus;

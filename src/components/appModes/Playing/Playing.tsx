import { useRef, useEffect } from 'react';

import { useSetlist } from '@/context/setlist';
import { useUser } from '@/context/user';

import Perform from './playingModes/Perform';
import Rehearse from './playingModes/Rehearse';
import Focus from './playingModes/Focus';

import Songs from './Songs';
import RestoreSetlist from './RestoreSetlist';
import NoSongs from '@/components/NoSongs';

function Playing() {
	const { setlist } = useSetlist();
	const { playingMode } = useUser();

	const songRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const restoreSetlistRef = useRef<HTMLButtonElement | null>(null);

	const focusFirstSong = () => {
		if (songRefs.current[0]) {
			songRefs.current[0]?.focus();
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (setlist.length <= 0) return;

		const currentIndex = songRefs.current.findIndex(
			(ref) => ref === document.activeElement,
		);

		if (currentIndex >= 0 && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
			e.preventDefault();
			const nextIndex =
				e.key === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1;
			if (nextIndex >= 0 && nextIndex < setlist.length) {
				songRefs.current[nextIndex]?.focus();
			}
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [setlist]);

	return (
		<div className='Playing flex w-full flex-col items-center gap-4 p-4'>
			{setlist.length > 0 ? (
				<>
					{playingMode === 'perform' && <Perform />}
					{playingMode === 'rehearse' && <Rehearse />}
					{playingMode === 'focus' && <Focus />}
					<Songs songRefs={songRefs} restoreSetlistRef={restoreSetlistRef} />
					<RestoreSetlist ref={restoreSetlistRef} onRestore={focusFirstSong} />
				</>
			) : (
				<NoSongs />
			)}
		</div>
	);
}

export default Playing;

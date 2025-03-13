import { useRef, useEffect } from 'react';

import { useSetlist } from '@/context/setlist';
import { useUser } from '@/context/user';

import Perform from './Perform';
import Rehearse from './Rehearse';
import Focus from './Focus';

const modeComponents = {
	perform: Perform,
	rehearse: Rehearse,
	focus: Focus,
} as const;

function PlayingModes() {
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

	const ModeComponent = modeComponents[playingMode];

	return (
		<ModeComponent
			songRefs={songRefs}
			restoreSetlistRef={restoreSetlistRef}
			focusFirstSong={focusFirstSong}
		/>
	);
}

export default PlayingModes;

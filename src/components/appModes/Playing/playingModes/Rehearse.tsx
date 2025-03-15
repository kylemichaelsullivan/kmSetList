import { useState, useRef } from 'react';

import Songs from './rehearse/Songs';
import RestoreSetlist from '../RestoreSetlist';
import Modal from './rehearse/Modal';

import type { PlayingProps, Song } from '@/types';

function Rehearse({
	songRefs,
	restoreSetlistRef,
	focusFirstSong,
}: PlayingProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [songInModal, setSongInModal] = useState<Song | null>(null);

	const modalNotesRef = useRef<HTMLTextAreaElement>(null);

	const closeModal = () => setIsModalOpen(false);

	const handleNoteClick = (song: Song) => {
		setSongInModal(song);
		setIsModalOpen(true);
	};

	return (
		<>
			<Songs
				songRefs={songRefs}
				restoreSetlistRef={restoreSetlistRef}
				modalNotesRef={modalNotesRef}
				handleNoteClick={handleNoteClick}
			/>
			<RestoreSetlist ref={restoreSetlistRef} onRestore={focusFirstSong} />
			{isModalOpen && (
				<Modal
					song={songInModal}
					closeModal={closeModal}
					modalNotesRef={modalNotesRef}
				/>
			)}
		</>
	);
}

export default Rehearse;

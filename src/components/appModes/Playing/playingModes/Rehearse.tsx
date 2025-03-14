import { useState, useRef } from 'react';

import RehearseSongs from './RehearseSongs';
import RestoreSetlist from '../RestoreSetlist';
import Modal from '../Modal';

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
			<RehearseSongs
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

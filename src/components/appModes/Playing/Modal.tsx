import CloseModal from './CloseModal';

import type { Song } from '@/types';

type ModalProps = {
	song: Song | null;
	closeModal: () => void;
	modalNotesRef: React.RefObject<HTMLTextAreaElement>;
};

function Modal({ song, closeModal, modalNotesRef }: ModalProps) {
	if (song === null) {
		return;
	}

	return (
		<div className='Modal absolute-center flex flex-col gap-2 bg-blue-300 text-black p-4'>
			<CloseModal closeModal={closeModal} />

			<div className='flex flex-col justify-center items-center gap-4 sm:flex-row'>
				<p>{song.name}</p>
				<p>{song.songKey}</p>
				<p>{song.bpm}</p>
			</div>

			<textarea
				className='w-full px-4 py-2'
				name='modalNotes'
				placeholder={`Notes for ${song.name}`}
				ref={modalNotesRef}
			></textarea>
		</div>
	);
}

export default Modal;

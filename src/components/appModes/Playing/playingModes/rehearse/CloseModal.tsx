import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CloseModalProps = {
	closeModal: () => void;
};

function CloseModal({ closeModal }: CloseModalProps) {
	return (
		<button
			type='button'
			className='CloseModal absolute top-1 right-2'
			title='Close Modal'
			onClick={closeModal}
		>
			<FontAwesomeIcon icon={faTimes} />
		</button>
	);
}

export default CloseModal;

import { forwardRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

import { useSetlist } from '@/context/setlist';

type ResetSetlistProps = {
	onReset: () => void;
};

const ResetSetlist = forwardRef<HTMLButtonElement, ResetSetlistProps>(
	({ onReset }, ref) => {
		const { restoreSetlist } = useSetlist();

		const handleClick = () => {
			restoreSetlist();
			onReset();
		};

		return (
			<button
				type='button'
				className='RestoreSetlist text-xxxl flex w-8 h-8 items-center justify-center rounded-full border border-current font-bold ring-blue-500 transition-colors duration-300 hover:bg-white hover:text-black hover:ring focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 print:hidden'
				title='Reset Setlist'
				ref={ref}
				onClick={handleClick}
			>
				<FontAwesomeIcon icon={faRotate} />
			</button>
		);
	},
);

export default ResetSetlist;

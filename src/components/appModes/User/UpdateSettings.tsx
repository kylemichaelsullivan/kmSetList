import type { RefObject } from 'react';

import { useUser } from '@/context/user';
import { PerformanceMode } from '@/types';

type UpdateSettingsProps = {
	callMeRef: RefObject<HTMLInputElement>;
	emailRef: RefObject<HTMLInputElement>;
	performanceModeRef: RefObject<HTMLSelectElement>;
};

const UpdateSettings = ({
	callMeRef,
	emailRef,
	performanceModeRef,
}: UpdateSettingsProps) => {
	const { handleUserChange } = useUser();

	const handleClick = () => {
		handleUserChange(
			callMeRef.current?.value || '',
			emailRef.current?.value || '',
			(performanceModeRef.current?.value as PerformanceMode) || '',
		);
	};

	return (
		<button
			type='button'
			className='UpdateSettings absolute bg-blue-500 font-bold border border-current text-white shadow-md px-4 py-2 mx-auto -bottom-6 left-1/2 transform -translate-x-1/2 transition-colors duration-300 hover:text-black'
			onClick={handleClick}
		>
			Update
		</button>
	);
};

export default UpdateSettings;

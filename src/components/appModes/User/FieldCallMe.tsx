import { forwardRef } from 'react';

import { useUser } from '@/context/user';

const FieldCallMe = forwardRef<HTMLInputElement, {}>(({}, ref) => {
	const { callMe } = useUser();

	return (
		<label className='FieldCallMe'>
			<span>Call Me</span>
			<input
				type='text'
				placeholder='Call Me'
				defaultValue={callMe}
				ref={ref}
			/>
		</label>
	);
});

export default FieldCallMe;

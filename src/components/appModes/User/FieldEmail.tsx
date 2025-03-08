import { forwardRef } from 'react';

import { useUser } from '@/context/user';

const FieldEmail = forwardRef<HTMLInputElement, {}>(({}, ref) => {
	const { email } = useUser();

	return (
		<label className='FieldEmail'>
			<span>Email</span>
			<input type='email' placeholder='Email' defaultValue={email} ref={ref} />
		</label>
	);
});

export default FieldEmail;

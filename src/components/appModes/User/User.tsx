import { useUser } from '@/context/user';

import SettingsForm from './SettingsForm';

import Projects from './Projects';

function User() {
	const { callMe, email } = useUser();

	return (
		<div className='User flex w-full flex-col gap-4 items-center p-4'>
			<h1 className='text-3xl'>{`Hi ${callMe} (${email})`}</h1>
			<SettingsForm />
			<Projects />
		</div>
	);
}

export default User;

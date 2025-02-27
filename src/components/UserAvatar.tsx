import { useAppMode } from '@/context/appMode';

function UserAvatar() {
	const { handleAppModeChange } = useAppMode();

	return (
		<button
			type='button'
			className='UserAvatar flex justify-center items-center border border-black rounded-full w-8 h-8 hover:ring'
			title='Hi Kyle!'
			onClick={() => handleAppModeChange('User')}
		>
			K
		</button>
	);
}

export default UserAvatar;

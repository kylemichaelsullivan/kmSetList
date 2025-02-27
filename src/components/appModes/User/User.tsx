import { useUser } from '@/context/user';

function User() {
	const { callMe } = useUser();

	return (
		<div className='User'>
			<h1>{`Hi ${callMe}!`}</h1>
		</div>
	);
}

export default User;

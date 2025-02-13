import UserAvatar from '@/components/UserAvatar';
import Copyright from '@/components/Copyright';

function Footer() {
	return (
		<footer className='Footer flex justify-between border-t border-black p-4 text-center print:hidden'>
			<UserAvatar />
			<Copyright />
		</footer>
	);
}

export default Footer;

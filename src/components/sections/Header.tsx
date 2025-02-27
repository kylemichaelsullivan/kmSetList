import AppModeButtons from '@/components/AppModeButtons';

function Header() {
	return (
		<header className='Header flex items-center justify-around border-b border-black py-4 print:hidden'>
			<AppModeButtons />
		</header>
	);
}

export default Header;

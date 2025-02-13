import ModeButtons from '@/components/ModeButtons';

function Header() {
	return (
		<header className='Header flex items-center justify-around border-b border-black py-4 print:hidden'>
			<ModeButtons />
		</header>
	);
}

export default Header;

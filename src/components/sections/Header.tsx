import ModeButtons from '@/components/ModeButtons';

function Header() {
  return (
    <header className='Header flex justify-around items-center border-b border-black py-4'>
      <ModeButtons />
    </header>
  );
}

export default Header;

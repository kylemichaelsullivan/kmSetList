function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='Footer border-t border-black py-4 text-center'>{`© ${year} Beer City Bands`}</footer>
	);
}

export default Footer;

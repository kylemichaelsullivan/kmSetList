function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="Footer border-t border-black text-center py-4">{`© ${year} Beer City Bands`}</footer>
  );
}

export default Footer;

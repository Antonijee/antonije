import { Link } from 'react-router-dom';

const Header = () => {
  const prefix = '/antonije/';
  return (
    <header className="flex gap-8 w-full h-[120px] justify-center items-center">
      <Link to={prefix} className="text-2xl font-semibold text-white">
        Home
      </Link>
      <Link to={`${prefix}about`} className="text-2xl font-semibold text-white">
        About
      </Link>
      <Link
        to={`${prefix}contact`}
        className="text-2xl font-semibold text-white"
      >
        Contact
      </Link>
    </header>
  );
};

export default Header;

import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar/Navbar';
import { useStateValue } from '../context/StateProvider';
import * as actionTypes from '../context/actionTypes';

const Header = () => {
  const [state, dispatch] = useStateValue();
  const navClickHandler = () => {
    dispatch({ type: actionTypes.NAV_OPEN });
  };
  return (
    <header className='fixed top-0 left-0 w-full z-20 bg-white shadow-md'>
      <nav className='max-w-5xl lg:m-auto flex justify-between items-center px-4 py-2'>
        <Link href='/'>
          <a>
            <div className='relative w-28 h-8 lg:w-40'>
              <Image
                layout='fill'
                src={logo}
                objectFit='contain'
                alt='Arctic Blue Logo'
              />
            </div>
          </a>
        </Link>
        <span className='lg:hidden'>
          <FontAwesomeIcon
            icon={faBars}
            className='text-xl cursor-pointer'
            onClick={navClickHandler}
          />
        </span>
        <div className='text-tertiary hidden lg:block'>
          <Link href='/'>
            <a className='text-lg hover-item'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='text-lg hover-item mx-10'>About Us</a>
          </Link>
          <Link href='/news'>
            <a className='text-lg hover-item'>News</a>
          </Link>
        </div>
      </nav>
      <Navbar />
    </header>
  );
};

export default Header;

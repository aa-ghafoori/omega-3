import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/fish-oil.png';
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
      <nav className='responsive flex justify-between items-center px-4 py-2'>
        <Link href='/'>
          <a>
            <div className='relative h-8 w-32 lg:h-16 lg:w-64'>
              <Image layout='fill' src={logo} alt='Arctic Blue Logo' />
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
        <div className='text-black hidden lg:block uppercase tracking-widest'>
          <Link href='/'>
            <a className='text-lg hover-item'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='text-lg hover-item mx-20'>About</a>
          </Link>
          <Link href='/news'>
            <a className='text-lg hover-item mr-20'>Blog</a>
          </Link>
          <Link href='/news'>
            <a className='text-lg hover-item'>Beste visolie</a>
          </Link>
        </div>
      </nav>
      <Navbar />
    </header>
  );
};

export default Header;

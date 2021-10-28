import logoWhite from '../../images/logo - white.svg';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useStateValue } from '../../context/StateProvider';
import * as actionTypes from '../../context/actionTypes';

const Navbar = () => {
  const [state, dispatch] = useStateValue();
  const navClickHandler = () => {
    dispatch({ type: actionTypes.NAV_CLOSED });
  };

  return (
    <div
      className={`bg-primary text-white padding h-screen w-11/12 shadow-lg fixed top-0 left-0 z-20 transition transform duration-500 ease-in-out
        ${!state.navOpen ? '-translate-x-full' : 'translate-x-0'}
    `}
    >
      <div className='flex justify-between items-center'>
        <div className='relative w-40 h-16 lg:w-40' onClick={navClickHandler}>
          <Link href='/'>
            <a>
              <Image layout='fill' src={logoWhite} objectFit='contain' />
            </a>
          </Link>
        </div>
        <FontAwesomeIcon icon={faTimes} onClick={navClickHandler} />
      </div>
      <div className='flex flex-col'>
        <Link href='/'>
          <a
            className='mt-4 text-sm hover-item w-[fit-content]'
            onClick={navClickHandler}
          >
            Home
          </a>
        </Link>
        <Link href='/'>
          <a
            className='mt-4 text-sm hover-item w-[fit-content]'
            onClick={navClickHandler}
          >
            About Us
          </a>
        </Link>
        <Link href='/'>
          <a
            className='mt-4 text-sm hover-item w-[fit-content]'
            onClick={navClickHandler}
          >
            News
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

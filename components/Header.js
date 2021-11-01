import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { useStateValue } from '../context/StateProvider';
import * as actionTypes from '../context/actionTypes';

const Header = () => {
  const [show, setShow] = useState(true);
  const [state, dispatch] = useStateValue();
  const navClickHandler = () => {
    dispatch({ type: actionTypes.NAV_OPEN });
  };

  useEffect(() => {
    const prevPageYOffset = window.pageYOffset;
    window.onscroll = () => {
      window.pageYOffset > 10 ? setShow(false) : setShow(true);
    };
    return () => {
      setShow(null);
    };
  }, [state.navClicked]);

  return (
    <div className='fixed top-0 left-0 w-full z-20'>
      <div className='bg-primary'>
        <div
          className={`responsive text-white flex flex-row-reverse justify-between px-4 py-2 ${
            !show && 'hidden'
          }`}
        >
          <div className='flex justify-between w-1/2 max-w-[10rem]'>
            <Link href='/'>
              <a className='hover-item'>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </Link>
            <Link href='/'>
              <a className='hover-item'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Link>
            <Link href='/'>
              <a className='hover-item'>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </Link>
            <Link href='/'>
              <a className='hover-item'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-white shadow-lg'>
        <div className='responsive flex justify-between items-center px-4 py-2'>
          <div className='relative w-28 h-8 lg:w-40'>
            <Link href='/'>
              <a>
                <Image layout='fill' src={logo} objectFit='contain' />
              </a>
            </Link>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className='text-xl cursor-pointer lg:hidden'
            onClick={navClickHandler}
          />
          <div className='text-[#05453A] hidden lg:block'>
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
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;

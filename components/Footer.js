import logoWhite from '../images/logo - white.svg';
import Image from 'next/image';
import Link from 'next/link';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className='padding paddingy text-white bg-primary'>
      <div>
        <div className='relative w-40 h-16 lg:w-40'>
          <Link href='/'>
            <a>
              <Image layout='fill' src={logoWhite} objectFit='contain' />
            </a>
          </Link>
        </div>
        <p className='my-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          recusandae!
        </p>
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
      <div className='flex flex-col mt-8'>
        <h3 className='text-secondary text-lg font-bold'>Quick Links</h3>
        <Link href='/'>
          <a className='mt-2 text-sm hover-item w-[fit-content]'>Home</a>
        </Link>
        <Link href='/'>
          <a className='mt-2 text-sm hover-item w-[fit-content]'>About Us</a>
        </Link>
        <Link href='/'>
          <a className='mt-2 text-sm hover-item w-[fit-content]'>News</a>
        </Link>
      </div>
      <div className='flex flex-col mt-8'>
        <h3 className='text-secondary text-lg font-bold'>Other Pages</h3>
        <Link href='/'>
          <a className='mt-2 text-sm hover-item w-[fit-content]'>
            Privacy and Policy
          </a>
        </Link>
        <Link href='/'>
          <a className='mt-2 text-sm hover-item w-[fit-content]'>Disclaimer</a>
        </Link>
        <Link href='/'>
          <a className='mt-2 text-sm hover-item w-[fit-content]'>FAQ</a>
        </Link>
      </div>
      <div className='flex flex-col mt-8'>
        <h3 className='text-secondary text-lg font-bold'>Contact Info</h3>
        <div className='mt-2 text-sm flex items-center'>
          <FontAwesomeIcon
            className='mr-4 text-secondary'
            icon={faMapMarkerAlt}
          />
          <span>Jl. Raya Mas Ubud No.88, Gianyar, Bali, Indonesia – 80571</span>
        </div>
        <div className='mt-2 text-sm flex items-center'>
          <FontAwesomeIcon className='mr-4 text-secondary' icon={faPhoneAlt} />
          <span>Jl. Raya Mas Ubud No.88, Gianyar, Bali, Indonesia – 80571</span>
        </div>
        <div className='mt-2 text-sm flex items-center'>
          <FontAwesomeIcon className='mr-4 text-secondary' icon={faEnvelope} />
          <span>Jl. Raya Mas Ubud No.88, Gianyar, Bali, Indonesia – 80571</span>
        </div>
      </div>
      <div className='py-14 mt-14 border-[#bbbbbb7e] border-t-[1px] bg-primary text-sm text-center flex flex-col'>
        <span className='my-4'>Medical Marijuana Template Kit by Jegtheme</span>
        <span>Copyright © 2021. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;

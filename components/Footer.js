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
    <div className='bg-primary'>
      <div className='responsive padding paddingy text-white'>
        <div className='md:grid md:grid-cols-6 lg:grid-cols-4 gap-x-8'>
          <div className='md:col-span-2 lg:col-span-1'>
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
          <div className='md:col-span-1 lg:col-span-1 md:mt-2 flex flex-col mt-8'>
            <h3 className='text-secondary text-lg font-bold'>Quick Links</h3>
            <Link href='/'>
              <a className='mt-2 text-sm hover-item w-[fit-content]'>Home</a>
            </Link>
            <Link href='/about'>
              <a className='mt-2 text-sm hover-item w-[fit-content]'>
                About Us
              </a>
            </Link>
            <Link href='/news'>
              <a className='mt-2 text-sm hover-item w-[fit-content]'>News</a>
            </Link>
          </div>
          <div className='md:col-span-1 lg:col-span-1 md:mt-2 flex flex-col mt-8'>
            <h3 className='text-secondary text-lg font-bold'>Other Pages</h3>
            <Link href='/'>
              <a className='mt-2 text-sm hover-item w-[fit-content]'>
                Privacy and Policy
              </a>
            </Link>
            <Link href='/'>
              <a className='mt-2 text-sm hover-item w-[fit-content]'>
                Disclaimer
              </a>
            </Link>
            <Link href='/'>
              <a className='mt-2 text-sm hover-item w-[fit-content]'>FAQ</a>
            </Link>
          </div>
          <div className='md:col-span-2 lg:col-span-1 md:mt-2 flex flex-col mt-8'>
            <h3 className='text-secondary text-lg font-bold'>Contact Info</h3>
            <div className='mt-2 text-sm flex items-center'>
              <FontAwesomeIcon
                className='mr-4 text-secondary'
                icon={faMapMarkerAlt}
              />
              <span>
                Jl. Raya Mas Ubud No.88, Gianyar, Bali, Indonesia – 80571
              </span>
            </div>
            <div className='mt-2 text-sm flex items-center'>
              <FontAwesomeIcon
                className='mr-4 text-secondary'
                icon={faPhoneAlt}
              />
              <span>+90 512 487 32</span>
            </div>
            <div className='mt-2 text-sm flex items-center'>
              <FontAwesomeIcon
                className='mr-4 text-secondary'
                icon={faEnvelope}
              />
              <span>omega@example.com</span>
            </div>
          </div>
        </div>
        <div className='py-8 mt-14 border-[#bbbbbb7e] border-t-[1px] bg-primary text-sm text-center flex flex-col md:flex-row justify-around items-center'>
          <span className='my-4'>
            Medical Marijuana Template Kit by Jegtheme
          </span>
          <span>Copyright © 2021. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

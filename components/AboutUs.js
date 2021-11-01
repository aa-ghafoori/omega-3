import greenOmega from '../images/green.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import Button from './ui/Button';

function AboutUs() {
  return (
    <div className='responsive padding py-16 text-primary flex flex-col justify-center lg:flex-row-reverse'>
      <Image src={greenOmega} objectFit='contain' />
      <div className='lg:mr-20 lg:flex-auto'>
        <span className='inline-flex items-center justify-center px-3 py-2 font-bold leading-none text-red-500 bg-red-100 rounded my-8 border-red-500 border text-lg'>
          NEW
        </span>

        {/* <h3 className='text-secondary my-10 font-bold'>About Us</h3> */}
        <h1 className='text-3xl font-bold md:text-5xl'>
          Arctic Blue way - Omega-3 from Algae
        </h1>
        <div className='flex items-center text-tertiary text-xl mt-2 -mb-4'>
          <div className='flex my-4 mr-6 text-yellow-400'>
            <FontAwesomeIcon icon={faStar} size='xs' />
            <FontAwesomeIcon icon={faStar} size='xs' />
            <FontAwesomeIcon icon={faStar} size='xs' />
            <FontAwesomeIcon icon={faStar} size='xs' />
            <FontAwesomeIcon icon={faStarHalfAlt} size='xs' />
          </div>
          <span className='text-xs'>bought by more than 8000 people</span>
        </div>
        <p className='my-8 text-tertiary'>
          Algae are the only (mini) plants that are able to make Omega-3 fatty
          acids EPA and DHA.
        </p>
        <p className='text-tertiary'>
          We at Arctic Blue firmly believe in the future of algae and Omega-3
          rich algae oil. We currently offer 4 different types of algae oil,
          with the following benefits:
        </p>
        <div className='flex items-center mt-6 pl-2'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-8 text-tertiary'>
            Our smallest algae oil capsule, so easy to swallow
          </p>
        </div>
        <div className='flex items-center mt-6 pl-2'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-8 text-tertiary'>
            Also as a winter variant, so with added (vegetable!) vitamin D3
          </p>
        </div>
        <div className='flex items-center mt-6 pl-2'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-8 text-tertiary'>
            Pure algae oil with a soft orange flavour. Highest content of
            EPA+DHA
          </p>
        </div>
        <div className='flex items-center mt-6 pl-2'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-8 text-tertiary'>
            And soon an algae oil capsule with EPA+DHA
          </p>
        </div>
        <div className='my-10'>
          <Button href='/about' bgColor='bg-primary' textColor='text-white'>
            View This Product
          </Button>
        </div>
        <span className='underline cursor-pointer text-tertiary hover:text-secondary'>View All Products</span>
      </div>
    </div>
  );
}

export default AboutUs;

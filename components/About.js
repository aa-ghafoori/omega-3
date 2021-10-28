import greenOmega from '../images/green.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from './ui/Button';

function About() {
  return (
    <div className='responsive padding paddingy text-primary flex flex-col justify-center lg:flex-row'>
      <Image src={greenOmega} objectFit='contain' />
      <div className='lg:ml-20 lg:flex-auto'>
        <h3 className='text-secondary my-10 font-bold'>About Us</h3>
        <h1 className='text-3xl font-bold md:text-5xl'>
          Arctic Blue way - Omega-3 from Algae
        </h1>
        <p className='my-8'>
          Algae are the only (mini) plants that are able to make Omega-3 fatty
          acids EPA and DHA.
        </p>
        <p>
          We at Arctic Blue firmly believe in the future of algae and Omega-3
          rich algae oil. We currently offer 4 different types of algae oil,
          with the following benefits:
        </p>
        <div className='flex items-center mt-6 pl-2'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-8'>
            Our smallest algae oil capsule, so easy to swallow
          </p>
        </div>
        <div className='flex items-center mt-6 pl-2'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-8'>
            Also as a winter variant, so with added (vegetable!) vitamin D3
          </p>
        </div>
        <div className='flex items-center mt-6 pl-2'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-8'>
            Pure algae oil with a soft orange flavour. Highest content of
            EPA+DHA
          </p>
        </div>
        <div className='flex items-center mt-6 pl-2'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-8'>And soon an algae oil capsule with EPA+DHA</p>
        </div>
        <div className='mt-10'>
          <Button href='/' bgColor='bg-primary' textColor='text-white'>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;

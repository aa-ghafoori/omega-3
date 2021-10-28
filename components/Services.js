import {
  faCapsules,
  faFish,
  faLightbulb,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import Card2 from './Card2';
import omegaImage from '../images/blue.png';
import Image from 'next/image';

function Services() {
  return (
    <div className='responsive text-primary padding paddingy text-center'>
      <h3 className='text-secondary mb-10 font-bold '>Services</h3>
      <h1 className='text-3xl font-bold md:text-5xl'>Our Services</h1>
      <p className='my-8 text-[#AAAAAA] max-w-xl m-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, soluta?
      </p>
      <div className='lg:flex'>
        <div className='md:grid md:grid-cols-2 items-center gap-x-10 flex-auto lg:mr-8 '>
          <Card2
            icon={faFish}
            title='Fish Oil'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
            iconColor='text-secondary'
            titleColor='text-primary'
            textColor='text-[#AAAAAA]'
          />
          <Card2
            icon={faSeedling}
            title='Algea Oil'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
            iconColor='text-secondary'
            titleColor='text-primary'
            textColor='text-[#AAAAAA]'
          />
          <Card2
            icon={faCapsules}
            title='Medicine'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
            iconColor='text-secondary'
            titleColor='text-primary'
            textColor='text-[#AAAAAA]'
          />
          <Card2
            icon={faLightbulb}
            title='Consultation'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
            iconColor='text-secondary'
            titleColor='text-primary'
            textColor='text-[#AAAAAA]'
          />
        </div>
        <div className='mt-10 lg:m-auto'>
          <Image src={omegaImage} />
        </div>
      </div>
    </div>
  );
}

export default Services;

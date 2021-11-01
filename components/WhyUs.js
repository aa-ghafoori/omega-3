import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import {
  faCertificate,
  faClipboardCheck,
  faPrescriptionBottleAlt,
} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import vitOmega from '../images/vitd.png';
import Image from 'next/image';

function WhyUs() {
  return (
    <div className='responsive text-primary padding paddingy text-center'>
      <h3 className='text-secondary mb-10 font-bold '>Why Choose Us</h3>
      <h1 className='text-3xl md:text-5xl font-bold'>Why Choose Us</h1>
      <p className='my-8 text-[#AAAAAA] max-w-xl m-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, soluta?
      </p>
      <div className='lg:flex'>
        <div className='md:grid md:grid-cols-2 gap-x-10 flex-auto lg:mr-8'>
          <Card
            icon={faPagelines}
            title='100% Organic'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
            iconColor='text-secondary'
            titleColor='text-tertiary'
            textColor='text-[#AAAAAA]'
          />
          <Card
            icon={faCertificate}
            title='Certified Medicine'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
            iconColor='text-secondary'
            titleColor='text-tertiary'
            textColor='text-[#AAAAAA]'
          />
          <Card
            icon={faClipboardCheck}
            title='3rd Party Tested'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
            iconColor='text-secondary'
            titleColor='text-tertiary'
            textColor='text-[#AAAAAA]'
          />
          <Card
            icon={faPrescriptionBottleAlt}
            title='Reduce Pain'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
            iconColor='text-secondary'
            titleColor='text-tertiary'
            textColor='text-[#AAAAAA]'
          />
        </div>
        <div className='mt-10 lg:m-auto'>
          <Image src={vitOmega} />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

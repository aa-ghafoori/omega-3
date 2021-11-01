import Card from './Card';
import {
  faTruck,
  faCertificate,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className='bg-[#f3f3f3] '>
      <div className='responsive padding paddingy md:flex'>
        <Card
          button
          icon={faTruck}
          title='Free Delivery'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
          iconColor='text-primary'
          titleColor='text-tertiary'
          textColor='text-[#5c5c5c]'
        />
        <Card
          button
          icon={faCertificate}
          title='Certified Medicine'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
          iconColor='text-primary'
          titleColor='text-tertiary'
          textColor='text-[#5c5c5c]'
        />
        <Card
          button
          icon={faUsers}
          title='Professional Team'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
          iconColor='text-primary'
          titleColor='text-tertiary'
          textColor='text-[#5c5c5c]'
        />
      </div>
    </div>
  );
};

export default Info;

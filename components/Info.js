import Card from './Card';
import {
  faTruck,
  faCertificate,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className='bg-primary padding paddingy md:flex'>
      <Card
        icon={faTruck}
        title='Free Delivery'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
        iconColor='text-secondary'
        titleColor='text-white'
        textColor='text-[#B0B0B0]'
      />
      <Card
        icon={faCertificate}
        title='Certified Medicine'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
        iconColor='text-secondary'
        titleColor='text-white'
        textColor='text-[#B0B0B0]'
      />
      <Card
        icon={faUsers}
        title='Professional Team'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo!'
        iconColor='text-secondary'
        titleColor='text-white'
        textColor='text-[#B0B0B0]'
      />
    </div>
  );
};

export default Info;

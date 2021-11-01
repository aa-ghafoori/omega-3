import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './ui/Button';

function Card({ icon, title, text, iconColor, titleColor, textColor, button }) {
  return (
    <div className='text-center py-10 max-w-xs m-auto transition transform duration-300 ease-in-out hover:-translate-y-2'>
      <FontAwesomeIcon icon={icon} className={`${iconColor}`} size='2x' />
      <h2 className={`${titleColor} text-2xl font-bold my-3`}>{title}</h2>
      <p className={`${textColor}`}>{text}</p>
      {button && (
        <div className='mt-8'>
          <Button href='/' textColor='text-[#f3f3f3]' bgColor='bg-primary'>
            Learn More
          </Button>
        </div>
      )}
    </div>
  );
}

export default Card;

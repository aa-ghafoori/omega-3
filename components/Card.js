import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ icon, title, text, iconColor, titleColor, textColor }) {
  return (
    <div className='text-center py-10 max-w-xs'>
      <FontAwesomeIcon icon={icon} className={`${iconColor}`} size='2x' />
      <h2 className={`${titleColor} text-2xl font-bold my-3`}>{title}</h2>
      <p className={`${textColor}`}>{text}</p>
    </div>
  );
}

export default Card;

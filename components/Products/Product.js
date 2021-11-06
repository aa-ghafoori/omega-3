import {
  faCheck,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

function Product({ image, title, description, description2 }) {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg min-w-[18rem] mx-3'>
      <Image className='w-full' src={image} />
      <div className='px-6 py-4 text-tertiary'>
        <h3 className='font-bold text-xl mb-2'>{title}</h3>
        <div className='flex items-center'>
          <div className='flex my-4 mr-6'>
            <FontAwesomeIcon icon={faStar} size='xs' />
            <FontAwesomeIcon icon={faStar} size='xs' />
            <FontAwesomeIcon icon={faStar} size='xs' />
            <FontAwesomeIcon icon={faStar} size='xs' />
            <FontAwesomeIcon icon={faStarHalfAlt} size='xs' />
          </div>
          <span className='text-xs'>+1500 times bought</span>
        </div>
        <div className='flex items-center mt-3'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-4 text-xs'>{description}</p>
        </div>
        <div className='flex items-center mt-3'>
          <FontAwesomeIcon icon={faCheck} size='1x' />
          <p className='ml-4 text-xs'>{description2}</p>
        </div>
        <div className='py-6'>
          <Button href='/' bgColor='bg-primary' textColor='text-white'>
            View This Product
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;

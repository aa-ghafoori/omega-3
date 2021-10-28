import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ image, category, title, text }) => {
  return (
    <div className='my-10'>
      <Image src={image} />
      <h3 className='text-secondary mt-2'>{category}</h3>
      <h1 className='text-lg font-bold my-2'>{title}</h1>
      <p className='mb-6 text-[#AAAAAA]'>{text}</p>
      <Link href='/'>
        <a className='flex items-center'>
          <span className='mr-2'>Read More</span>
          <FontAwesomeIcon className='text-lg' icon={faLongArrowAltRight} />
        </a>
      </Link>
    </div>
  );
};

export default NewsCard;

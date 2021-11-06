import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '../../lib/titleToSlug';

const NewsCard = ({ imageUrl, category, title, text, id }) => {
  return (
    <div className='my-4 p-4 shadow-sm '>
      {imageUrl !== null ? (
        <div className='relative h-80'>
          <Image src={imageUrl} objectFit='cover' layout='fill' />
        </div>
      ) : (
        <div></div>
      )}
      <h3 className='text-secondary mt-2'>{category}</h3>
      <h3 className='text-lg font-bold my-2'>{title}</h3>
      <p className={`text-[#AAAAAA] ${imageUrl === null ? 'mb-2' : 'mb-6'}`}>
        {text}
      </p>
      <Link href={'/news/' + slugify(title)}>
        <a className='flex items-center hover-item'>
          <span className='mr-2'>Read More</span>
          <FontAwesomeIcon className='text-lg' icon={faLongArrowAltRight} />
        </a>
      </Link>
    </div>
  );
};

export default NewsCard;

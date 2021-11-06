import Link from 'next/link';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Categories = () => {
  return (
    <div className='paddingy text-tertiary'>
      <h2 className='text-3xl font-bold md:text-4xl text-primary'>Category</h2>
      <Link href='/'>
        <a className='flex items-center mt-2'>
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className='text-[#AAAAAA] mr-2'
          />
          <h3 className='text-lg font-bold '>Tips</h3>
        </a>
      </Link>
      <Link href='/'>
        <a className='flex items-center mt-2'>
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className='text-[#AAAAAA] mr-2'
          />
          <h3 className='text-lg font-bold '>News</h3>
        </a>
      </Link>
      <Link href='/'>
        <a className='flex items-center mt-2'>
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className='text-[#AAAAAA] mr-2'
          />
          <h3 className='text-lg font-bold '>Medicine</h3>
        </a>
      </Link>
    </div>
  );
};

export default Categories;

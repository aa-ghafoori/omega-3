import Layout from '../../components/ui/Layout';
import omegaImage from '../../images/vitd.png';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../../components/News/NewsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:1337/news/');
  return {
    props: { data },
  };
};

const News = ({ data }) => {
  console.log(data);
  const getDate = date => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = months[new Date(date).getMonth()];
    const day = new Date(date).getDay().toString();
    const year = new Date(date).getFullYear().toString();
    const newDate = month + ' ' + day + ',' + ' ' + year;
    return newDate;
  };

  return (
    <Layout>
      <div className='relative bg-gradient-to-r from-primary to-[#05453a7c] text-white flex items-center'>
        <div className='absolute h-full w-full z-[-10]'>
          <Image src={omegaImage} objectFit='cover' layout='fill' />
        </div>
        <div className='responsive padding pt-60 pb-40 md:max-w-2xl lg:max-w-4xl m-auto'>
          <h1 className='text-4xl font-bold capitalize md:text-6xl'>News</h1>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-3 responsive'>
        <div className='lg:col-span-2 padding paddingy responsive'>
          <h1 className='text-3xl font-bold md:text-4xl text-primary'>
            Latest News
          </h1>
          <div className='lg:grid lg:grid-cols-2'>
            {data.slice(0, 3).map(news => {
              return (
                <NewsCard
                  key={news.id.toString()}
                  id={news.id.toString()}
                  category={news.categories[0].name}
                  title={news.title}
                  text={news.body.slice(0, 100) + '...'}
                  imageUrl={'http://localhost:1337' + news.image.url}
                  imageWidth={news.image.width}
                  imageHeight={news.image.height}
                />
              );
            })}
          </div>
        </div>
        <div className='lg:col-span-1padding paddingy text-primary'>
          <h1 className='text-3xl font-bold md:text-4xl text-primary mb-6'>
            Featured News
          </h1>
          {data.slice(3).map(news => {
            const date = getDate(news.published_at);
            return (
              <Link href={'/news/' + news.id.toString()} key={news.id}>
                <a>
                  <div className='mt-4 text-tertiary'>
                    <h1 className='text-lg font-bold '>{news.title}</h1>
                    <div className='text-[#AAAAAA] flex items-center'>
                      <FontAwesomeIcon icon={faClock} />
                      <span className='ml-2 text-sm'>{date}</span>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
          <div className='paddingy text-tertiary'>
            <h1 className='text-3xl font-bold md:text-4xl text-primary'>
              Category
            </h1>
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
        </div>
      </div>
    </Layout>
  );
};

export default News;

import Layout from '../../components/ui/Layout';
import omegaImage from '../../images/vitd.png';
import Image from 'next/image';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Comment from '../../components/Comment';
import Link from 'next/link';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

export const getStaticPaths = async () => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/news');
  const paths = data.map(news => {
    return { params: { id: news.id.toString() } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/news');
  console.log(data);
  const singleNews = data.find(news => news.id.toString() === params.id);
  console.log(singleNews);
  return {
    props: { singleNews, data },
  };
};

const SingleNews = ({ singleNews, data }) => {
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

  const singleNewsDate = getDate(singleNews.published_at);

  return (
    <Layout>
      <div className='relative bg-gradient-to-r from-primary to-[#05453a7c] text-white flex items-center'>
        <div className='absolute h-full w-full z-[-10]'>
          <Image src={omegaImage} objectFit='cover' layout='fill' />
        </div>
        <div className='responsive padding pt-60 pb-40 md:max-w-2xl lg:max-w-4xl m-auto'>
          <h1 className='text-4xl font-bold capitalize md:text-5xl'>
            {singleNews.title}
          </h1>
          <div className='flex items-center text-lg justify-center mt-10  '>
            <FontAwesomeIcon icon={faClock} className='text-secondary' />
            <span className='ml-3'>{singleNewsDate}</span>
          </div>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-3 responsive'>
        <div className='lg:col-span-2'>
          <div className='padding paddingy'>
            <div className='relative h-96'>
              <Image
                src={process.env.NEXT_PUBLIC_STRAPI_API_URL + singleNews.image.url}
                width={singleNews.image.width}
                height={singleNews.image.height}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p className='text-[#AAAAAA] mt-6 text-tertiary'>{singleNews.body}</p>
          </div>
          <div className='padding paddingy'>
            <h3 className='font-bold my-6'>Share This:</h3>
            <div className='text-secondary'>
              <FontAwesomeIcon className='mr-4' icon={faFacebookF} />
              <FontAwesomeIcon className='mr-4' icon={faTwitter} />
              <FontAwesomeIcon className='mr-4' icon={faPinterestP} />
              <FontAwesomeIcon className='mr-4' icon={faLinkedinIn} />
            </div>
          </div>
          <Comment />
        </div>
        <div className='lg:col-span-1 padding paddingy text-tertiary'>
          <h1 className='text-3xl font-bold md:text-4xl text-primary mb-6'>
            Featured News
          </h1>
          {data.slice(3).map(news => {
            const date = getDate(news.published_at);
            return (
              <Link href={'/news/' + news.id.toString()}>
                <a>
                  <div className='mt-4'>
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

export default SingleNews;

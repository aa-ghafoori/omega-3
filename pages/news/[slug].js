import Layout from '../../components/ui/Layout';
import omegaImage from '../../images/vitd.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Comment from '../../components/Comment';
import { getAllNews } from '../../lib/api';
import { getDate } from '../../lib/getDate';
import { slugify } from '../../lib/titleToSlug';
import FeaturedNews from '../../components/News/FeaturedNews';
import Categories from '../../components/Categories';
import { NewsArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import PostTitle from '../../components/postTitle';
import spinner from '../../images/spinner.svg';
import NotFound from '../404';

const SingleNews = ({ singleNews, data }) => {
  const router = useRouter();
  if (!router.isFallback && !singleNews?.title) {
    return <NotFound />;
  }

  const singleNewsDate = getDate(singleNews?.published_at);

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>
          Loading...
          <Image src={spinner} className='animate-spin' />
        </PostTitle>
      ) : (
        <Fragment>
          <NextSeo
            title={singleNews.title}
            description={singleNews.description}
            canonical={'omega-3.vercel.app/news/' + slugify(singleNews.title)}
            openGraph={{
              url: 'omega-3.vercel.app/news/' + slugify(singleNews.title),
              title: singleNews.title,
              description: singleNews.description,
              images: [
                {
                  url: singleNews.image.url,
                  height: singleNews.image.height,
                  width: singleNews.image.width,
                  alt: singleNews.image.alternativeText,
                },
              ],
            }}
          />
          <NewsArticleJsonLd
            url={'omega-3.vercel.app/news/' + slugify(singleNews.title)}
            title={singleNews.title}
            images={[singleNews.image.url]}
            section={singleNews.categories[0].name}
            datePublished={singleNews.published_at}
            dateModified={singleNews.updated_at}
            authorName={singleNews.author}
            description={singleNews.description}
            body={singleNews.body}
          />
          <div className='relative bg-gradient-to-r from-primary to-[#05453a7c] text-white flex items-center'>
            <div className='absolute h-full w-full z-[-10]'>
              <Image
                src={omegaImage}
                objectFit='cover'
                layout='fill'
                priority
              />
            </div>
            <div className='responsive padding pt-60 pb-40 md:max-w-2xl lg:max-w-4xl m-auto'>
              <h1 className='text-4xl font-bold capitalize md:text-5xl'>
                {singleNews.title}
              </h1>
              <div className='flex items-center text-lg justify-center mt-10'>
                <FontAwesomeIcon icon={faClock} className='text-secondary' />
                <span className='ml-3'>{singleNewsDate}</span>
              </div>
            </div>
          </div>
          <div className='lg:grid lg:grid-cols-3 responsive'>
            <div className='lg:col-span-2'>
              <article className='padding paddingy'>
                <div className='relative h-96'>
                  <Image
                    src={singleNews.image.url}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <p className='text-[#AAAAAA] mt-6 text-tertiary'>
                  {singleNews.body}
                </p>
              </article>
              <div className='padding paddingy'>
                <span className='inline-block font-bold my-6'>Share This:</span>
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
              <FeaturedNews data={data} />
              <Categories />
            </div>
          </div>
        </Fragment>
      )}
    </Layout>
  );
};

export default SingleNews;

export const getStaticPaths = async () => {
  const data = await getAllNews();
  const paths =
    data?.map(news => {
      return { params: { slug: slugify(news.title) } };
    }) || [];
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getAllNews();
  const singleNews =
    data?.find(news => slugify(news.title) === params.slug) || [];
  return {
    props: { singleNews, data },
    revalidate: 60,
  };
};

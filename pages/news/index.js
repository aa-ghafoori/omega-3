import Layout from '../../components/ui/Layout';
import omegaImage from '../../images/vitd.png';
import Image from 'next/image';
import NewsCard from '../../components/News/NewsCard';
import { getAllNews } from '../../lib/api';
import FeaturedNews from '../../components/News/FeaturedNews';
import Categories from '../../components/Categories';
import { NextSeo } from 'next-seo';

const News = ({ data }) => {
  return (
    <Layout>
      <NextSeo
        title='News - Arctic Blue'
        description='Arctic Blue levert zuiver en pure omega-3 met VEGAN en MSC-keurmerken. De belangrijkste omega-3 vetzuren voor hart, hersenen en gezichtsvermogen.'
        canonical='omega-3.vercel.app/news'
        openGraph={{
          url: 'omega-3.vercel.app/news',
          title: 'News - Arctic Blue',
          description:
            'Arctic Blue levert zuiver en pure omega-3 met VEGAN en MSC-keurmerken. De belangrijkste omega-3 vetzuren voor hart, hersenen en gezichtsvermogen.',
        }}
      />
      <div className='relative bg-gradient-to-r from-primary to-[#05453a7c] text-white flex items-center'>
        <div className='absolute h-full w-full z-[-10]'>
          <Image src={omegaImage} objectFit='cover' layout='fill' priority/>
        </div>
        <div className='responsive padding pt-60 pb-40 md:max-w-2xl lg:max-w-4xl m-auto'>
          <h1 className='text-4xl font-bold capitalize md:text-6xl'>News</h1>
        </div>
      </div>
      <main className='lg:grid lg:grid-cols-3 responsive'>
        <div className='lg:col-span-2 padding paddingy responsive'>
          <h2 className='text-3xl font-bold md:text-4xl text-primary'>
            Latest News
          </h2>
          <div className='lg:grid lg:grid-cols-2'>
            {data.slice(0, 4).map(news => {
              return (
                <NewsCard
                  key={news.id.toString()}
                  id={news.id.toString()}
                  category={news.categories[0].name}
                  title={news.title}
                  text={news.body.slice(0, 100) + '...'}
                  imageUrl={news.image.url}
                />
              );
            })}
          </div>
        </div>
        <div className='lg:col-span-1 padding paddingy text-tertiary'>
          <FeaturedNews data={data} />
          <Categories />
        </div>
      </main>
    </Layout>
  );
};

export default News;

export const getStaticProps = async () => {
  const data = await getAllNews();
  return {
    props: { data },
  };
};

import Button from '../ui/Button';
import NewsCard from './NewsCard';

const News = ({ data }) => {

  return (
    <div className='responsive padding paddingy text-tertiary'>
      <h3 className='text-secondary mb-10 font-bold'>News</h3>
      <div className='md:grid md:grid-cols-2 items-start justify-items-end'>
        <div>
          <h1 className='text-3xl font-bold md:text-5xl text-primary'>
            Tips & Article
          </h1>
          <p className='my-8 text-[#AAAAAA]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            officiis maxime aliquam facere, perferendis earum et suscipit id
            corrupti velit.
          </p>
        </div>
        <div className='mt-10'>
          <Button href='/' bgColor='bg-primary' textColor='text-white'>
            View More
          </Button>
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10'>
        {data.slice(0, 2).map(news => {
          return (
            <NewsCard
              key={news.id.toString()}
              category={news.categories[0].name}
              title={news.title}
              text={news.body.slice(0, 100) + '...'}
              imageUrl={process.env.NEXT_PUBLIC_STRAPI_API_URL + news.image.url}
              imageWidth={news.image.width}
              imageHeight={news.image.height}
            />
          );
        })}
        <div className={`hidden lg:block`}>
          {data.slice(2, 6).map(news => {
            return (
              <NewsCard
                key={news.id.toString()}
                title={news.title}
                text={news.body.slice(0, 100) + '...'}
                imageUrl={null}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;

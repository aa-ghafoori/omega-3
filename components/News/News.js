import Button from '../ui/Button';
import NewsCard from './NewsCard';
import omegaImage from '../../images/vitd.png';
import omegaImage2 from '../../images/green.png';

const News = () => {
  return (
    <div className='responsive padding paddingy text-primary'>
      <h3 className='text-secondary mb-10 font-bold'>News</h3>
      <div className='md:grid md:grid-cols-2 items-start justify-items-end'>
        <div>
          <h1 className='text-3xl font-bold md:text-5xl'>Tips & Article</h1>
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
        <NewsCard
          image={omegaImage}
          category='News'
          title='First-ever medicinal cannabis on PBS to help kids with epilepsy'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officiis
        maxime aliquam facere, '
        />
        <NewsCard
          image={omegaImage2}
          category='Medicine'
          title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officiis
        maxime aliquam facere, '
        />
        <div className={`hidden lg:block`}>
          <NewsCard
            image={null}
            category='Medicine'
            title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officiis
        maxime aliquam facere, '
          />
          <NewsCard
            image={null}
            category='Medicine'
            title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officiis
        maxime aliquam facere, '
          />
          <NewsCard
            image={null}
            category='Medicine'
            title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officiis
        maxime aliquam facere, '
          />
        </div>
      </div>
    </div>
  );
};

export default News;

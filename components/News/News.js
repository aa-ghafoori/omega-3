import Button from '../ui/Button';
import NewsCard from './NewsCard';
import omegaImage from '../../images/vitd.png';
import omegaImage2 from '../../images/green.png';

const News = () => {
  return (
    <div className='padding paddingy text-primary'>
      <h3 className='text-secondary mb-10 font-bold'>News</h3>
      <h1 className='text-3xl font-bold'>Tips & Article</h1>
      <p className='my-8 text-[#AAAAAA]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officiis
        maxime aliquam facere, perferendis earum et suscipit id corrupti velit.
      </p>
      <div className='mt-10'>
        <Button href='/' bgColor='bg-primary' textColor='text-white'>
          View More
        </Button>
      </div>
      <NewsCard
        image={omegaImage}
        category='News'
        title='First-ever medicinal cannabis on PBS to help kids with epilepsy'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officiis
        maxime aliquam facere, perferendis earum et suscipit id corrupti velit'
      />
      <NewsCard
        image={omegaImage2}
        category='Medicine'
        title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officiis
        maxime aliquam facere, perferendis earum et suscipit id corrupti velit'
      />
    </div>
  );
};

export default News;

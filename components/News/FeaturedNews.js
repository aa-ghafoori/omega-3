import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import Link from 'next/link';
import { getDate } from '../../lib/getDate';
import { slugify } from '../../lib/titleToSlug';

const FeaturedNews = ({ data }) => {
  return (
    <Fragment>
      <h2 className='text-3xl font-bold md:text-4xl text-primary mb-6'>
        Featured News
      </h2>
      {data.slice(3).map(news => {
        const date = getDate(news.published_at);
        return (
          <Link href={'/news/' + slugify(news.title)} key={news.id}>
            <a>
              <div className='mt-4'>
                <h3 className='text-lg font-bold '>{news.title}</h3>
                <div className='text-[#AAAAAA] flex items-center'>
                  <FontAwesomeIcon icon={faClock} />
                  <span className='ml-2 text-sm'>{date}</span>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </Fragment>
  );
};

export default FeaturedNews;

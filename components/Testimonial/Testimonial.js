import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TestimonialCard from './TestimonialCard';
import blueOmega from '../../images/blue.png';
import { useEffect, useState } from 'react';

const Testimonial = () => {
  const [windowWidth, setWindowWidth] = useState('');
  useEffect(() => {
    windowWidth === '' && setWindowWidth(window.innerWidth);
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };
    return () => {};
  }, []);
  return (
    <div className='responsive text-primary padding paddingy bg-[#f7f7f7] shadow-md'>
      <h2 className='text-secondary mb-10 font-bold '>Testimonial</h2>
      <h2 className='text-3xl font-bold md:text-5xl'>
        Honest Review of Our Customers
      </h2>
      <p className='my-8 text-[#AAAAAA]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet
        repudiandae impedit, debitis velit consectetur quos veritatis minus
        vitae itaque, ipsum quod quo quidem explicabo?
      </p>
      <div className='m-auto'>
        <Carousel
          showThumbs={false}
          emulateTouch
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop
          autoPlay
          centerMode={windowWidth > 1024 ? true : false}
          centerSlidePercentage={33}
        >
          <div>
            <TestimonialCard
              image={blueOmega}
              name='John Doe'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet
        repudiandae impedit, debitis velit consectetur quos '
            />
          </div>
          <div>
            <TestimonialCard
              image={blueOmega}
              name='John Doe'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet
        repudiandae impedit, debitis velit consectetur quos '
            />
          </div>
          <div>
            <TestimonialCard
              image={blueOmega}
              name='John Doe'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet
        repudiandae impedit, debitis velit consectetur quos '
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;

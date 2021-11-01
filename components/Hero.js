import omegaImage from '..//images/vitd.png';
import Image from 'next/image';
import Button from '../components/ui/Button';

const Hero = () => {
  return (
    <div className='relative bg-gradient-to-r from-primary to-[#05453a7c] text-white flex items-center '>
      <div className='absolute h-full w-full z-[-10]'>
        <Image src={omegaImage} objectFit='cover' layout='fill' />
      </div>
      <div className='responsive padding pt-60 pb-40 md:max-w-2xl lg:max-w-4xl'>
        <h1 className='text-4xl font-bold capitalize md:text-6xl'>
          Vegetarian Omega-3 fatty acids with the power of fish oil
        </h1>
        <p className='my-8'>
          The most important omega-3 for heart, eyes and brain
          <br />1 daily dose contains 210 mg DHA and 70 mg EPA
        </p>
        <Button href='/about' bgColor='bg-secondary' textColor='text-primary'>
          About Us
        </Button>
      </div>
    </div>
  );
};

export default Hero;

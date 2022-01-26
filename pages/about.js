import Layout from '../components/ui/Layout';
import omegaImage from '../images/vitd.png';
import Image from 'next/image';
import Principles from '../components/Principles';
import WhyUs from '../components/WhyUs';
import AboutMain from '../components/aboutMain';
import { NextSeo } from 'next-seo';

const About = () => {
  return (
    <Layout>
      <NextSeo
        title='About Arctic Blue - Arctic Blue'
        description='Arctic Blue levert zuiver en pure omega-3 met VEGAN en MSC-keurmerken. De belangrijkste omega-3 vetzuren voor hart, hersenen en gezichtsvermogen.'
        canonical='omega-3.vercel.app/about'
        openGraph={{
          url: 'omega-3.vercel.app/about',
          title: 'About Arctic Blue - Arctic Blue',
          description:
            'Arctic Blue levert zuiver en pure omega-3 met VEGAN en MSC-keurmerken. De belangrijkste omega-3 vetzuren voor hart, hersenen en gezichtsvermogen.',
        }}
      />
      {/* <div className='relative bg-gradient-to-r from-primary to-[#05453a7c] text-white flex items-center'>
        <div className='absolute h-full w-full z-[-10]'>
          <Image src={omegaImage} objectFit='cover' layout='fill' priority/>
        </div>
        <div className='padding pt-60 pb-40 max-w-md lg:max-w-4xl m-auto text-center'>
          <h1 className='text-4xl font-bold capitalize md:text-6xl'>
            About Us
          </h1>
          <p className='my-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nulla?
          </p>
        </div>
      </div>
      <main>
        <AboutMain />
        <Principles />
        <WhyUs />
      </main> */}
      <h1 className='py-60 text-5xl text-center'>Comming Soon ...</h1>
    </Layout>
  );
};

export default About;

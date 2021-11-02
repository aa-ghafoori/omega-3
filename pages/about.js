import Layout from '../components/ui/Layout';
import omegaImage from '../images/vitd.png';
import Image from 'next/image';
import greenOmega from '../images/green.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import { faCannabis } from '@fortawesome/free-solid-svg-icons';
import Principles from '../components/Principles';
import WhyUs from '../components/WhyUs';

const About = () => {
  return (
    <Layout>
      <div className='relative bg-gradient-to-r from-primary to-[#05453a7c] text-white flex items-center'>
        <div className='absolute h-full w-full z-[-10]'>
          <Image src={omegaImage} objectFit='cover' layout='fill' />
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
      <div className='py-28'>
        <h1 className='text-3xl font-bold md:text-4xl text-center text-primary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          suscipit?
        </h1>
        <div className='m-auto w-[fit-content] mt-8'>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon
            icon={faCannabis}
            className='text-secondary text-xl mx-2'
          />
          <FontAwesomeIcon icon={faWindowMinimize} />
        </div>
      </div>
      <div className='responsive padding paddingy text-primary flex flex-col justify-center'>
        <Image src={greenOmega} objectFit='contain' />
        <div className=' lg:flex-auto text-tertiary'>
          <h3 className='text-secondary my-10 font-bold'>About Us</h3>
          <h1 className='text-3xl font-bold md:text-5xl capitalize text-primary'>
            How do you know if a fish oil is good?
          </h1>
          <p className='my-4'>
            It was a question that occupied my mind 5 years ago. As a fish oil
            expert I worked in the traditional industry of multinationals at the
            time.
          </p>
          <p className='my-4'>
            My children were still small and I was looking for a good addition
            to the pieces of fish that my children only slowly accepted.
          </p>
          <p className='my-4'>
            Through my experience I knew much more than an average consumer. A
            fish oil for my family and myself should have the following
            qualities:
          </p>
          <p className='my-4'>
            1. Clean <br /> 2. Fresh <br /> 3. Natural <br /> 4. Sustainable
          </p>
          <p className='my-4'>
            The fish oil I was working with at the time was certainly clean and
            natural, but not the freshest nor the most sustainable ...
          </p>
          <p className='my-4'>
            Furthermore, I thought it was important that the fish oil should not
            be made fromfish that is on the menu of dolphin, seabird, sea lion
            and whale.
          </p>
          <p className='my-4'>
            And that there are no further adverse effects for the oceans, the
            environment or the local population.
          </p>
          <p className='my-4'>
            During that period I had met a lot of people in the fish oil world.
          </p>
          <p className='my-4'>
            And found out that the fish oil that met my wish list, one with
            principles, did exist.
          </p>
          <p className='my-4'>
            Because I was so enthusiastic about it (and still am 🙂 ), I founded
            Arctic Blue to let everyone taste this Pure Arctic MSC Fish Oil.
          </p>
          <p className='my-4'>
            This is now made for us in Norway from 100% fresh Arctic wild fish.
            Unlike most fish oil, the fish is not caught especially for this,
            but the fillet trimmings are used., which remain after the fillet
            for the supermarket has been removed.
          </p>
          <p className='my-4'>
            I named the company Arctic Blue because it refers to its origin,
            which is the Arctic waters, where all our fish oils come from.
          </p>
          <p className='my-4'>
            In the past 5 years we have helped more than 10,000 customers with
            their fish oil (or algae oil) choice.
          </p>
          <p className='my-4'>
            We are committed to making and supplying the cleanest, purest and
            most sustainable omega-3 fatty acids.
          </p>
          <p className='my-4'>
            I am always open to a critical comment or suggestion, this website
            must be complete and transparent.
          </p>
          <p className='my-4'>
            If you still have questions, you can simply call us (030-2447097 /
            06-41081500) or email us (info@arctic-blue.com).
          </p>
          <p className='my-4'>Maybe we'll talk!</p>
          <p className='my-4'>
            Kind regards, <br />
            Ludo van de Wiel
          </p>
        </div>
      </div>
      <Principles />
      <WhyUs />
    </Layout>
  );
};

export default About;

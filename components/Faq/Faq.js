import Question from './Question';
import Image from 'next/image';
import mscImage from '../../images/MSC.svg';
import veganImage from '../../images/vegan.png';
import Link from 'next/link';

const Faq = () => {
  return (
    <div className='responsive padding paddingy text-center'>
      <h3 className='text-secondary mb-10 font-bold '>FAQ</h3>
      <h1 className='text-3xl font-bold text-primary md:text-5xl'>
        Frequently Asked Questions
      </h1>
      <p className='my-8 text-[#AAAAAA] max-w-xl m-auto'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae culpa
        consequuntur dicta exercitationem praesentium nemo non, nam sint maiores
        laborum!
      </p>
      <div className='md:grid grid-cols-2 gap-x-10'>
        <Question
          question='What is Clean Fish Oil?'
          answer={
            <p>
              Our fish oil is made (from the fillet trimmings) of fresh Arctic
              wild cod that swims in the Barents Sea, which lies between Novaya
              Zemlya, Spitsbergen and Northern Norway. <br />
              <br />
              One of the cleanest waters in the world, far away from the plastic
              soup in the Pacific Ocean between Asia and South America. <br />
              <br />
              All our fish products come from sustainable fisheries and carry
              the Marine Stewardship Council (MSC) quality mark. <br /> <br />
              <div>
                <Image src={mscImage} /> <br /> <br />
              </div>
              <Link href='/'>
                <a className='underline'>
                  Read more about our <em>'Clean'</em> method.
                </a>
              </Link>
            </p>
          }
        />
        <Question
          question='What is Fresh Algea Oil?'
          answer={
            <p>
              Our plant-based Omega-3 products are made from algae. Algae are
              mini-plants that can also make their own Omega-3 fatty acids on
              land in closed and controlled conditions. <br />
              <br />
              We are already making various products with the oil from the
              algae. Because algae are the future, there will be more and more.{' '}
              <br />
              <br />
              All our vegetable products bear the VEGAN quality mark. With this
              we guarantee 100% that no fish oil has been used.
              <br /> <br />
              <div className='w-20'>
                <Image src={veganImage} /> <br /> <br />
              </div>
              <Link href='/'>
                <a className='underline'>
                  Read more about our <em>'Fresh'</em> method.
                </a>
              </Link>
            </p>
          }
        />
        <Question
          question='What is Clean Fish Oil?'
          answer={
            <p>
              Our fish oil is made (from the fillet trimmings) of fresh Arctic
              wild cod that swims in the Barents Sea, which lies between Novaya
              Zemlya, Spitsbergen and Northern Norway. <br />
              <br />
              One of the cleanest waters in the world, far away from the plastic
              soup in the Pacific Ocean between Asia and South America. <br />
              <br />
              All our fish products come from sustainable fisheries and carry
              the Marine Stewardship Council (MSC) quality mark. <br /> <br />
              <div>
                <Image src={mscImage} /> <br /> <br />
              </div>
              <Link href='/'>
                <a className='underline'>
                  Read more about our <em>'Clean'</em> method.
                </a>
              </Link>
            </p>
          }
        />
        <Question
          question='What is Fresh Algea Oil?'
          answer={
            <p>
              Our plant-based Omega-3 products are made from algae. Algae are
              mini-plants that can also make their own Omega-3 fatty acids on
              land in closed and controlled conditions. <br />
              <br />
              We are already making various products with the oil from the
              algae. Because algae are the future, there will be more and more.{' '}
              <br />
              <br />
              All our vegetable products bear the VEGAN quality mark. With this
              we guarantee 100% that no fish oil has been used.
              <br /> <br />
              <div className='w-20'>
                <Image src={veganImage} /> <br /> <br />
              </div>
              <Link href='/'>
                <a className='underline'>
                  Read more about our <em>'Fresh'</em> method.
                </a>
              </Link>
            </p>
          }
        />
      </div>
    </div>
  );
};

export default Faq;

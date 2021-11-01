import Image from 'next/image';
import mscImage from '../images/MSC.svg';
import veganImage from '../images/vegan.png';
import Link from 'next/link';

const Principles = () => {
  return (
    <div className='padding paddingy text-primary responsive'>
      <h3 className='text-secondary my-10 font-bold'>Our Principles</h3>
      <h3 className='text-2xl my-4 font-bold'>1. Fresh Algea Oil</h3>
      <p className='mb-8'>
        Our plant-based Omega-3 products are made from algae. Algae are
        mini-plants that can also make their own Omega-3 fatty acids on land in
        closed and controlled conditions. <br />
        <br />
        We are already making various products with the oil from the algae.
        Because algae are the future, there will be more and more. <br />
        <br />
        All our vegetable products bear the VEGAN quality mark. With this we
        guarantee 100% that no fish oil has been used.
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
      <h3 className='text-2xl my-4 font-bold'>2. Clean Fish Oil</h3>
      <p>
        Our fish oil is made (from the fillet trimmings) of fresh Arctic wild
        cod that swims in the Barents Sea, which lies between Novaya Zemlya,
        Spitsbergen and Northern Norway. <br />
        <br />
        One of the cleanest waters in the world, far away from the plastic soup
        in the Pacific Ocean between Asia and South America. <br />
        <br />
        All our fish products come from sustainable fisheries and carry the
        Marine Stewardship Council (MSC) quality mark. <br /> <br />
        <div>
          <Image src={mscImage} /> <br /> <br />
        </div>
        <Link href='/'>
          <a className='underline'>
            Read more about our <em>'Clean'</em> method.
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Principles;

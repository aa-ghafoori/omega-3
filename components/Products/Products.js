import Product from './Product';
import blueOmega from '../../images/blue.png';

const Products = () => {
  return (
    <div className='responsive text-center paddingy'>
      <h2 className='text-secondary font-bold'>Products</h2>
      <h2 className='text-3xl font-bold text-primary my-10 md:text-5xl'>
        Our Products
      </h2>
      <div className='flex p-3 overflow-x-scroll lg:overflow-auto '>
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
      </div>
      <div className='flex p-3 overflow-x-scroll lg:overflow-auto '>
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
      </div>
      <div className='flex p-3 overflow-x-scroll lg:overflow-auto '>
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
        <Product
          image={blueOmega}
          title='Algae oil capsule DHA & EPA'
          description='Small capsules, easy to swallow'
          description2='Good for brain function and eyes'
        />
      </div>
    </div>
  );
};

export default Products;

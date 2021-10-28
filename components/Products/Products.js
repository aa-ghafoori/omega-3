import Product from './Product';
import blueOmega from '../../images/blue.png';

const Products = () => {
  return (
    <div className='text-center paddingy'>
      <h3 className='text-secondary font-bold'>Products</h3>
      <h1 className='text-3xl font-bold text-primary my-10'>Our Products</h1>
      <div className='flex p-3 overflow-scroll'>
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

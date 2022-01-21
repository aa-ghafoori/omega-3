import Product from './Product';
import product1 from '../../../images/product1.png';
import product2 from '../../../images/product2.png';
import product3 from '../../../images/product3.png';

const Products = () => {
  return (
    <div className='padding paddingy'>
      <div className='responsive flex flex-wrap justify-between items-stretch'>
        <Product
          productImage={product1}
          alt='Holland & Barrett Kids'
          productName='Holland & Barrett Kids'
          description='Multivitamine + Omega 3 (30 Gummies)'
          info1='Aangename smaak'
          info2='Geen nasmaak'
          info3='Bevat ook vitaminen en mineralen'
        />
        <Product
          productImage={product2}
          alt='Nutravita Omega 3'
          productName='Nutravita Omega 3'
          description='Visolie 2000mg met 
          660mg EPA & 440mg DHA'
          info1='Vriendelijk geprijsd'
          info2='Hoog gedoseerd'
          info3='Herkomst bekend'
        />
        <Product
          productImage={product3}
          alt='Holland & Barrett Omega 3'
          productName='Holland & Barrett Omega 3'
          description='Visolie 1000mg 
          300 Capsules'
          info1='Betrouwbare webwinkel 
          met persoonlijk advies'
          info2='Ook in fysieke winkel verkrijgbaar'
          info3='Regelmatig aantrekkelijke acties'
        />
      </div>
    </div>
  );
};

export default Products;

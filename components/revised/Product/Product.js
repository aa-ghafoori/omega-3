import Image from 'next/image';
import Button from '../../ui/Button';

const Product = ({
  productImage,
  alt,
  productName,
  description,
  info1,
  info2,
  info3,
}) => {
  return (
    <div className='flex flex-col padding paddingy max-w-md items-center lg:items-start'>
      <div className='relative w-20 h-36 lg:w-40 lg:h-72 self-center'>
        <Image
          src={productImage}
          layout='fill'
          alt={alt}
          objectFit='contain'
          className=' '
        />
      </div>
      <div className='mt-10 lg:mt-20 mb-10 self-center flex-grow lg:text-3xl text-center lg:text-left '>
        <h3 className='mb-4 text-[#416444] font-bold'>{productName}</h3>
        <p className='mb-4 font-light'>{description}</p>
        <p className=' font-light'>-&emsp;{info1}</p>
        <p className=' font-light'>-&emsp;{info2}</p>
        <p className='font-light'>-&emsp;{info3}</p>
      </div>
      <div className='w-[fit-content]'>
        <Button href='/' bgColor='bg-primary' textColor='text-white'>
          Bekijk Coupon
        </Button>
      </div>
    </div>
  );
};

export default Product;

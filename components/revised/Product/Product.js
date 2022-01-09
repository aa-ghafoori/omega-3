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
    <div className='flex flex-col max-w-[400px] rounded-2xlitems-center lg:items-start'>
      <div className='relative w-20 h-36 lg:w-40 lg:h-72 self-center mb-10 lg:mb-20'>
        <Image
          src={productImage}
          layout='fill'
          alt={alt}
          objectFit='contain'
          className=''
        />
      </div>
      <div className='bg-[#f4f1f1] px-6 py-10 rounded-2xl'>
        <div className='mb-10 self-center flex-grow text-xl text-center lg:text-left '>
          <h3 className='mb-2 text-[#416444] font-bold lg:text-[27px]'>
            {productName}
          </h3>
          <p className='mb-4 font-light'>{description}</p>
          <div className=''>
            <div className='flex'>
              <p className='text-[#416444]'>●&emsp;</p>
              <p className='flex-grow font-light'>{info1}</p>
            </div>
            <div className='flex'>
              <p className='text-[#416444]'>●&emsp;</p>
              <p className='flex-grow font-light'>{info2}</p>
            </div>
            <div className='flex'>
              <p className='text-[#416444]'>●&emsp;</p>
              <p className='flex-grow font-light'>{info3}</p>
            </div>
          </div>
        </div>
        <div className='w-[fit-content]'>
          <Button href='/' bgColor='bg-primary' textColor='text-white'>
            Bekijk onze deals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;

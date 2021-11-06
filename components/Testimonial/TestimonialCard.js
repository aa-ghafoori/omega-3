import Image from 'next/image';

const TestimonialCard = ({ image, name, text }) => {
  return (
    <div className='p-2'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg p-8 m-auto bg-white'>
        <div className='flex items-center mb-8'>
          <div className=' h-16 w-16 mr-4'>
            <Image src={image} className='rounded-full' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-tertiary'>{name}</h3>
            <p className='text-[#AAAAAA] text-sm mt-1'>Customer</p>
          </div>
        </div>
        <p className='text-left text-[#AAAAAA] '>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

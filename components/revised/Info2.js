import Button from '../ui/Button';
import Image from 'next/image';
import nutritionImage from '../../images/nutrition.png';

const Info2 = () => {
  return (
    <div className='bg-[#e7e6e4]'>
      <div className='responsive lg:flex items-center text-center lg:text-left'>
        <div className='max-w-3xl padding paddingy'>
          <h2 className='text-[40px] font-bold mb-10 text-primary'>
            Onze vergelijker
          </h2>
          <p className='text-xl'>
            Wat is nu het beste visolie supplement? In dit artikel vergelijken
            we de vijf meest verkochte Omega-3 supplementen. Wij kijken hierbij
            naar verschillende factoren. Denk dan aan de prijs van het
            supplement, de hoeveelheid werkzame stof, de winkel waar deze
            verkocht wordt en het gebruiksgemak.
          </p>
          <div className='my-20'>
            <Button href='/' bgColor='bg-primary' textColor='text-white'>
              Lees meer
            </Button>
          </div>
        </div>
        <div className='lg:ml-20'>
          <Image
            src={nutritionImage}
            objectFit='contain'
            alt='Onze vergelijker'
          />
        </div>
      </div>
    </div>
  );
};

export default Info2;

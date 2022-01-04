import Image from 'next/image';
import heroImage from '../../images/Layer 3.png';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className='relative tracking-wider'>
      <div className='absolute h-full w-full z-[-10]'>
        <Image src={heroImage} objectFit='cover' layout='fill' />
      </div>
      <div className='responsive'>
        <div className='padding pt-28 lg:pt-60 pb-40 md:max-w-xl lg:max-w-2xl'>
          <h1 className='text-[#766c54] text-4xl font-bold mb-4'>
            Wat is Omega-3 Visolie
          </h1>
          <p className='text-xl mb-4'>
            Visolie is een van de meest bekende supplementen op de markt en
            geschikt voor alle leeftijden. De stoffen in visolie worden ook wel
            eens Omega-3 vetzuren genoemd. De naam Omega-3 verwijst naar de vorm
            van de moleculen waaruit de vetzuren zijn opgebouwd.
          </p>
          <p className='text-xl mb-4'>
            Omega-3 is een groep vetzuren die gevonden wordt in vette vis.
            Omega-3 is goed voor het hart en de vaten, de hersenen, de ogen en
            de botten.
          </p>
          <p className='text-xs mb-4'>
            Let op: Er veel supplementen op de markt die nauwelijks visolie
            bevatten. Ook zijn er supplementen die visolie bevatten die vervuild
            is, of gewonnen wordt zonder respect voor de natuur. Uiteraard wil
            je een betrouwbaar supplement dat geen verontreiniging bevat en op
            een duurzame en eerlijke manier gewonnen is.
          </p>
          <Button bgColor='bg-primary' textColor='text-[#ebeae8]' href='/'>
            Ontdek de 5 beste visolie supplementen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Button from '../ui/Button';

const Info = () => {
  return (
    <div className='text-white bg-primary paddingy tracking-widest'>
      <div className='responsive text-center flex flex-col items-center'>
        <h2 className='text-4xl lg:text-[53px] font-bold mb-10'>
          Waar is visolie goed voor?
        </h2>
        <p className='text-xl mb-10 max-w-7xl'>
          Uit onderzoek is gebleken dat de inname van minimaal 250 mg en
          maximaal 3000 mg Omega-3 per dag verschillende gunstige effecten heeft
          op de gezondheid. Vooral EPA en DHA kunnen een positief effect hebben
          op het lichaam. Zo zou visolie helpen bij bij onder andere:
        </p>
        <p className='text-xl mb-10 max-w-2xl'>
          Reuma / Hart- en vaatstelsel / Hersenfunctie Gezichtsvermogen /
          Angsten en depressie / Groei
        </p>
        <Button href='/' bgColor='bg-white' textColor='text-primary'>
          Lees meer
        </Button>
      </div>
    </div>
  );
};

export default Info;

const Email = () => {
  return (
    <div className='bg-primary padding paddingy'>
      <div className='responsive lg:flex justify-between items-center'>
        <div className='text-white'>
          <h3 className='text-3xl lg:text-4xl mb-4'>Schrijf je in voor onze nieuwsbrief</h3>
          <p className='text-xl lg:text-2xl'>
            We houden je op de hoogte van nieuwe producten.
          </p>
        </div>
        <div className='uppercase flex justify-between items-center bg-white rounded-3xl p-4 mt-8 lg:mt-0'>
          <p className='text-[#a69876]  lg:text-3xl  lg:mx-16'>E-mailadres *</p>
          <div className=' lg:text-3xl text-white bg-[#a69876] px-8 py-6 rounded-3xl ml-10 lg:ml-20'>VERSTUREN</div>
        </div>
      </div>
    </div>
  );
};

export default Email;

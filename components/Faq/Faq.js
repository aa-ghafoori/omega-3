import Question from './Question';

const Faq = ({ data }) => {
  return (
    <div className='responsive padding paddingy text-center'>
      <h3 className='text-secondary mb-10 font-bold '>FAQ</h3>
      <h1 className='text-3xl font-bold text-primary md:text-5xl'>
        Frequently Asked Questions
      </h1>
      <p className='my-8 text-[#AAAAAA] max-w-xl m-auto'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae culpa
        consequuntur dicta exercitationem praesentium nemo non, nam sint maiores
        laborum!
      </p>
      <div className='md:grid grid-cols-2 gap-x-10'>
        {data.map(question => {
          return (
            <Question key={question.id} question={question.question} answer={question.answer} />
          );
        })}
      </div>
    </div>
  );
};

export default Faq;

import Question from './Question';

const Faq = ({ data }) => {
  let count = 0;
  data.length % 2 === 0
    ? (count = data.length / 2)
    : (count = (data.length + 1) / 2);
  const row1 = data.slice(0, count);
  const row2 = data.slice(count);

  return (
    <div className='responsive padding paddingy text-center'>
      <h2 className='text-secondary mb-10 font-bold '>FAQ</h2>
      <h2 className='text-3xl font-bold text-primary md:text-5xl'>
        Frequently Asked Questions
      </h2>
      <p className='my-8 text-[#AAAAAA] max-w-xl m-auto'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae culpa
        consequuntur dicta exercitationem praesentium nemo non, nam sint maiores
        laborum!
      </p>
      <div className='md:grid grid-cols-2 gap-x-10 '>
        <div>
          {row1.map(question => {
            return (
              <Question
                key={question.id}
                question={question.question}
                answer={question.answer}
              />
            );
          })}
        </div>
        <div>
          {row2.map(question => {
            return (
              <Question
                key={question.id}
                question={question.question}
                answer={question.answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;

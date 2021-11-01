import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Question = ({ question, answer }) => {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div onClick={toggleClick} className=''>
      <div
        className={`border-gray-300 border-[1px] flex justify-between items-center p-4 font-bold cursor-pointer ${
          clicked ? 'bg-primary text-white' : 'text-tertiary'
        }`}
      >
        <p>{question}</p>
        <FontAwesomeIcon
          icon={clicked ? faTimes : faPlus}
          className={`${clicked && 'text-secondary'}`}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: answer }}
        className={`${
          !clicked ? 'max-h-0 ' : 'max-h-screen'
        } text-[#AAAAAA] m-4 overflow-hidden transition-all duration-500 ease-in-out text-left markdown`}
      ></div>
    </div>
  );
};

export default Question;

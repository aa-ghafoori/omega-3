import Link from 'next/link';

const Button = ({ href, bgColor, textColor, children }) => {
  return (
    <Link href={href}>
      <a
        className={`${bgColor} ${textColor} inline-block px-7 py-3 lg:px-14 lg:py-7 transition rounded-3xl  focus:outline-none tracking-widest lg:text-xl  w-[fit-content] text-center`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;

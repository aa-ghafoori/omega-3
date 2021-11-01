import Link from 'next/link';

const Button = ({ href, bgColor, textColor, children }) => {
  return (
    <Link href={href}>
      <a
        className={`${bgColor} ${textColor} px-10 py-4 transition rounded hover:bg-green-700 focus:outline-none `}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;

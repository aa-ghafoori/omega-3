import Link from 'next/link';

const Button = ({ href, bgColor, textColor, children }) => {
  return (
    <Link href={href}>
      <a
        className={`${bgColor} ${textColor} inline-block px-8 py-3 transition rounded hover:bg-[#224919] focus:outline-none `}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;

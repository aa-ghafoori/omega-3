import Link from 'next/link';

const Button = ({ href, bgColor, textColor, children }) => {
  return (
    <Link href={href}>
      <a>
        <div
          className={`${bgColor} ${textColor} px-10 py-4 transition bg-secondary rounded shadow ripple hover:shadow-lg focus:outline-none w-[fit-content]`}
        >
          {children}
        </div>
      </a>
    </Link>
  );
};

export default Button;

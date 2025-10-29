import Link from 'next/link';

export const PrimaryButton = ({ children, href, onClick, className = '' }) => {
  const baseClasses = "relative px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary-pink/30 hover:scale-105 inline-block";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
};

export const SecondaryButton = ({ children, href, onClick, className = '' }) => {
  const baseClasses = "relative px-8 py-4 border-2 border-primary-pink text-primary-pink font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:text-white hover:shadow-lg inline-block";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-pink to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
};

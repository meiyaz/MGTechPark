'use client';
import Link from 'next/link';

const Button = ({ href, onClick, children, className, type }) => {
  const commonClasses = "px-6 py-3 font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const primaryClasses = "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary";
  const secondaryClasses = "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary";

  const classes = `${commonClasses} ${type === 'secondary' ? secondaryClasses : primaryClasses} ${className}`;

  if (href) {
    return <Link href={href}><span className={classes}>{children}</span></Link>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
};

export default Button;

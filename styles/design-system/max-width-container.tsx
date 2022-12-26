import React from 'react';

interface IProps {
  className?: string;
  children?: React.ReactNode;
}
export const MaxWidthContainer: React.FC<IProps> = ({ className, children }) => {
  return <div className={`w-full md:w-[800px] ${className}`}>{children}</div>;
};

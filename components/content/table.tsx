import React from 'react';

interface IProps {
  className?: string;
  children: React.ReactNode;
}
export const ReportTable: React.FC<IProps> = ({ className, children }) => {
  return <table className={`table w-full ${className}`}>{children}</table>;
};
export const ReportTableHead: React.FC<IProps> = ({ className, children }) => {
  return <thead className={`bg-gray-100 [&>tr>th]:p-4 [&>tr>th]:text-left ${className}`}>{children}</thead>;
};
export const ReportTableBody: React.FC<IProps> = ({ className, children }) => {
  const hover = '[&>tr:hover]:underline';
  const padding = '[&>tr>td]:p-2';
  const border = '[&>tr]:border [&>tr]:border-white';
  return (
    <thead
      className={`${hover} ${padding} ${border} [&>tr:nth-child(even)]:bg-gray-100 [&>tr>td]:text-left ${className}`}>
      {children}
    </thead>
  );
};

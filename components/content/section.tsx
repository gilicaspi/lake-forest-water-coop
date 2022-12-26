import { SectionContent } from 'components/content/section-copy';
import React from 'react';

interface IProps extends SectionContent {
  className?: string;
}
export const Section: React.FC<IProps> = ({ className, title, content, list }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {title && <span className='font-serif font-semibold text-gray-600'>{title}</span>}
      {content && (
        <div className='flex flex-col gap-2'>
          {content instanceof Array ? (
            content.map((c, i) => (
              <span key={i} className='font-sans text-base font-normal'>
                {c}
              </span>
            ))
          ) : (
            <span className='font-sans text-base font-normal'>{content}</span>
          )}
        </div>
      )}
      {list && (
        <ul className='list-[circle] pl-6'>
          {list.map((listElement, indx) => (
            <li key={indx} className='mb-1'>
              {listElement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

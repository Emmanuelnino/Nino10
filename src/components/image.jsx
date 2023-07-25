import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <div className='flex justify-center items-center'>
      <img className='max-w-full' src={src} alt={alt} />
    </div>
  );
};

export default Image;

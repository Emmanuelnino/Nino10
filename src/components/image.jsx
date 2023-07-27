import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <div className='flex justify-center items-center'>
      <img className='w-72 h-72 object-cover obect-center' src={src} alt={alt} />
    </div>
  );
};

export default Image;

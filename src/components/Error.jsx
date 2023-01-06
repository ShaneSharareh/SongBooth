import React from 'react';

const Error = ({errorText}) => (
  <div className='w-full flex justify-center items-center'>
    <h1 className="font-bold text-2xl text-white mt-2">{errorText || 'Something went wrong. Please try again'}
    </h1>
    </div>
);

export default Error;

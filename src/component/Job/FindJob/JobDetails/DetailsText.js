import React from 'react';

const DetailsText = ({text,data}) => {
    return <>
    <p className='text-xl'>{text}:</p>
    <span>{data}</span>
  </>
};

export default DetailsText;

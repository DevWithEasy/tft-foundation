import React from 'react';

const DetailsText = ({text,data}) => {
    return <>
    <p className='font-bold'>{text}:</p>
    <span>{data}</span>
  </>
};

export default DetailsText;

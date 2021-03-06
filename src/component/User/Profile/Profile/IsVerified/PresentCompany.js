import React from 'react';

const PresentCompany = ({presentCompany}) => {
    return (
        <div className='pb-2'>
            <span className="italic underline">Now i am working with:</span>
              <p className="text-xl font-bold">{presentCompany.name}</p>
              <p className="">{presentCompany.designation}</p>
              <p className="">{presentCompany.location}</p>
              <p className="">{presentCompany.from} to {presentCompany.to ? <span>{presentCompany.from}</span>:'continue'}</p>
        </div>
    );
};

export default PresentCompany;
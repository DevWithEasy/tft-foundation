import React from 'react';

const IsPreviousJob = ({value,job}) => {
    return (
        <div className=''>
            <p className='text-xl font-bold space-x-1'>
                <span>{value}.</span>
                <span>{job.name}</span>
            </p>
            <div className='pl-2'>
            <p className=''>{job.location}</p>
            <p className=''>{job.designation}</p>
            <p className=''>{job.from} to {job.to} ({job.year} years)</p>
            </div>
        </div>
    );
};

export default IsPreviousJob;
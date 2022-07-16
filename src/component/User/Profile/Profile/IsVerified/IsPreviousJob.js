import React from 'react';

const IsPreviousJob = ({job}) => {
    return (
        <div className=''>
            <p className='text-xl font-bold'>{job.name}</p>
            <p className=''>{job.location}</p>
            <p className=''>{job.designation}</p>
            <p className=''>{job.from} to {job.to} ({job.year} years)</p>
        </div>
    );
};

export default IsPreviousJob;
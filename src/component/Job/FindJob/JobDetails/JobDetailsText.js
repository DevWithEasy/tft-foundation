import React from 'react';
import { Link } from 'react-router-dom';
import DetailsText from './DetailsText';

const JobDetailsText = ({jobDetails}) => {
    return (
        <div className='p-2 bg-white rounded-lg space-y-2'>
                <p className='text-sm flex space-x-3 text-gray-400'>Job posted by:  
                    <Link to={`/profile/${jobDetails.uid}`} className='text-blue-500 font-bold'>{jobDetails.author}</Link>
                    <span>at published on {jobDetails.date}</span>
                </p>
                <p className='font-bold text-xl text-green-600'>{jobDetails.position}</p>
                <p className='font-bold'>{jobDetails.company}</p>
                <DetailsText text='Vacancy' data={jobDetails.vacancy}/>
                <DetailsText text='Location' data={jobDetails.jobLocation}/>
                <DetailsText text='Experience Year' data={jobDetails.totalExperienceYear}/>
                <DetailsText text='Salary' data={jobDetails.salary}/>
                <DetailsText text='Job Status' data={jobDetails.employeStatus}/>
                
                {
                    jobDetails.responsibility && <DetailsText text='Job responsibilities' data={jobDetails.responsibility}/>
                }
                {
                    jobDetails.experienceRequirment && <DetailsText text='Experience requirments' data={jobDetails.experienceRequirment}/>
                }
                {
                    jobDetails.educationRequirment && <DetailsText text='Education requirments' data={jobDetails.educationRequirment}/>
                }
                {
                    jobDetails.description && <DetailsText text='Job description' data={jobDetails.description}/>
                }
                
                <DetailsText text='Apply' data={jobDetails.howToApply}/>
                <DetailsText text='Deadline' data={jobDetails.deadLine}/>
              </div>
    );
};

export default JobDetailsText;
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
import { MdLocationOn, MdPermContactCalendar } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobLink = ({post}) => {
    return (
        <Link to={`/jobDetails/${post.id}`}
            className="block bg-gray-50 m-2 px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
        >
            <p className='text-blue-500 text-xl font-semibold'>{post.position}</p>
            <p className='font-semibold'>{post.company}</p>
            <p className='joblink-text'>
                <MdLocationOn/> 
                <span>{post.jobLocation}</span>
            </p>
            <p className='joblink-text'>
                <FaGraduationCap/>
                <span>{post.educationRequirment}</span>
            </p>
            <div className='flex justify-between'>
                <p className='joblink-text'>
                    <MdPermContactCalendar/>
                    <span>{post.totalExperienceYear} years</span>
                </p>
                <p className='joblink-text'>
                    <GoCalendar/>
                    <span>Deadline: <span className='font-bold'>{post.deadLine}</span></span>
                </p>
            </div>
        </Link>
    );
};

export default JobLink;
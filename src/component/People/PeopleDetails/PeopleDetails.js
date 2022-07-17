import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PeopleDetails = ({user}) => {
    const {id} = useSelector(state=>state.user)
    console.log(user)
    return (<Link to={`/profile/${user.id}`} className='w-1/2 flex flex-col justify-center items-center p-2 border rounded-lg'>
        <img
                src={user.profileImg}
                alt=""
                className="h-24 w-24 rounded-full border border-blue-500 shadow-lg"
        />
        <p className='text-xl font-bold mt-4'>{user.name}</p>
        
        {
            user.presentCompany.designation ?
             <p className='text-gray-400'>{user.presentCompany.designation}</p>
             :
             <p>{user.collage.group}</p>
        }
        {
            user.presentCompany.name ?
             <p className='text-gray-400'>{user.presentCompany.name}</p>
             :
             <p>{user.collage.name}</p>
        }
        {
            user.connction ? <p className='text-gray-400 text-xs'>{user.connction.length} mutual connection </p>  :<p className='text-red-500 text-xs'>no mutual connection</p> 
        }
        {
            id && <button className='border border-blue-500 py-0.5 px-4 mt-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white'>Connect</button>
        }
        
    </Link>);
};

export default PeopleDetails;
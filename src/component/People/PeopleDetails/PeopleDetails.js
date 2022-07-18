import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { addConnection } from '../../../FunctionManager/ArrayUnion';

const PeopleDetails = ({user}) => {
    const {uid} = useSelector(state=>state.user)
    return (<div  className='w-full flex flex-col justify-center items-center p-2 border rounded-lg'>
        <img
                src={user.profileImg}
                alt=""
                className="h-24 w-24 rounded-full border border-blue-500 shadow-lg"
        />
        

        {
            !user.name ? <p>--</p>:<Link to={`/profile/${user.id}`} className='text-xl text-blue-500 font-bold mt-4'>{user.name}</Link>
        }
        {
            user.presentCompany.designation ?
             <p className='text-gray-500'>{user.presentCompany.designation}</p>
             :
             <p>{user.collage.group}</p>
        }
        {
            user.presentCompany.name ?
             <p className='text-gray-500'>{user.presentCompany.name}</p>
             :
             <p>{user.collage.name}</p>
        }
        {
            !user.presentCompany.designation & !user.collage.group ? <div><p>--</p><p>--</p></div>:''
        }
        {
            user.connction ? <p className='text-gray-500 text-xs'>{user.connction.length} mutual connection </p>  :<p className='text-red-500 text-xs'>no mutual connection</p> 
        }
        {
            uid && <button className='border border-blue-500 py-0.5 px-6 mt-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white' onClick={()=>addConnection(uid,user.id,swal)}>Connect</button>
        }
        
    </div>);
};

export default PeopleDetails;
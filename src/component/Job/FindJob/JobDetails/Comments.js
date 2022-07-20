import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Comments = ({comment,removeComment,uid,id}) => {
    const navigate = useNavigate()
    return (
        <div className='bg-blue-50 border px-2 py-1 rounded-lg space-y-1'>
            <p className='flex justify-between items-center'>
                <p className='text-sm text-gray-600 space-x-3'>
                    <Link to={`/profile/${id}`} className='text-blue-500'>{comment.name}</Link>
                    <span className='text-[10px] text-gray-500'>{comment.time}</span>
                </p>
                {
                    uid===comment.id ? <BsTrash onClick={()=>removeComment(id,comment,swal,navigate)}/>:''
                }
            </p>
            <p>{comment.text}</p>
        </div>
    );
};

export default Comments;
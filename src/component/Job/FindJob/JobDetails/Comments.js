import React from 'react';
import { BsTrash } from 'react-icons/bs';
import swal from 'sweetalert';

const Comments = ({comment,removeComment,uid,id}) => {
    return (
        <div className='bg-blue-50 border px-2 py-1 rounded-lg'>
            <p className='flex justify-between items-center'>
                <p className='text-sm text-gray-600 space-x-3'>
                    <span>{comment.name}</span>
                    <span className='text-[10px] text-gray-500'>{comment.time}</span>
                </p>
                {
                    uid===comment.id ? <BsTrash onClick={()=>removeComment(id,comment,swal)}/>:''
                }
            </p>
            <p>{comment.text}</p>
        </div>
    );
};

export default Comments;
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import swal from 'sweetalert';
import { removePreviousJob } from '../../../../../FirebaseManager/firebaseStore';

const IsPreviousJob = ({value,job,id}) => {

    return (
        <div className=''>
            <p className='flex justify-between items-center text-xl font-bold space-x-1'>
                <span>{value}. {job.name}</span>
                {
                    id===job.id ? <span title='Delete this expre..' className='border text-red-500 rounded-full p-1'><BsTrash size={15} onClick={()=>removePreviousJob(id,job,swal)}/></span>:''
                }
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
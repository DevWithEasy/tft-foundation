import React, { useState } from 'react';
import swal from 'sweetalert';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import { addResponsibility } from '../../../../FunctionManager/ArrayUnion';

const Resposibility = ({user}) => {
    const [res,setRes] = useState('')
    const [resState,setResState] = useState(false)
    console.log(user.responsibility)
    return (
        <div>
            <h3
        className="flex justify-between items-center  font-bold bg-blue-500 p-2 text-white  hover:bg-blue-600 transition-all duaration-500 cursor-pointer rounded"
        onClick={() => setResState(!resState)}
      >
        <div className="flex items-center space-x-2">
          <MdOutlineEditNote size={25} />
          <span>Job Responsibility</span>
        </div>
        {resState ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </h3>
            <form className={resState?' py-2':'hidden'} onSubmit={(e)=>addResponsibility(e,user.id,res,swal)}>
                <textarea type="text" name="response" className='input' rows='2' placeholder='Enter single sentence and submit' onChange={(e)=>setRes(e.target.value)}/>
                <input type="submit" value="Add" className='bg-blue-500 text-white rounded-lg px-6 py-1 cursor-pointer' />
            </form>
        </div>
    );
};

export default Resposibility;
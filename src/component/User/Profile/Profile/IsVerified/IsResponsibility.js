import React from 'react';
import swal from 'sweetalert'
import {BiXCircle} from 'react-icons/bi';
import { removeResponsibility } from '../../../../../FunctionManager/ArrayUnion';

const IsResponsibility = ({id,response}) => {
    return (
        <div className='px-2'>
             <h3 className="bg-gray-200 px-2 p-1 my-1 font-bold text-2xl">Responsibility :</h3>
             {response.map((res,index)=>
             <div key={index}
                  className='flex justify-between'
             >
                <p>
                    <span>{index+1} . </span>
                    <span>{res}</span>
                </p>
                <BiXCircle className='icon mr-4' onClick={()=>removeResponsibility(id,res,swal)}/>
             </div>)}
        </div>
    );
};

export default IsResponsibility;

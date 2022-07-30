import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { addComment, getDetails, removeComment } from '../../../../FirebaseManager/firebaseStore';
import Loading from '../../../Loading/Loading';
import CommentForm from './CommentForm';
import Comments from './Comments';
import JobDetailsText from './JobDetailsText';

const JobDetails = () => {
    const {id} =useParams()
    const [jobDetails,setJobDetails] = useState({})
    useEffect(()=>{
      getDetails('jobcircular',id,setJobDetails)
    })
    //-----------------comment-----------------
    const {uid,displayName} = useSelector(state=>state.user)
    const [comment,setComment]=useState({
      id:uid,
      name:displayName,
      time:new Date().toDateString(),
      text:''
    })
    const handleChange = (e) => {
      setComment({
        ...comment,
        [e.target.name]: e.target.value
      });
    };
    return (
        <>
            {jobDetails.author?
            <div className='bg-blue-100 p-2'>
                <JobDetailsText jobDetails={jobDetails}/>
                <p className='font-bold text-xl p-2'>Comments</p>
                <div className='p-2 bg-white rounded-lg space-y-2'>
                  <CommentForm 
                      handleChange={handleChange}
                      addComment={addComment}
                      id={id}
                      comment={comment}
                  />
                  
                  {
                    jobDetails.comments.map((comment,index)=>
                      <Comments
                          key={index}
                          comment={comment}
                          removeComment={removeComment}
                          uid={uid}
                          id={id}
                      />
                    )
                  }
              </div>
            </div>
            
            :
            <Loading text='Loading'/>
            }
            
        </>
    );
};

export default JobDetails;
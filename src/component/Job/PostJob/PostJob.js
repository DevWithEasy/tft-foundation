import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../../FirebaseManager/firebaseStore";

const PostJob = () => {
  const {displayName,uid} = useSelector(state=>state.user)
  const navigate = useNavigate()
  const [post,setPost] = useState({
    uid:uid,
    author:displayName,
    createdAt:serverTimestamp(),
    date:new Date().toDateString(),
    company:'',
    jobLocation:'',
    position:'',
    salary:'',
    vacancy:'',
    deadLine:'',
    responsibility:'',
    totalExperienceYear:'',
    experienceRequirment:'',
    employeStatus:'',
    educationRequirment:'',
    description:'',
    howToApply:'',
    comments:[]
  })
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };
  const postJob=(e)=>{
    e.preventDefault()
    addDoc(collection(db,"jobcircular"),post)
    .then(()=>{
      e.target.reset()
      toast("Post successfully submited !");
      setTimeout(()=>{
        navigate('/findjob')
      },2000)
    })
    .catch(()=>{
      alert('add failed')
    })
  }
  return <div className="bg-blue-100 p-2">
    <div className="bg-white px-2 pb-4 rounded-lg">
      <p className="px-2 pb-2">
      <span className="font-bold">Creat a Job post:</span><br />
      <span className="text-xs text-red-500">Please fill the all blank with correct information.</span>
      </p>
    <form className="space-y-2" onSubmit={postJob}>
    <input
          type="text"
          name="company"
          className="input"
          placeholder="enter company name"
          onChange={handleChange}
          required
    />
    <input
          type="text"
          name="jobLocation"
          className="input"
          placeholder="enter job location"
          onChange={handleChange}
          required
        />
    <input
          type="text"
          name="position"
          className="input"
          placeholder="enter designation"
          onChange={handleChange}
          required
        />
    <input
          type="text"
          name="salary"
          className="input"
          placeholder="enter salary amount"
          onChange={handleChange}
        />
    <input
          type="text"
          name="vacancy"
          className="input"
          placeholder="enter vacancy amount"
          onChange={handleChange}
          required
        />
    <select name="employeStatus"
          className="input"
          onChange={handleChange}>
          required
          <option value="">select job type</option>
          <option value="Full Time">Full Time</option>
          <option value="Half Time">Half Time</option>
          <option value="Part Time">Part Time</option>
    </select>
    <input
          type="text"
          name="totalExperienceYear"
          className="input"
          placeholder="enter experience year. like( 0 to 3)"
          onChange={handleChange}
          required
        />
    <textarea name="experienceRequirment" className="input" rows='3' placeholder="please write experience area requirment" onChange={handleChange}></textarea>
    <textarea name="educationRequirment" className="input" rows='3' placeholder="please write education requirment" onChange={handleChange}></textarea>
    <textarea name="responsibility" className="input" rows='6' placeholder="please write job responsibilities here" onChange={handleChange}></textarea>
    <textarea name="description" className="input" rows='6' placeholder="please write about description" onChange={handleChange}></textarea>
    <textarea name="howToApply" className="input" rows='3' placeholder="please write how cant apply this job. please provide email , address or phone number" onChange={handleChange} required></textarea>
    <label htmlFor="deadLine">Deadline:</label>
    <input
          type="date"
          name="deadLine"
          className="input"
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />
    <input type="submit" value="Submit" className="mt-4 px-10 py-2 bg-blue-500 text-white rounded cursor-pointer"/>
    </form>
    <ToastContainer autoClose={2000}/>
    </div>
  </div>;
};
export default PostJob;

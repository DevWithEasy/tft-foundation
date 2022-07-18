import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { FiMail } from 'react-icons/fi';
import { MdPassword } from 'react-icons/md';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { db } from './../../../../FirebaseManager/firebaseStore';
import AccountInfo from "./AccountInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import PersonalInfo from "./PersonalInfo";
import Resposibility from './Resposibility';
const EditProfile = () => {
  const {id} =useParams()
  const [user, setUser] = useState({
    id:'',
    name: "",
    email: '',
    dob: "",
    fName: "",
    mName: "",
    status:"",
    gender: "",
    marital: "",
    contactNumber: "",
    profileImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    fbLink: "",
    cvLink:"",
    connection:[],
    memberStatus:'',
    presentAddress: {
      district: "",
      upzilla: "",
      area: ""
    },
    permanentAddress: {
      district: "",
      upzilla: "",
      postOffice: "",
      postCode: "",
      area: ""
    },
    presentCompany: {
      name: "",
      designation:"",
      location: "",
      from: "",
      to: ""
    },
    previousJob: [],
    responsibility:[],
    ssc: {
      name: "",
      season: "",
      passingYear: "",
      group: "",
      result: ""
    },
    collage: {
      name: "",
      season: "",
      passingYear: "",
      group: "",
      result: ""
    },
    bsc: {
      name: "",
      season: "",
      passingYear: "",
      group: "",
      result: ""
    },
    msc: {
      name: "",
      season: "",
      passingYear: "",
      group: "",
      result: ""
    }
    });
  const [previousJob,setPreviousJob]= useState({
    id:id,
    name:'',
    designation:'',
    location:'',
    from:'',
    to:'',
    year:''
  })
  useEffect(()=>{
    getDoc(doc(db,'users',id))
    .then(res=>{
      setUser(res.data())
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handlePresentAddressInput = (e) => {
    setUser({
      ...user,
      presentAddress: {
        ...user.presentAddress,
        [e.target.name]: e.target.value
      }
    });
  };
  const handlePermanentAddressInput = (e) => {
    setUser({
      ...user,
      permanentAddress: {
        ...user.permanentAddress,
        [e.target.name]: e.target.value
      }
    });
  };
  const handlePresentCompanyInput = (e) => {
    setUser({
      ...user,
      presentCompany: {
        ...user.presentCompany,
        [e.target.name]: e.target.value
      }
    });
  };
  const handlePreviousJobInput=(e)=>{
    setPreviousJob({
      ...previousJob,[e.target.name]:e.target.value
    })
  }
  const handleSSCInput = (e) => {
    setUser({
      ...user,
      ssc: {
        ...user.ssc,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleCollageInput = (e) => {
    setUser({
      ...user,
      collage: {
        ...user.collage,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleBSCInput = (e) => {
    setUser({
      ...user,
      bsc: {
        ...user.bsc,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleMSCInput = (e) => {
    setUser({
      ...user,
      msc: {
        ...user.msc,
        [e.target.name]: e.target.value
      }
    });
  };
  return (
    <div className="m-1 mt-5 space-y-2">
      <AccountInfo user={user} handleChange={handleChange} />
      <ExperienceInfo
        user={user}
        handlePresentCompanyInput={handlePresentCompanyInput}
        previousJob={previousJob}
        handlePreviousJobInput = {handlePreviousJobInput}
      />
      
      <Resposibility user={user}/>
      
      <EducationInfo
        user={user}
        handleInput={{
          handleSSCInput,
          handleCollageInput,
          handleBSCInput,
          handleMSCInput
        }}
      />
      <PersonalInfo
        user={user}
        handleInput={{
          handleChange,
          handlePresentAddressInput,
          handlePermanentAddressInput
        }}
      />
      <Link to={`/changePassword/${id}`} className="flex items-center space-x-2  font-bold bg-blue-500 p-2 text-white  hover:bg-blue-600 transition-all duaration-500 cursor-pointer rounded">
         <FiMail size={25}/> <span>Change Password</span>
      </Link>
      <Link to={`/changeEmail/${id}`} className="flex items-center space-x-2  font-bold bg-blue-500 p-2 text-white  hover:bg-blue-600 transition-all duaration-500 cursor-pointer rounded">
          <MdPassword size={25}/>  <span>Change Email</span>
      </Link>
    </div>
  );
};
export default EditProfile;

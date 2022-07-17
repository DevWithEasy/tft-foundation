import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router";
import { getDetails } from './../../../FirebaseManager/firebaseStore';
import IsNotVerified from "./Profile/IsNotVerified/IsNotVerified";
import IsVerified from "./Profile/IsVerified/IsVerified";

const Profile = () => {
  const [profile,setProfile] = useState({
    id:'',
    name: "",
    email: '',
    dob: "",
    fName: "",
    mName: "",
    status:"",
    gender: "",
    marital: "",
    bloodGroup:'',
    nidNo:'',
    nationality:'',
    contactNumber: "",
    profileImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    fbLink: "",
    cvLink:"",
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
    })
  const {id}= useParams()
  const {user} = useSelector(state=>state)
  useEffect(()=>{
     getDetails('users',id,setProfile)
  },[])
  return (
    <div className="">
      {
        !user.emailVerified ?
          <IsNotVerified/>
        :
          <IsVerified profile={profile}/>
      }
    </div>
  );
};
export default Profile;

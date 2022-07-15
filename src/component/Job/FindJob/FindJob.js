import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../FirebaseManager/firebaseStore";
import JobLink from "./JobDetails/JobLink";

const FindJob = () => {
  const [posts,setPosts]=useState([])
  useEffect(() => {
    const postsCollection=collection(db,'jobcircular')
    const orderQueryCollection = query(postsCollection,orderBy('createdAt','desc'))
    onSnapshot(orderQueryCollection, (res) => {
      setPosts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  console.log(posts)
  return <div className="">
    {
      posts.length>0 ?
      posts.map((post,index)=><JobLink key={index} post={post}/>)
      :
      <p>Loading</p> 
    }
  </div>;
};
export default FindJob;

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../FirebaseManager/firebaseStore";
import Loading from "../../Loading/Loading";
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
  
  return <>
    {
      posts.length>0 ?
      posts.map((post,index)=><JobLink key={index} post={post}/>)
      :
      <Loading/>
    }
  </>;
};
export default FindJob;

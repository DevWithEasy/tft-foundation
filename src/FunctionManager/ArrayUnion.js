import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseManager/firebaseStore";

export const addResponsibility=async(e,id,comment,swal)=>{
    e.preventDefault()
    const commentRef= doc(db,'jobcircular',id)
    await updateDoc(commentRef,{
      responsibility:arrayUnion(comment)
    });
    e.target.reset()
    swal("Successfull", "Your Responsibility added!", "success");
  }
  export const addConnection=async(e,id,comment,swal)=>{
    e.preventDefault()
    const commentRef= doc(db,'jobcircular',id)
    await updateDoc(commentRef,{
      connection:arrayUnion(comment)
    });
    e.target.reset()
    swal("Successfull", "Your connection added!", "success");
  }
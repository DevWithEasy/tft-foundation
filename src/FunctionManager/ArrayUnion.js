import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseManager/firebaseStore";

export const addResponsibility=async(e,id,res,swal)=>{
    e.preventDefault()
    const resRef= doc(db,'users',id)
    await updateDoc(resRef,{
      responsibility:arrayUnion(res)
    });
    e.target.reset()
    swal("Successfull", "Your Responsibility added!", "success");
  }
  export const removeResponsibility=async(id,res,swal)=>{
    const resRef= doc(db,'users',id)
    await updateDoc(resRef,{
      responsibility:arrayRemove(res)
    });
    swal("Successfull", "Your Responsibility Delete!", "success");
  }
  export const addConnection=async(id,connectId,swal)=>{
    const connectionRef= doc(db,'users',id)
    await updateDoc(connectionRef,{
      connection:arrayUnion(connectId)
    });
    swal("Successfull", "People added!", "success");
  }
  export const removeConnection=async(id,connectId,swal)=>{
    const connectionRef= doc(db,'users',id)
    await updateDoc(connectionRef,{
      responsibility:arrayRemove(connectId)
    });
    swal("Successfull", "People Delete!", "success");
  }
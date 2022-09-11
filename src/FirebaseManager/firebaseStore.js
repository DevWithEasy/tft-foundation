import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { arrayRemove, arrayUnion, collection, doc, enableIndexedDbPersistence, getDoc, getDocs, getFirestore, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import userData from "../component/User/userData";
import { addUser, removeUser } from './../ReduxManager/Action';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const collectionRef = collection(db,'users')
enableIndexedDbPersistence(db)
.catch((err)=>{
  if(err){
    console.log(err)
  }
})
//---------------sign in with google provider handler------------------
export const signIn =(dispachFunction)=>{
    signInWithPopup(auth,provider)
    .then(res =>{
        dispachFunction(addUser(res.user))
        })
        .catch(err=>{
            console.log(err);
        })
}

//----------------------------signout handler--------------------------
export const signOutHandler=(dispatch,navigate,menu,setMenu)=>{
    signOut(auth)
    .then(res=>{
      localStorage.removeItem("user");
      dispatch(removeUser())
      navigate('/')
      console.log('successfully logout')
      setMenu(!menu)
    })
    .catch(err=>{
        console.log(err);
    })
}
//------------------------creat user with email password---------------------
export const signUpHandler=(e,email,password,navigatFunction,swal,loading)=>{
    e.preventDefault()
    loading(true)
    const q = query(collection(db, "users"), where("email", "==", email));
    getDocs(q)
    .then(doc=>{
      let user=[]
      doc.forEach(doc=>user.push(doc.data()))
      if(user.length>0){
        swal("Failed!", "This mail already used.Please try another email!", "error")
        loading(false)
      }else{
        
        createUserWithEmailAndPassword(auth, email, password)
        .then( (res)=> {
          swal("Successful!", "Account created.Please verify now!", "success")
            if(res){
                navigatFunction('/login')
            }
          })
          .catch((err) => {
            swal("Failed!", "something wrong.Try again!", "error")
          });
          }
    })
    
    //
    
}

//-------------------user sign in with email password---------------
export const signInHandler=async(e,email,password,dispachFunction,location,navigate,setLoading,swal)=>{
    e.preventDefault()
    setLoading(true)
    await signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.user));
      dispachFunction(addUser(res.user))
      if(location.state?.from){
          navigate(location.state.from)
      }else{
        navigate('/')
      }
    })
    .catch((err) => {
      swal("Failed!", "Please Enter correct mail and password!", "error")
      setLoading(false)
    });

}


//------------------------Update User Data in database------------------------
export const updateUserProfile = (id,userProfileData,swal)=>{
    const profileDocRef = doc(db,'users',id)
    updateDoc(profileDocRef,userProfileData)
    .then(res=>{
      swal("Successful!", "Profile updated!", "success")
      updateProfile(auth.currentUser, {
        displayName: userProfileData.name, photoURL: userProfileData.profileImg
      })
      .then(res=>{
        swal("Successful!", "Profile Photo updated!", "success")
      })
      .catch(err=>{
        swal("Failed!", "Profile Photo update!", "error")
      })
    })
    .catch(err=>{
      swal("Failed!", "Profile update!", "error")
    })
}
// -----------previous job add remove---------------
export const addPreviousJob=async(e,id,previousJob,swal)=>{
  e.preventDefault()
  const profileDocRef = doc(db,'users',id)
  await updateDoc(profileDocRef, {
    previousJob: arrayUnion(previousJob)
  })
  .then(res=>{
    swal("Successful!", "Experience Added!", "success");
  })
  .catch(err=>{
    swal("Failed!", "Experience Added!", "error");
  })
  e.target.reset()
}
export const removePreviousJob=async(id,previousJob,swal)=>{
  const profileDocRef = doc(db,'users',id)
  await updateDoc(profileDocRef, {
    previousJob: arrayRemove(previousJob)
  })
  .then(res=>{
    swal("Successful!", "Experience delete!", "success");
  })
  .catch(err=>{
    swal("Failed!", "Experience delete!", "error");
  })
}
//-----------------------send verification email-------------------------
export const verification=(auth,id,email,successFunc)=>{
     sendEmailVerification(auth.currentUser)
  .then((res) => {
    //create user database
     setDoc(doc(db,'users', id), userData(id,email,serverTimestamp))
    .then(res=>{
       successFunc(true)
    })
    .catch(err=>{
       console.log(err)
    })
  })
  .catch(err=>{
    console.log(err);
  })
  
}

//--------------------change email address-----------------------
export const changeEmail=async(e,auth,email,swal)=>{
  e.preventDefault()
    await updateEmail(auth.currentUser, email)
    swal("Successful!", "Email Changed!", "success");
}

//---------------------------------------change password-----------------------------------------------
export const changePassword=async(e,auth,password,swal)=>{
  e.preventDefault()
    await updatePassword(auth.currentUser, password)
    swal("Successful!", "Password Changed!", "success");
}

//-----------------------reset password-------------------------
export const resetPassword=async(e,email,swal)=>{
    e.preventDefault()
    await sendPasswordResetEmail(auth, email)
    swal("Successful!", "Check your inbox or spam box!", "success");
    e.target.reset()
}

//--------------------delete account-------------------------
// export const deleteAccount=(auth)=>{
//     deleteUser(auth.currentUser)
//     .then(() => {
        
//     })
//     .catch((error) => {
        
//     });
// }
export const getDetails =async(collection,id,setFunc)=>{
  await getDoc(doc(db,collection,id))
    .then(res=>{
      setFunc(res.data())
    })
    .catch(err=>{
      console.log(err)
    })
}

export const addComment=async(e,id,comment,swal,navigate)=>{
  e.preventDefault()
  const commentRef= doc(db,'jobcircular',id)
  await updateDoc(commentRef,{
    comments:arrayUnion(comment)
  });
  e.target.reset()
  swal("Successfull", "Your comment added!", "success");
  navigate(`/jobDetails/${id}`)
}

export const removeComment=async(id,comment,swal,navigate)=>{
  const commentRef= doc(db,'jobcircular',id)
  await updateDoc(commentRef,{
    comments:arrayRemove(comment)
  })
  swal("Successfull", "Your comment delete!", "success");
  navigate(`/jobDetails/${id}`)
}
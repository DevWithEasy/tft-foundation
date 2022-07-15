import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { arrayRemove, arrayUnion, collection, doc, enableIndexedDbPersistence, getDoc, getFirestore, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
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
export const signUpHandler=(e,email,password,navigatFunction)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then( (res)=> {
        console.log('success')
        if(res){
            navigatFunction('/login')
        }
  })
  .catch((err) => {
    console.log(err)
  });
}

//-------------------user sign in with email password---------------
export const signInHandler=(e,email,password,dispachFunction,location,navigate)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((res) => {
    console.log('success')
    dispachFunction(addUser(res.user))
    if(location.state?.from){
        navigate(location.state.from)
    }else{
      navigate('/')
    }
  })
  .catch((err) => {
    console.log(err)
  });

}


//------------------------Update User Data in database------------------------
export const updateUserProfile = (id,userProfileData)=>{
    const profileDocRef = doc(db,'users',id)
    updateDoc(profileDocRef,userProfileData)
    .then(res=>{
      alert('profile update suceesfully')
      updateProfile(auth.currentUser, {
        displayName: userProfileData.name, photoURL: userProfileData.profileImg
      })
      .then(res=>{
        console.log('profile img update success');
      })
      .catch(err=>{
        alert('profile update failed');
      })
    })
    .catch(err=>{
      alert('profile update failed');
    })
}
export const addPreviousJob=async(id,previousJob)=>{
  const profileDocRef = doc(db,'users',id)
  await updateDoc(profileDocRef, {
    previousJob: arrayUnion(previousJob)
  })
  .then(res=>{
    alert('Experience add success');
  })
  .catch(err=>{
    alert('Experience add failed');
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
export const changeEmail=(auth,email)=>{
    updateEmail(auth.currentUser, email)
    .then(() => {
        // Email updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
}

//---------------------------------------change password-----------------------------------------------
export const changePassword=(auth,password)=>{
    updatePassword(auth.currentUser, password)
    .then(() => {
        // Update successful.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
}

//-----------------------reset password-------------------------
export const resetPassword=(email)=>{
    sendPasswordResetEmail(auth, email)
    .then((res) => {
    
    })
    .catch((error) => {
    
    });
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

export const addComment=(e,id,comment,toast)=>{
  e.preventDefault()
  const commentRef= doc(db,'jobcircular',id)
  updateDoc(commentRef,{
    comments:arrayUnion(comment)
  });
  e.target.reset()
}
export const removeComment=(id,comment,toast)=>{
  const commentRef= doc(db,'jobcircular',id)
  updateDoc(commentRef,{
    comments:arrayRemove(comment)
  })
}
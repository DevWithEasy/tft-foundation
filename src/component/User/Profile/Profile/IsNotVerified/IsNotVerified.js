import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth, verification } from './../../../../../FirebaseManager/firebaseStore';

const IsNotVerified = () => {
    const [send,setSend] = useState(false)
    const user = useSelector(state=>state.user)
    return (
        <div className="m-2 mt-10 px-2 py-6 border shadow rounded">
            {!send?
            <div className="space-y-3 text-center">
                <span className="text-2xl text-blue-500 font-bold underline">Account verification:</span>
                <p className="text-justify text-gray-600">
                Your email is not verified. 
                Please verify you email address.
                <span className="text-red-500 underline px-2">if you are not verify your email you can't access your profile.</span>
                After verify email address your profile database will create automaticaly.
                </p>
                <button className=" py-1 px-6 bg-blue-400 text-white hover:bg-blue-500 rounded"
                onClick={()=>verification(auth,user.uid,user.email,setSend)}
                >Send verify email</button>
            </div>
            :
            <div className="space-y-3 text-center">
                <span className="text-2xl text-blue-500 font-bold underline">Email sent successfully:</span>
                <p className="text-justify text-gray-600">
                We sent a verification email to you .
                Please check your email and verify email.
                Check your email <span className="text-blue-500 underline px-2">Inbox</span> or
                <span className="text-blue-500 underline px-2">Spam box</span>
                </p>
                <span className="text-black font-semibold italic">{user.email}</span>
                <Link to='/login' className="block w-24 mx-auto py-1 px-2  bg-blue-400 text-white hover:bg-blue-500 rounded">Go to login</Link>
                </div>
            }
          </div>
    );
};

export default IsNotVerified;
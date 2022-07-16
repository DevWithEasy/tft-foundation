import { useState } from "react";
import swal from 'sweetalert';
import { FaKey, FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { IsValidEmail, IsValidPassword, NotValidEmail } from "../../../FunctionManager/JsxDistributer";
import { signUpHandler } from './../../../FirebaseManager/firebaseStore';
import { handleRegInput } from './../../../FunctionManager/FunctionManager';
import { NotValidPassword } from './../../../FunctionManager/JsxDistributer';

const Registration = () => {
  //login form state
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });
  //handle login form navigate
  const navigate= useNavigate()
  return (
    <div className="p-2 space-y-6">
      <div className="">
        <h1 className="text-2xl font-bold">Welcome to TFT Foundation</h1>
        <span className="text-gray-400 text-sm block w-3/4">Join our professional family and creat your professional profile easily.
        Communicate all member and get job offer and circular
        </span>
      </div>
      <form className="w-full space-y-3" onSubmit={(e)=>signUpHandler(e,signUp.email,signUp.password,navigate,swal)}>
        <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100">
          <span className="flex items-center px-3 "><FaUserAlt className="text-gray-400"/></span>
          <input
            type="email"
            name="email"
            className="w-full p-2 border-none focus:outline-none rounded"
            placeholder="Enter valid email address"
            onChange={(e)=>handleRegInput(e,signUp,setSignUp)}
            required
          />
        </div>
        <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100">
          <span className="flex items-center px-3 "><FaKey className="text-gray-400"/></span>
          <input
            type="password"
            name="password"
            className="w-full p-2 border-none focus:outline-none rounded"
            placeholder="Enter strong password"
            onChange={(e)=>handleRegInput(e,signUp,setSignUp)}
            required
          />
        </div>
        <div className="">
          {!signUp.email?<NotValidEmail/>:<IsValidEmail/>}
          {!signUp.password?<NotValidPassword/>:<IsValidPassword/>}
        </div>
          <input
            type="submit"
            value="Sign Up"
            className="block w-40 mx-auto p-2 bg-blue-500 text-white rounded cursor-pointer"
          />
      </form>
      <div className="text-center">
        <span>Are you alreary user ? <Link to='/login' className="font-bold text-blue-500">Login now</Link></span><br />
        <span>Forget your password? <Link to='/forgetPassword' className="font-bold text-blue-500">Reset now</Link></span>
      </div>
    </div>
  );
};
export default Registration;

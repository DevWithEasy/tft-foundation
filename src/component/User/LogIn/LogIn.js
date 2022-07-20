import { useState } from "react";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { signInHandler } from '../../../FirebaseManager/firebaseStore';
import { handleLoginInput } from "../../../FunctionManager/FunctionManager";
import Loading from "../../Loading/Loading";
const LogIn = () => {
  const [loged, setLoged] = useState({
    email: "",
    password: ""
  });
  const [loading,setLoading] = useState(false)
  const location = useLocation() 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (<>
    {
      loading ? <Loading text='Logging'/>:
      <div className="px-3 py-10 space-y-6 m-2 my-24 border rounded-md bg-gray-50">
        <h1 className="text-xl text-slate-400 font-bold">Login to TFT Foundation</h1>
        <form className="w-full space-y-3" onSubmit={(e)=>signInHandler(e,loged.email,loged.password,dispatch,location,navigate,setLoading,swal)}>
          <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100 bg-white">
            <span className="flex items-center px-3"><FaUserAlt className="text-gray-400"/></span>
          <input
            type="email"
            name="email"
            className="w-full p-2 border-none focus:outline-none rounded"
            placeholder="Email Address"
            onChange={(e)=>handleLoginInput(e,loged,setLoged)}
            required
          />
          </div>
          <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100 bg-white">
            <span className="flex items-center px-3 "><FaKey className="text-gray-400"/></span>
          <input
            type="password"
            name="password"
            className="w-full p-2 border-none focus:outline-none rounded"
            placeholder="Password"
            onChange={(e)=>handleLoginInput(e,loged,setLoged)}
            required
          />
          </div>
          <input
            type="submit"
            value="Log In"
            className="block w-28 mx-auto p-2 bg-blue-500 text-white rounded cursor-pointer"
          />
        </form>
        <div className="text-center text-gray-400">
          <span>Are you new user ? <Link to='/registration' className="font-bold text-green-500">Registration now</Link></span><br />
          <span>Forget your password? <Link to='/forgetPassword' className="font-bold text-blue-500">Reset now</Link></span>
        </div>
    </div>
    }
  </>);
};
export default LogIn;

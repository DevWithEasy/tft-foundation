import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOutHandler } from "../../FirebaseManager/firebaseStore";
import { headerLink } from "./HeaderLink";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const user = useSelector(state=>state.user)
  const dispath = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="relative flex justify-between shadow p-3 bg-blue-500 text-white">
        <Link to="/">
          <span className="block ">TFT Foundation</span>
          <span className="block text-xs">
            Thakurgaon Food Technologist Foundation
          </span>
        </Link>
        <div className="flex justify-center items-center space-x-2">
          {
            user.email && <Link to={`/profile/${user.uid}`}><img src={user.photoURL} alt="" className="h-7 w-7 rounded-full" /></Link>
          }
          <span className="flex items-center text-xl cursor-pointe hover:ring-2 hover:text-gray-500 transition-all duration-300">
            <HiMenu size={30} onClick={() => setMenu(!menu)} />
          </span>
        </div>
      </div>
      <div
        className={
          menu
            ? "absolute w-full flex flex-col py-4 px-2 bg-white shadow-lg shadow-blue-50 border-b-2 border-blue-100  z-10"
            : "hidden"
        }
      >
        {
            user.email && <Link  to={`/profile/${user.uid}`} 
            className="border-b p-2 hover:bg-blue-500 hover:text-white transition-all duration-300"
            onClick={() => setMenu(!menu)}>
              Profile
            </Link>
        }
        {
          headerLink.map((link,index)=><NavLink
            key={index}
            to={link.link}
            className='border-b p-2 hover:bg-blue-500 hover:text-white transition-all duration-300'
            onClick={() => setMenu(!menu)}
          >{link.title}</NavLink>)
        }
        {
          user.email && <button className='ml-2 mt-2 py-1 bg-red-500 text-white w-24 rounded-lg' onClick={()=>signOutHandler(dispath,navigate,menu,setMenu)}>Logout</button>
        }
      </div>
    </div>
  );
};
export default Header;

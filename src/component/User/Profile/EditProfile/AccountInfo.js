import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import { updateUserProfile } from './../../../../FirebaseManager/firebaseStore';

const AccountInfo = ({ user, handleChange }) => {
  const [account, setAccount] = useState(true);
  return (
    <div className="">
      <h3
        className="flex justify-between items-center  font-bold bg-blue-500 p-2 text-white  hover:bg-blue-600 transition-all duaration-500 cursor-pointer rounded"
        onClick={() => setAccount(!account)}
      >
        <div className="flex items-center space-x-2">
          <MdManageAccounts size={25} />
          <span>Account Information</span>
        </div>
        {account ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </h3>
      <div className={account ? "space-y-2" : "hidden"}>
      <label className="text-sm pl-1">Full Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
        />
      <label className="text-sm pl-1">Account status:</label>
        <select name="status"
          value={user.status}
          onChange={handleChange}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded">
          <option value="">select your acount status</option>
          <option value="Find a Job">Find a Job</option>
          <option value="Still A Job">Still A Job</option>
          <option value="Entership complete">Entership complete</option>
        </select>
        
        <label className="text-sm pl-1">Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
        />
        <label className="text-sm pl-1">Mobile Number:</label>
        <input
          type="text"
          name="contactNumber"
          value={user.contactNumber}
          onChange={handleChange}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
        />

        <label className="text-sm pl-1">Facebook username ( https://facebook.com/<span className="border-b-2 border-blue-500">username</span> ):</label>
        <input
          type="text"
          name="fbLink"
          value={user.fbLink}
          onChange={handleChange}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
          placeholder='username'
        />
        <label className="text-sm pl-1">
          Profile image link ( Change <Link to='/howtochangeimg' className="bg-blue-500 px-2 rounded-md text-white">Profile image here</Link> ):
        </label>
        <input
          type="text"
          name="profileImg"
          value={user.profileImg}
          onChange={handleChange}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
        />
        <label className="text-sm pl-1">
          CV link ( Upload CV in our <a href="https://drive.google.com/drive/folders/1YUyb8dNyH8Ixgbc-TuwZ_nyilbdsCoLk?usp=sharing" target='_blank' className="bg-blue-500 px-2 rounded-md text-white" rel="noreferrer">Drive folder here</a> ):
        </label>
        <input
          type="text"
          name="cvLink"
          value={user.cvLink}
          onChange={handleChange}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
          placeholder="https://drive.google.com/...................."
        />
        <button
          className="px-10 py-1 mt-1 bg-blue-500 text-white rounded cursor-pointer"
          onClick={()=>updateUserProfile(user.id,user)}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default AccountInfo;

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { updateUserProfile } from './../../../../FirebaseManager/firebaseStore';
const PersonalInfo = ({ user, handleInput }) => {
  const {
    handleChange,
    handlePresentAddressInput,
    handlePermanentAddressInput
  } = handleInput;
  const [personal, setPersonal] = useState(false);
  return (
    <div className="space-y-2">
      <h3
        className="flex justify-between items-center  font-bold bg-blue-500 p-2 text-white  hover:bg-blue-600 transition-all duaration-500 cursor-pointer rounded"
        onClick={() => setPersonal(!personal)}
      >
        <div className="flex items-center space-x-2">
          <MdOutlinePersonalInjury size={25} />
          <span>Personal Information</span>
        </div>
        {personal ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </h3>
      <div className={personal ? "" : "hidden"}>
        <label className="text-sm pl-1">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
          onChange={handleChange}
        />
        <label className="text-sm pl-1">Father's Name:</label>
        <input
          type="text"
          name="fName"
          value={user.fName}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
          onChange={handleChange}
        />
        <label className="text-sm pl-1">Mother's Name:</label>
        <input
          type="text"
          name="mName"
          value={user.mName}
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
          onChange={handleChange}
        />
        <div className="flex gap-x-1">
          <div className="w-1/2">
            <label className="text-sm pl-1">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={user.dob}
              className="w-full p-2 border-2 focus:outline-blue-500 rounded"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm pl-1">NID No:</label>
            <input
              type="text"
              name="nidNo"
              value={user.nidNo}
              className="w-full p-2 border-2 focus:outline-blue-500 rounded"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-x-1">
        <div className="w-1/2">
            <label className="text-sm pl-1">Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={user.nationality}
              className="w-full p-2 border-2 focus:outline-blue-500 rounded"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm pl-1">Gender:</label>
            <select
              name="gender"
              className="w-full p-2 border-2 focus:outline-blue-500 rounded"
              onChange={handleChange}
            >
              <option value="">select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          
        </div>
        <div className="flex gap-x-1">
          <div className="w-1/2">
              <label className="text-sm pl-1">Blood Group:</label>
              <select
                name="bloodGroup"
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleChange}
              >
                <option value="">select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Marital Status:</label>
              <select
                name="marital"
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleChange}
              >
                <option value="">select Marital Status</option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
              </select>
            </div>
        </div>
        {/* -------------------present Address -----------------------*/}
        <div className="mt-2 space-y-1">
          <h3 className="italic font-bold bg-gray-200 p-1">Present Address:</h3>
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">District:</label>
              <input
                type="text"
                name="district"
                value={user.presentAddress.district}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePresentAddressInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Upzilla:</label>
              <input
                type="text"
                name="upzilla"
                value={user.presentAddress.upzilla}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePresentAddressInput}
              />
            </div>
          </div>
          <label className="text-sm pl-1">Area:</label>
          <input
            type="text"
            name="area"
            value={user.presentAddress.area}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handlePresentAddressInput}
          />
        </div>
        {/* -------------------permanent Address -----------------------*/}
        <div className="mt-2 space-y-1">
          <h3 className="italic font-bold bg-gray-200 p-1">
            Permanent Address:
          </h3>
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">District:</label>
              <input
                type="text"
                name="district"
                value={user.permanentAddress.district}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePermanentAddressInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Upzilla:</label>
              <input
                type="text"
                name="upzilla"
                value={user.permanentAddress.upzilla}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePermanentAddressInput}
              />
            </div>
          </div>
          <div className="flex gap-x-1">
            <div className="">
              <label className="text-sm pl-1">Post Office:</label>
              <input
                type="text"
                name="postOffice"
                value={user.permanentAddress.postOffice}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePermanentAddressInput}
              />
            </div>
            <div className="">
              <label className="text-sm pl-1">Post Code:</label>
              <input
                type="text"
                name="postCode"
                value={user.permanentAddress.postCode}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePermanentAddressInput}
              />
            </div>
          </div>
          <label className="text-sm pl-1">Area:</label>
          <input
            type="text"
            name="area"
            value={user.permanentAddress.area}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handlePermanentAddressInput}
          />
          <button className="px-10 py-1 bg-blue-500 text-white rounded cursor-pointer"
            onClick={()=>updateUserProfile(user.id,user)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;

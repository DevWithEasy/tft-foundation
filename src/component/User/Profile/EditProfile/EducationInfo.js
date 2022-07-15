import { useState } from "react";
import { MdSchool } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { updateUserProfile } from './../../../../FirebaseManager/firebaseStore';
const EducationInfo = ({ user, handleInput }) => {
  const [education, setEducation] = useState(false);
  const {
    handleSSCInput,
    handleCollageInput,
    handleBSCInput,
    handleMSCInput
  } = handleInput;

  return (
    <div className="space-y-1">
      <h3
        className="flex justify-between items-center  font-bold bg-blue-500 p-2 text-white  hover:bg-blue-600 transition-all duaration-500 cursor-pointer rounded"
        onClick={() => setEducation(!education)}
      >
        <div className="flex items-center space-x-2">
          <MdSchool size={25} />
          <span>Education Qualification</span>
        </div>
        {education ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </h3>
      {/* -----------------School Result-------------------- */}
      <div className={education ? "" : "hidden"}>
        <div className="space-y-1">
          <h3 className="italic font-bold bg-gray-200 p-1">SSC:</h3>
          <label className="text-sm pl-1">School Name:</label>
          <input
            type="text"
            name="name"
            value={user.ssc.name}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handleSSCInput}
          />
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">Season:</label>
              <input
                type="text"
                name="season"
                value={user.ssc.season}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleSSCInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Passing Year:</label>
              <input
                type="text"
                name="passingYear"
                value={user.ssc.passingYear}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleSSCInput}
              />
            </div>
          </div>
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">Group/Subject:</label>
              <select name="group"
                      value={user.ssc.group}
                      className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                      onChange={handleSSCInput}
              >
                <option value=""></option>
                <option value="Science">Science</option>
                <option value="Humanities">Humanities</option>
                <option value="Acounting">Acounting</option>
                <option value="Technical">Technical</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Result:</label>
              <input
                type="text"
                name="result"
                value={user.ssc.result}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleSSCInput}
              />
            </div>
          </div>
        </div>
        {/* ---------------Collage Result-------------- */}
        <div className="mt-2 space-y-1">
          <h3 className="italic font-bold bg-gray-200 p-1">Diploma / HSC:</h3>
          <label className="text-sm pl-1">Collage / Polytechnic Name:</label>
          <input
            type="text"
            name="name"
            value={user.collage.name}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handleCollageInput}
          />
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">Season:</label>
              <input
                type="text"
                name="season"
                value={user.collage.season}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleCollageInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Passing Year:</label>
              <input
                type="text"
                name="passingYear"
                value={user.collage.passingYear}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleCollageInput}
              />
            </div>
          </div>
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">Group/Subject:</label>
              <input
                type="text"
                name="group"
                value={user.collage.group}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleCollageInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Result:</label>
              <input
                type="text"
                name="result"
                value={user.collage.result}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleCollageInput}
              />
            </div>
          </div>
        </div>
        {/* ----------------Bsc Result---------------- */}
        <div className="mt-2 space-y-1">
          <h3 className="italic font-bold bg-gray-200 p-1">B.Sc:</h3>
          <label className="text-sm pl-1">University Name:</label>
          <input
            type="text"
            name="name"
            value={user.bsc.name}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handleBSCInput}
          />
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">Season:</label>
              <input
                type="text"
                name="season"
                value={user.bsc.season}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleBSCInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Passing Year:</label>
              <input
                type="text"
                name="passingYear"
                value={user.bsc.passingYear}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleBSCInput}
              />
            </div>
          </div>
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">Group/Subject:</label>
              <input
                type="text"
                name="group"
                value={user.bsc.group}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleBSCInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Result:</label>
              <input
                type="text"
                name="result"
                value={user.bsc.result}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleBSCInput}
              />
            </div>
          </div>
        </div>
        {/* -----------------MSC Result----------------- */}
        <div className="mt-2 space-y-1">
          <h3 className="italic font-bold bg-gray-200 p-1">M.Sc:</h3>
          <label className="text-sm pl-1">University Name:</label>
          <input
            type="text"
            name="name"
            value={user.msc.name}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handleMSCInput}
          />
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">Season:</label>
              <input
                type="text"
                name="season"
                value={user.msc.season}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleMSCInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Passing Year:</label>
              <input
                type="text"
                name="passingYear"
                value={user.msc.passingYear}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleMSCInput}
              />
            </div>
          </div>
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">Group/Subject:</label>
              <input
                type="text"
                name="group"
                value={user.msc.group}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleMSCInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">Result:</label>
              <input
                type="text"
                name="result"
                value={user.msc.result}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handleMSCInput}
              />
            </div>
          </div>
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
export default EducationInfo;

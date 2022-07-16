import { useState } from "react";
import swal from 'sweetalert';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { addPreviousJob, updateUserProfile } from './../../../../FirebaseManager/firebaseStore';
const ExperienceInfo = ({ user, handlePresentCompanyInput,previousJob,handlePreviousJobInput }) => {
  const [experience, setExperience] = useState(false);
  return (
    <div className="space-y-1">
      <h3
        className="flex justify-between items-center  font-bold bg-blue-500 p-2 text-white  hover:bg-blue-600 transition-all duaration-500 cursor-pointer rounded"
        onClick={() => setExperience(!experience)}
      >
        <div className="flex items-center space-x-2">
          <MdWork size={25} />
          <span>Experience Information</span>
        </div>
        {experience ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </h3>
      {/* --------------------Present Job-------------------------- */}
      <div className={experience ? "" : "hidden"}>
        <div className="space-y-1">
          <h3 className="italic font-bold bg-gray-200 p-1">Present Job:</h3>
          <label className="text-sm pl-1">Company Name:</label>
          <input
            type="text"
            name="name"
            value={user.presentCompany.name}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handlePresentCompanyInput}
          />
          <label className="text-sm pl-1">Designation:</label>
          <input
            type="text"
            name="designation"
            value={user.presentCompany.designation}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handlePresentCompanyInput}
          />
          <label className="text-sm pl-1">Location:</label>
          <input
            type="text"
            name="location"
            value={user.presentCompany.location}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handlePresentCompanyInput}
          />
          <div className="flex gap-x-1">
            <div className="w-1/2">
              <label className="text-sm pl-1">From:</label>
              <input
                type="date"
                name="from"
                value={user.presentCompany.from}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePresentCompanyInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm pl-1">To:</label>
              <input
                type="date"
                name="to"
                value={user.presentCompany.to}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePresentCompanyInput}
              />
            </div>
          </div>
          <button className="px-10 py-1 bg-blue-500 text-white rounded cursor-pointer"
                  onClick={()=>updateUserProfile(user.id,user,swal)}  
          >
            Save
          </button>
        </div>
        {/* -------------------Previous job-------------------------- */}
        <div className="mt-2">
          <h3 className="italic font-bold bg-gray-200 p-1">Prevoius Job:</h3>
          <label className="text-sm pl-1">Company Name:</label>
          <input
            type="text"
            name="name"
            value={previousJob.name}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handlePreviousJobInput}
          />
          <label className="text-sm pl-1">Designation:</label>
          <input
            type="text"
            name="designation"
            value={previousJob.designation}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handlePreviousJobInput}
          />
          <label className="text-sm pl-1">Location:</label>
          <input
            type="text"
            name="location"
            value={previousJob.location}
            className="w-full p-2 border-2 focus:outline-blue-500 rounded"
            onChange={handlePreviousJobInput}
          />
          <div className="flex gap-x-1">
            <div className="w-4/12">
              <label className="text-sm pl-1">From:</label>
              <input
                type="date"
                name="from"
                value={previousJob.from}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePreviousJobInput}
              />
            </div>
            <div className="w-4/12">
              <label className="text-sm pl-1">To:</label>
              <input
                type="date"
                name="to"
                value={previousJob.to}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePreviousJobInput}
              />
            </div>
            <div className="w-4/12">
              <label className="text-sm pl-1">Exp. year:</label>
              <input
                type="text"
                name="year"
                value={previousJob.year}
                className="w-full p-2 border-2 focus:outline-blue-500 rounded"
                onChange={handlePreviousJobInput}
              />
            </div>
          </div>
          <button className="p-2 w-24 mt-2 bg-blue-500 rounded text-white "
            onClick={()=>addPreviousJob(user.id,previousJob,swal)}
            >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExperienceInfo;

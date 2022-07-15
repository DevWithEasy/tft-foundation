import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const FaqQA = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-blue-500 bg-blue-200 rounded">
      <h2
        className="flex justify-between items-center px-2 py-1 bg-blue-500 text-white rounded hover:cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <span>Here is your question</span>
        {open ? <FaMinus /> : <FaPlus />}
      </h2>
      {open && (
        <p className="p-3 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      )}
    </div>
  );
};
export default FaqQA;

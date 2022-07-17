import { useState } from "react";
import swal from "sweetalert";
import { auth, changeEmail } from './../../../FirebaseManager/firebaseStore';

const ChangeEmail = () => {
  const [email, setEmail] = useState("");
  const handleChangeInput = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="m-2 mt-10 p-2 bzorder rounded shadow">
      <h1 className="text-2xl underline italic mb-4">Change Email:</h1>
      <form className="space-y-2" onSubmit={(e)=>changeEmail(e,auth,email,swal)}>
        <input
          type="text"
          name="password"
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
          placeholder="Enter new email address"
          onChange={handleChangeInput}
          required
        />
        <input
          type="submit"
          value="Submit"
          className="w-20 p-2 bg-blue-500 text-white rounded cursor-pointer"
        />
      </form>
    </div>
  );
};
export default ChangeEmail;

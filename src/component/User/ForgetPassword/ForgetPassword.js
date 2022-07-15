import { useState } from "react";
import { resetPassword } from "../../../FirebaseManager/firebaseStore";

const ChangeEmail = () => {
  const [changeEmail, setChangeEmail] = useState("");
  const handleChangeInput = (e) => {
    setChangeEmail(e.target.value);
  };

  return (
    <div className="m-2 mt-10 p-2 bzorder rounded shadow">
      <h1 className="text-2xl underline italic mb-4">Forget Password:</h1>
      <form className="space-y-2" onSubmit={()=> resetPassword(changeEmail)}>
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
          value="Reset Password"
          className="w-32 p-2 bg-blue-500 text-white rounded cursor-pointer"
        />
      </form>
    </div>
  );
};
export default ChangeEmail;

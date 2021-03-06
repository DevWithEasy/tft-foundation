import { Route, Routes } from "react-router";
import AboutUs from "../component/AboutUs/AboutUs";
import ContactUs from "../component/ContactUs/ContactUs";
import Faq from "../component/Faq/Faq";
import Gallery from "../component/Gallery/Gallery";
import Homepage from "../component/Homepage/Homepage";
import EditPost from "../component/Job/EditPost/EditPost";
import FindJob from "../component/Job/FindJob/FindJob";
import JobDetails from "../component/Job/FindJob/JobDetails/JobDetails";
import PostJob from "../component/Job/PostJob/PostJob";
import NotFound from "../component/NotFound/NotFound";
import FindPeople from "../component/People/FindPeople";
import PrivacyPolicy from "../component/PrivacyPolicy/PrivacyPolicy";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import ChangeEmail from "../component/User/ChangeEmailPassword/ChangeEmail";
import ChangePassword from "../component/User/ChangeEmailPassword/ChangePassword";
import ForgetPassword from "../component/User/ForgetPassword/ForgetPassword";
import LogIn from "../component/User/LogIn/LogIn";
import EditProfile from "../component/User/Profile/EditProfile/EditProfile";
import Profile from "../component/User/Profile/Profile";
import Registration from "../component/User/Registration/Registration";


const RouterManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/" element={<Profile />} /> */}
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/findJob" element={<FindJob />} />
      <Route path="/findPeople" element={<FindPeople />} />
      <Route path="/connect" element={<ContactUs />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/*" element={<PrivateRoute />}>
        <Route path="profile/:id" element={<Profile />} />
        <Route path="editprofile/:id" element={<EditProfile />} />
        <Route path="changePassword/:id" element={<ChangePassword />} />
        <Route path="changeEmail/:id" element={<ChangeEmail />} />
        <Route path="editPost/:id" element={<EditPost />} />
        <Route path="postJob" element={<PostJob />} />
        <Route path="jobDetails/:id" element={<JobDetails />} />
      </Route>
      
    </Routes>
  );
};
export default RouterManager;

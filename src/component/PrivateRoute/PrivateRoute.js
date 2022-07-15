import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';
const PrivateRoute = () => {
  const user = useSelector((state)=>state.user)
  const location = useLocation()
  return(
    <div className="">
      {
        user.email? <Outlet/>:<Navigate to='/login' replace state={{from:location}}/>
      }
    </div>
  )
};
export default PrivateRoute;

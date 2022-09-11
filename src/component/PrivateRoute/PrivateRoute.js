import { useSelector,useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';
import { addUser } from '../../ReduxManager/Action';
const PrivateRoute = () => {
  const user = useSelector((state)=>state.user)
  const location = useLocation()
  const dispatch = useDispatch() 
  const localUser = JSON.parse(localStorage.getItem('user'))
  if(localUser){
    dispatch(addUser(localUser))
  }
  return(
    <div className="">
      {
        user.email || localUser.email || user.email? <Outlet/>:<Navigate to='/login' replace state={{from:location}}/>
      }
    </div>
  )
};
export default PrivateRoute;

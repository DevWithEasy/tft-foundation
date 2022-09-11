import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { activity } from '../../Data/homeData';
import { addUser } from '../../ReduxManager/Action';
const Homepage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user= (JSON.parse(localStorage.getItem('user')));
  if (user){
    dispatch(addUser(user))
  }
  return <div className="">
    {/* wellcome */}
    <div className="wellcome">
      <div className="w-full space-y-2 flex flex-col items-center justify-center p-2">
          <h3 className='font-bold text-2xl text-center'>Welcome to TFT Community</h3>
          <p className='text-gray-100 text-center'>It's a professtional Food Engineering community.Here you can communicate all professional person.</p>
          <button  className='wellcome-btn home-btn' onClick={()=>navigate('/registration')}>Join community</button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 p-4 bg-gray-100">
      {
        activity.map(ac=>
          <div className="flex flex-col justify-center items-center space-y-3 p-1 py-5 border rounded-lg bg-white shadow shadow-blue-100" key={ac.id}>
            <div className='h-24 mb-2'>
              <img src={ac.img} alt="" className='h-24'/>
            </div>
            <button className="bg-green-500 text-white text-xl px-3 py-0.5 rounded-full shadow-lg" onClick={()=>navigate(ac.path)}>{ac.title}</button>
            <p className="text-gray-500">{ac.desc}</p>
          </div>
        )
      }
    </div>
  </div>;
};
export default Homepage;

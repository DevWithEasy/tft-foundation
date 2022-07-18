import { useNavigate } from 'react-router-dom';
import { activity } from '../../Data/homeData';
const Homepage = () => {
  const navigate = useNavigate()
  return <div className="">
    {/* wellcome */}
    <div className="wellcome">
      <div className="w-full space-y-2 flex flex-col items-center justify-center p-2">
          <h3 className='font-bold text-2xl text-center'>Welcome to TFT Community</h3>
          <p className='text-gray-100 text-center'>It's a professtional Food Engineering community.Here you can communicate all professional person.</p>
          <button  className='wellcome-btn home-btn' onClick={()=>navigate('/registration')}>Join community</button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-1 p-2 py-5 bg-gray-100">
      {
        activity.map(ac=>
          <div className="flex flex-col justify-center items-center space-y-2 p-1 py-3 border rounded-lg bg-white ">
            <img src={ac.img} alt="" className='h-24'/>
            <p className="text-blue-500 text-xl border border-blue-100 px-3 py-0.5 rounded-full shadow shadow-blue-100">{ac.title}</p>
            <p className="">{ac.desc}</p>
          </div>
        )
      }
    </div>
  </div>;
};
export default Homepage;

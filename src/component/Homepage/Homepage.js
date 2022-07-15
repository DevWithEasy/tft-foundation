import wellcomeImg from '../../assets/wellcome.png';
import jobImg from '../../assets/job.png'
const Homepage = () => {
  
  return <div className="">
    {/* wellcome */}
    <div className="flex justify-between bg-blue-400 text-white">
      <div className="w-1/2 space-y-2 flex flex-col items-center justify-center">
          <h3 className='font-bold text-2xl'>Welcome to TFT Community</h3>
          <p className='text-gray-100'>its a professtional Food Engineering community</p>
          <button  className='bg-white text-black px-4 py-2 rounded-lg shadow-lg transition-all duration-300 font-semibold hover:bg-blue-500 hover:text-white'>Join community</button>
      </div>
      <div className="w-1/2">
        <img src={wellcomeImg} alt="" className='w-full bg-cover'/>
      </div>
    </div>
    {/* Job Circular */}
    <div className="flex justify-between bg-gray-50">
      <div className="w-1/2">
        <img src={jobImg} alt="" className='w-full bg-cover'/>
      </div>
      <div className="w-1/2 space-y-2 flex flex-col  justify-center">
          <h3 className='font-bold text-2xl'>Find your Dream</h3>
          <p className='text-gray-500'>Here you can find a job from our community peoples.</p>
          <button  className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 clearfont-semibold hover:bg-white hover:text-black w-4/12'>Join community</button>
      </div>
    </div>
  </div>;
};
export default Homepage;

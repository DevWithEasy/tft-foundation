import jobImg from '../../assets/job.png';
import wellcomeImg from '../../assets/wellcome.png';
const Homepage = () => {
  
  return <div className="">
    {/* wellcome */}
    <div className="wellcome">
      <div className="firstHalf">
          <h3 className='font-bold text-2xl'>Welcome to TFT Community</h3>
          <p className='text-gray-100'>It's a professtional Food Engineering community.Here you can communicate all professional person.</p>
          <button  className='wellcome-btn home-btn'>Join community</button>
      </div>
      {/* <div className="w-4/12">
        <img src={wellcomeImg} alt="" className='w-full bg-cover'/>
      </div> */}
    </div>
    {/* Job Circular */}
    <div className="jobcircular">
      {/* <div className="w-4/12">
        <img src={jobImg} alt="" className='w-full bg-cover'/>
      </div> */}
      <div className="firstHalf">
          <h3 className='font-bold text-2xl'>Find your Dream</h3>
          <p className='text-gray-500'>Here you can find a job from our community peoples.Just visit and apply with reffarence</p>
          <button  className='jobcircular-btn home-btn'>Find Job</button>
      </div>
    </div>
    
  </div>;
};
export default Homepage;

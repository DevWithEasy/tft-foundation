import { BiEdit } from 'react-icons/bi';
import { BsFacebook, BsMessenger } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../../../Loading/Loading';
import IsContact from './IsContact';
import IsEducation from './IsEducation';
import IsPersonal from './IsPersonal';
import IsPreviousJob from './IsPreviousJob';
import IsResponsibility from './IsResponsibility';
import PresentCompany from './PresentCompany';

const IsVerified = ({profile}) => {
  const user = useSelector(state=>state.user)
  const {id}= profile
    return (<>
        {
          id ? 
          <div className="">
            <div className="relative bg-blue-50 h-36 ">
              <img
                src={profile.profileImg}
                alt=""
                className="absolute h-32 w-32 left-2 top-16 mx-auto rounded-full ring-4"
              />
            </div>
            <div className="pt-16 pb-2 p-2">
              <h3 className="font-bold text-2xl">{profile.name}</h3>
              <p className=" text-gray-500">{profile.presentCompany.name}</p>
              <p className="text-gray-500">{profile.presentCompany.designation}</p>
              <div className="flex justify-end">
                <div className="flex space-x-5">
                  <IsContact contact={profile.contactNumber} type='tel:' className='' Icon={FiPhoneCall}/>
                  <IsContact contact={profile.email} type='mailto:' className='text-slate-500' Icon={MdEmail}/>
                  <IsContact contact={profile.fbLink} type='https://m.me/' className='text-blue-500' Icon={BsMessenger}/>
                  <IsContact contact={profile.fbLink} type='https://facebook.com/' className='text-blue-500' Icon={BsFacebook}/>
                  {
                    user.uid === id ? <Link to={`/editprofile/${id}`} className='flex items-center space-x-1'> <BiEdit/> Edit profile</Link>:''
                  }
                </div>
              </div>
            </div>
            <div className="px-2">
              <h3 className="bg-gray-200 px-2 p-1 my-1 font-bold text-2xl">Experience :</h3>
              {profile.presentCompany.name && <PresentCompany presentCompany={profile.presentCompany}/>}
            </div>
            <div className="px-2 space-y-2">
              {profile.previousJob.length>0 && 
              profile.previousJob.map((job,index)=><IsPreviousJob key={index} job={job}/>)}
            </div>
            {
              profile.responsibility.length ? <IsResponsibility response={profile.responsibility} id={profile.id}/> :''
            }
            <div className="px-2">
              <h3 className="bg-gray-200 px-2 p-1 my-1 font-bold text-2xl">Education :</h3>
              <IsEducation ssc={profile.ssc} bsc={profile.bsc} collage={profile.collage} msc={profile.msc}/>
            </div>
            {/* personal informatio */}
            <IsPersonal profile={profile}/>
            
          </div>
          :
          <Loading text='Loading'/>
        }
      </>
    );
};

export default IsVerified;
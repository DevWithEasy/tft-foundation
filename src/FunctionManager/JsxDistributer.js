import { FcCheckmark, FcHighPriority } from 'react-icons/fc'
export const NotValidEmail=()=>{
    return(
        <div className="flex items-center space-x-2 pl-2 text-xs text-gray-500"><FcHighPriority/><span className=''>Please enter a valid email address...</span></div>
    )
}
export const IsValidEmail=()=>{
    return(
        <div className="flex items-center space-x-2 pl-2 text-xs text-gray-500"><FcCheckmark/><span className='text-green-500'>Successfully enter valid email.</span></div>
    )
}
export const NotValidPassword=()=>{
    return(
        <div className="pl-2 text-xs text-gray-500">
            <p className='flex items-center space-x-2'>
                <FcHighPriority/><span className=''>Minimum length six charecter</span>
            </p>
            <p className='flex items-center space-x-2'>
                <FcHighPriority/><span className=''>Special charecter</span>
            </p>
            <p className='flex items-center space-x-2'>
                <FcHighPriority/><span className=''>Must have Uppercase,Lowercase and number</span>
            </p>
        </div>
    )
}
export const IsValidPassword=()=>{
    return(
        <div className="flex items-center space-x-2 pl-2 text-xs text-gray-500"><FcCheckmark/><span className='text-green-500'>Successfully enter valid strong password.</span></div>
    )
}
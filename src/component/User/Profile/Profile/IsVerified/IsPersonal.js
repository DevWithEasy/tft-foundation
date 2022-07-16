import React from 'react';

const IsPersonal = ({profile}) => {
    const {permanentAddress,presentAddress,fName,mName,dob,marital,gender}=profile
    return (
        <div className='px-2'>
            <h3 className="bg-gray-200 px-2 p-1 my-2 text-xl font-bold">Personal Information :</h3>
            <table>
                <tr>
                    <td>Father's Name</td>
                    <td>:{fName}</td>
                </tr>
                <tr>
                    <td>Mother's Name</td>
                    <td>:{mName}</td>
                </tr>
                <tr>
                    <td>Date of birth</td>
                    <td>:{dob}</td>
                </tr>
                <tr>
                    <td>Present Address</td>
                    <td>:
                        Area-{presentAddress.area} , 
                        Upzilla- {presentAddress.upzilla} , 
                        District- {presentAddress.district}
                    </td>
                </tr>
                <tr>
                    <td>Permanent Address</td>
                    <td>:
                        Village-{permanentAddress.area} ,
                        Post office-{permanentAddress.postOffice} ({permanentAddress.postCode}) , 
                        Upzilla- {permanentAddress.upzilla} , 
                        District- {permanentAddress.district}
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>: {gender}</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td>: {marital}</td>
                </tr>
            </table>
        </div>
    );
};

export default IsPersonal;
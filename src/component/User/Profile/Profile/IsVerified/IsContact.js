import React from 'react';

const IsContact = ({type,contact,Icon}) => {
    return (
        <a href={`${type}${contact}`} rel="noreferrer" target='_blank' className='flex items-center'><Icon size={20}/></a>
    );
};

export default IsContact;
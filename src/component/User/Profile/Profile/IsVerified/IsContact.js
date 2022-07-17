import React from 'react';

const IsContact = ({type,contact,className,Icon}) => {
    return (
        <a href={`${type}${contact}`} rel="noreferrer" target='_blank' className={`flex items-center ${className}`}><Icon size={20}/></a>
    );
};

export default IsContact;
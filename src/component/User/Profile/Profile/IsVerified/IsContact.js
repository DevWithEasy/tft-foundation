import React from 'react';

const IsContact = ({contact,Icon}) => {
    return (
        <a href={`tel:${contact}`} rel="noreferrer" target='_blank' className='flex items-center'><Icon size={20}/></a>
    );
};

export default IsContact;
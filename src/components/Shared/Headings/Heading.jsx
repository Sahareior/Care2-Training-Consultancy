import React from 'react';

const Heading = ({text}) => {
    return (
        <div className='flex justify-center'>
            <h2 className='text-3xl font-bold text-[#C40561]'>{text}</h2>
        </div>
    );
};

export default Heading;
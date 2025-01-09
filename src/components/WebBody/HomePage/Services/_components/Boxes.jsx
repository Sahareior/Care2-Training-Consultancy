import React from 'react';
import './Boxs.scss'; // Assuming you have your SCSS file named Boxs.scss in the same directory

const Boxes = ({ Icon, title, descriptions }) => { // Note: Changed prop name to "Icon"
    return (
        <div className="content mt-8">
            <div className="card">
                <div className="icon"><Icon size={36} /></div> 
                               <p className="title">{title}</p>
                <p className="text">{descriptions}</p>
            </div>
        </div>
    );
}

export default Boxes;

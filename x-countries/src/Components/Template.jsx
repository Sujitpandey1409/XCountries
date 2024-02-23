import React from 'react';
import './Template.css'
const Template = ({title, src, alt}) => {
    return ( 
        <div className="template">
            <div className="template-content">
            <img src={src} alt={alt} />
            <div className="title">{title}</div>
            </div>
        </div>
        );
}
 
export default Template;
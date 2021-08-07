import React from 'react';
import './button.css'
export const Button = ({icon, text, variant, className}) =>{
    return (
        <button className={`btn btn-${variant} ${className}`}>
            <div>
                {icon}
            </div>
            <div>
                {text}
            </div>
        </button>
    );
};
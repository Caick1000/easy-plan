import React from 'react';
import './style.scss';


const Button = (props) => {
    return (
        <button className='mainButton'>
            {props.value}
        </button>
    )

};

export default Button;
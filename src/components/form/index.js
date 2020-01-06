import React from 'react';
import './style.scss';


const Form = (props) => {
    const { type='text', onChange, placeholder } = props
    return (
           <textarea className='field'
           type={type}
           placeholder={placeholder}
           onChange={onChange}
           />
    )
};

export default Form
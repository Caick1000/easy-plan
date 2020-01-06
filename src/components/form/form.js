import React from 'react';
import './style.scss';


const Form = (props) => {
    const { id, type, onChange, value, placeholder } = props
    return (
           <textarea className='field'
           id={id}
           type={type}
           type='text'
           value={value}
           placeholder={placeholder}
           onChange={onChange}
           />
    )
};

export default Form
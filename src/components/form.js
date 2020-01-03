import React from 'react';
import PropTypes from 'prop-types';
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

// Form.PropTypes ={
//     id: PropTypes.string.isRequired,
//     locked: PropTypes.bool,
//     focussed: PropTypes.bool,
//     value: PropTypes.string,
//     error: PropTypes.string,
//     placeholder: PropTypes.string,
//     onChange: PropTypes.func

// }

export default Form
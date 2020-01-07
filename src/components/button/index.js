import React from 'react';
import { Link } from 'react-router-dom'
import '../../sass/components/_button.scss'


const Button = (props) => {
    return (
        <Link to='/questions' className='mainButton'>
            {props.value}
        </Link>
    )

};

export default Button;
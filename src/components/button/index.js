import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({ value, route }) => {
    return (
        <Link to={route} className='mainButton'>
            {value}
        </Link>
    )

};

export default Button;
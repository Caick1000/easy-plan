import React from 'react';
import Button from '../components/button';
import '../sass/pages/_choose.scss';

const Choose = () => {
    return (
        <div className='pageWrapper'>
            <h1>Choose your Business Plan project</h1>
            <p className='premium-note'>*complete only for premium accounts</p>
            <Button value='Single-page' />
            <Button value='Complete' />
            <Button value='Custom' />
        </div>
    );
}

export default Choose;
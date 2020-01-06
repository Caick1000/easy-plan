import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../App';
import Choose from '../pages/choose';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Choose} />
        </Switch>
    );
}

export default Main;
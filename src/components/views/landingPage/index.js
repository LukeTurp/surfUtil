import React from 'react';
import { Route } from 'react-router-dom';
import Overview from '../overview';

export default _ => {

    return (
        <Route path="/" exact>
            <Overview />
        </Route>
    )
}
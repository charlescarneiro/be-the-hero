import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './Pages/Logon/index';
import Register from './Pages/Register/index';
import Profile from './Pages/Profile/index';
import NewIncident from './Pages/NewIncident/index';


export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Register path="/register" component={Register} />
            <Profile path="/profile" component={Profile} />
            <NewIncident path="/incidents/new" component={NewIncident} />
        </Switch>
        </BrowserRouter>
    )
}
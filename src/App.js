import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';

const App = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route render={()=>{
                    return (<p>Page not found !!</p>)
                }} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
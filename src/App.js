import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';
import Header from './components/Header/Header.component';
import ListFriend from './components/ListFriend/List-Friend.component';
const App = ()=>{
    return (
        <React.Fragment>
            <Header />
            <ListFriend />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route render={()=>{
                        return (<p>Page not found !!</p>)
                    }} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;
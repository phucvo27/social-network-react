import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage.component';
import UserPage from './pages/UserPage/Userpage.component';
import LoginPage from './pages/LoginPage/LoginPage.component';
import ChatPage from './pages/ChatPage/ChatPage.component';
import Header from './components/Header/Header.component';
import ListFriend from './components/ListFriend/List-Friend.component';
const App = ()=>{
    return (
        <React.Fragment>
            
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={()=>{
                        return (
                            <React.Fragment>
                                <Header title={'Home'}/>
                                <ListFriend />
                                <HomePage />
                            </React.Fragment>
                            
                            )}} />
                    <Route path='/user' render={()=>{
                        return (
                            <React.Fragment>
                                <Header title={'User'}/>
                                <ListFriend />
                                <UserPage />
                            </React.Fragment>
                            
                            )}} /> />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/chat' render={()=>{
                        return (
                            <React.Fragment>
                                <Header title={'Chat'}/>
                                <ChatPage />
                            </React.Fragment>
                            
                            )}} /> />
                    <Route render={()=>{
                        return (<p>Page not found !!</p>)
                    }} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;
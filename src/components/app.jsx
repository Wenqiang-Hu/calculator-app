import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './navBar';
import Calculator from './content/calculator';
import Home from './content/home';
import Login from './content/login';
import NotFound from './content/NotFound';
import Register from './content/register';


class App extends Component {
    state = {  
        is_login: true,
        username: "will",
    } 
    render() { 
        return (
            <React.Fragment>
                <NavBar is_login={this.state.is_login} username={this.state.username} />
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home />} />
                        <Route path='/calculator/home' element={<Home />} />
                        <Route path='/calculator/calculator' element={<Calculator />} />
                        <Route path='/calculator/login' element={<Login />} />
                        <Route path='/calculator/register' element={<Register />} />
                        <Route path='/calculator/404' element={<NotFound />} />
                        <Route path='/calculator/*' element={<Navigate replace to="/calculator/404" />} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;

import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './navBar';
import Calculator from './content/calculator';
import Home from './content/home';
import Login from './content/login';
import NotFound from './content/NotFound';
import Register from './content/register';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/calculator' element={<Calculator />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path='*' element={<Navigate replace to="/404" />} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;

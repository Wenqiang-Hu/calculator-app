import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  } 

    render_calculator = () => {
        if (this.props.is_login){
            return (
                <li className="nav-item">
                    <Link className="navbar-brand" to={"/calculator/calculator"}>Calculator</Link>
                </li>
            )
        }else {
            return "";
        }
    }

    render_user = () =>{
        if (this.props.is_login){
            return (
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <a className="navbar-brand" style={{cursor: "pointer"}}>{this.props.username}</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" style={{cursor: "pointer"}}>Log Out</a>
                    </li>
                </ul>
            )
        }else{
            return (
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to={"/calculator/login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to={"/calculator/register"}>Register</Link>
                    </li>
                </ul>
            )
        }
    }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <Link className="navbar-brand" to={"/calculator"}>Online Tool</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link className="navbar-brand" to={"/calculator/home"}>Home</Link>
                            </li>
                            {this.render_calculator()}
                        </ul>
                        {this.render_user()}
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;
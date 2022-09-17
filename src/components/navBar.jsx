import React, { Component } from 'react';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <a className="navbar-brand" href="#">Online Tool</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Calculator</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    Navbar text with an inline element
                    </span>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;
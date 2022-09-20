import React, { Component } from 'react';
import Base from './base';

class Login extends Component {
    state = {
        error_message: "",
        username: "",
        password: "",
    } 

    handleClick = e => {
        e.preventDefault();

        console.log(this.state);
    }
    render() { 
        return (
            <Base>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-sm-3">
                    <form>
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input onChange={e => {this.setState({username: e.target.value})}} type="username" className="form-control" id="username" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input onChange={e => {this.setState({password: e.target.value})}}type="password" className=" form-control" id="password"/>
                    </div>

                    <div style={{height: "2rem", color: "red"}}>
                        {this.state.error_message}
                    </div>
                    <button onClick={this.handleClick} style={{width: "100%"}} type="submit" className="btn btn-primary">Submit</button>
                </form>
                    </div>
                </div>
            </div>
                
            </Base>
        );
    }
}
 
export default Login;
import React from 'react'
import '../../css/login.css'
import LoginItem from './LoginItem'
import SignupItem from './SignupItem'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

function Login(props) {
    return (
        <>
            <Router>
                <div className="container">
                    <div className="form">
                        <div className="left">
                            <div className="logo">
                                <img src={require("../../images/gla-logo.png")} alt="logo" />
                            </div>
                            <p>{props.aboutText}</p>
                        </div>
                        <Routes>
                            <Route exact path='/' element={<LoginItem heading="Welcome back" forgotpass="Forgot Password?" title="Login your account" btnText="Login" accountAction="Create Account" />}></Route>
                            <Route exact path='/signup' element={<SignupItem heading="Welcome Friend" forgotpass="Forgot Password?" title="Create your account" btnText="Sign Up" accountAction="Already have an Account" />}></Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Login

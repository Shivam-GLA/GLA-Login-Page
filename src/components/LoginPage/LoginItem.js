import React from 'react';
import { Link } from 'react-router-dom';

function LoginItem(props) {
    return (
        <>
            <div className="right">
                <h2 className='top'>{props.heading}</h2>
                <div className="info">
                    <h2 className='heading'>{props.title}</h2>
                    <input className='inputField' type="text" placeholder='University Roll No' />
                    <input className='inputField' type="password" placeholder='Password' />
                    <button className="btn">{props.btnText}</button>
                    <Link to="/signup">{props.accountAction}</Link>
                    <Link id='forgotpass' to="/">{props.forgotpass}</Link>
                </div>
            </div>
        </>
    )
}

export default LoginItem

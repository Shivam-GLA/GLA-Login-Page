import React from 'react'
import { Link } from 'react-router-dom';


function SignupItem(props) {
    return (
        <>
            <div className="right">
                <h2 className='top'>{props.heading}</h2>
                <div className="info">
                    <h2 className='heading'>{props.title}</h2>
                    <input className='inputField' type="text" placeholder='University Roll No' />
                    <input className='inputField' type="password" placeholder='Create Password' />
                    <input className='inputField' type="password" placeholder='Confirm Password' />
                    <button className="btn">{props.btnText}</button>
                    <Link to="/">{props.accountAction}</Link>
                </div>
            </div>
        </>
    )
}

export default SignupItem

import React from 'react'
import { login, resetpassword } from '../../config/routConst'
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
        <div  className="card-wrapper forgot-password-body">
            <form action="" className="card-form">
                <NavLink to={login} className="back-btn"></NavLink>
                <div className="login-title-wrapper">
                    <h1 className="h2 title">Forgot Password</h1>
                    <p className="description">Enter your email id and we will send you a link to reset your password.</p>
                </div>
                <div className="input-wrapper">
                    <label for="">Email Address</label>
                    <input type="email" placeholder="Enter email address" value="markjonson@gmail.com" />
                    <span className="error" style={{display : 'none'}}>Please enter email address</span>
                </div>
                <div className="input-wrapper">
                    <NavLink to={resetpassword} className="solid-green-btn login-btn">Reset Password</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}

export default ForgotPassword
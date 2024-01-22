import React, { useState } from 'react'
import { forgotpassword, login } from '../../config/routConst'
import { NavLink } from 'react-router-dom'

const ResetPassword = () => {
    const [password, setPassword] = useState(false)
    const [password2, setPassword2] = useState(false)
    const [password3, setPassword3] = useState(false)
  return (
    <>
        <div  className="card-wrapper reset-password-body">
            <form action="" className="card-form">
                <NavLink to={forgotpassword} className="back-btn"></NavLink>
                <div className="login-title-wrapper">
                    <h1 className="h2 title">Reset Password</h1>
                    <p className="description">Please enter your temporary password sent to your email in the space below. Then, choose a new password.</p>
                </div>
                <div className="input-wrapper">
                    <label for="">Temporary Password</label>
                    <div className="password-wrapper">
                        <input 
                        type={password===true ? "text":"password"}
                        placeholder="Enter temporary password" value="123456" />
                        <button type="button" className={`toggle-password ${password===true ? "show-hide-password":""}`} onClick={()=>{setPassword(!password)}}></button>
                    </div>
                    <span className="error" style={{display : 'none'}}>Please enter password</span>
                </div>
                <div className="input-wrapper">
                    <label for="">New Password</label>
                    <div className="password-wrapper">
                        <input 
                        type={password2===true ? "text":"password"}
                        placeholder="Enter new password" value="123456" />
                        <button type="button" className={`toggle-password ${password2===true ? "show-hide-password":""}`} onClick={()=>{setPassword2(!password2)}}></button>
                    </div>
                    <span className="error" style={{display : 'none'}}>Please enter password</span>
                </div>
                <div className="input-wrapper">
                    <label for="">Confirm Password</label>
                    <div className="password-wrapper">
                        <input 
                        type={password3===true ? "text":"password"}
                        placeholder="Enter confirm password" value="123456" />
                        <button type="button" className={`toggle-password ${password3===true ? "show-hide-password":""}`} onClick={()=>{setPassword3(!password3)}}></button>
                    </div>
                    <span className="error" style={{display : 'none'}}>Please enter password</span>
                </div>
                <div className="input-wrapper">
                    <NavLink to={login} className="solid-green-btn login-btn">Submit</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}

export default ResetPassword
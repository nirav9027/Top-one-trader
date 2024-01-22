import React, { useState } from 'react'
import { dashboard, forgotpassword, login, signup } from '../../config/routConst'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const [password, setPassword] = useState(false)
  return (
    <>
       <ul className="login-tab-menu">
          <li className="tab-item"><NavLink to={login} className="tab-link active">Login</NavLink></li>
          <li className="tab-item"><NavLink to={signup} className="tab-link">Sign Up</NavLink></li>
        </ul>

        <div  className="login-tab card-wrapper login-body tab-active">
            <form action="" className="card-form">
                <div className="input-wrapper">
                    <label for="">Email Address</label>
                    <input type="email" placeholder="Enter email address" value="Markjonson@gmail.com" />
                    <span className="error" style={{display : 'none'}}>Please enter email address</span>
                </div>
                <div className="input-wrapper">
                    <label for="">Password</label>
                    <div className="password-wrapper">
                        <input
                        type={password===true ? "text":"password"}
                        placeholder="Enter password" value={1234566} />
                        <button type="button" className={`toggle-password ${password===true ? "show-hide-password":""}`} onClick={()=>{setPassword(!password)}}></button>
                    </div>
                    <span className="error" style={{display : 'none'}}>Please enter password</span>
                </div>
                <div className="input-wrapper">
                    <NavLink to={dashboard} className="solid-green-btn login-btn">Login</NavLink>
                </div>
                <div className="redirect-para">
                    <NavLink to={forgotpassword} className="link">Forgot Password?</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login
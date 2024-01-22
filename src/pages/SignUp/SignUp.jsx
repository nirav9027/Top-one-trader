import React, { useState } from 'react'
import { dashboard, login, signup } from '../../config/routConst'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <>
       <ul className="login-tab-menu">
          <li className="tab-item"><NavLink to={login} className="tab-link">Login</NavLink></li>
          <li className="tab-item"><NavLink to={signup} className="tab-link active">Sign Up</NavLink></li>
        </ul>

        <div  className="login-tab card-wrapper sign-up-body tab-active">
            <form action="" className="card-form">
                <div className="input-group-wrapper">
                    <div className="input-wrapper">
                        <label for="">First Name</label>
                        <input type="text" placeholder="Enter first name" value="Mark" />
                        <span className="error" style={{display : 'none'}}>Please enter first name</span>
                    </div>
                    <div className="input-wrapper">
                        <label for="">Last Name</label>
                        <input type="text" placeholder="Enter last name" value="Jonson" />
                        <span className="error" style={{display : 'none'}}>Please enter last name</span>
                    </div>
                </div>
                <div className="input-group-wrapper">
                    <div className="input-wrapper">
                        <label for="">User Name</label>
                        <input type="text" placeholder="Enter user name" value="Markjonson" />
                        <span className="error" style={{display : 'none'}}>Please enter user name</span>
                    </div>
                    <div className="input-wrapper">
                        <label for="">Country</label>
                        <input type="text" placeholder="Enter country" value="USA" />
                        <span className="error" style={{display : 'none'}}>Please enter country</span>
                    </div>
                </div>
                <div className="input-group-wrapper">
                    <div className="input-wrapper">
                        <label for="">Email Address</label>
                        <input type="email" placeholder="Enter email address" value="marjonson@gmail.com" />
                        <span className="error" style={{display : 'none'}}>Please enter email address</span>
                    </div>
                    <div className="input-wrapper">
                        <label for="">Phone Number</label>
                        <input type="email" placeholder="Enter phone number" value="(405) 555-0128" />
                        <span className="error" style={{display : 'none'}}>Please enter phone number</span>
                    </div>
                </div>
                <div className="input-group-wrapper">
                    <div className="input-wrapper">
                        <label for="">Password</label>
                        <div className="password-wrapper">
                            <input type={password===true ? "text":"password"} placeholder="Enter password" value="123456" />
                            <button type="button" className={`toggle-password ${password===true ? "show-hide-password":""}`} onClick={()=>{setPassword(!password)}}></button>
                        </div>
                        <span className="error" style={{display : 'none'}}>Please enter password</span>
                    </div>
                    <div className="input-wrapper">
                        <label for="">Confirm Password</label>
                        <div className="password-wrapper">
                            <input type={confirmPassword===true ? "text":"password"} placeholder="Enter password" value="123456" />
                            <button type="button" className={`toggle-password ${confirmPassword===true ? "show-hide-password":""}`} onClick={()=>{setConfirmPassword(!confirmPassword)}}></button>
                        </div>
                        <span className="error" style={{display : 'none'}}>Please enter password</span>
                    </div>
                </div>
                <div className="input-wrapper checkbox-flex">
                    <label className="checkbox-group">
                        <input type="checkbox" id="Agree-with-TC" />
                        <label for="Agree-with-TC">Agree with T&C</label>
                    </label>
                    <label className="checkbox-group">
                        <input type="checkbox" id="refund-policy" />
                        <label for="refund-policy">Agree with Refund Policy</label>
                    </label>
                    <label className="checkbox-group">
                        <input type="checkbox" id="privacy-policy" />
                        <label for="privacy-policy">Agree with Privacy Policy</label>
                    </label>
                    <span className="error" style={{display : 'none'}}>Please select policy</span>
                </div>
                <div className="input-wrapper">
                    <NavLink to={dashboard} className="solid-green-btn login-btn" >Sign Up</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}

export default SignUp
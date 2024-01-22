import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteLogo from '../../assets/images/site-logo.svg'

const LoginLayout = () => {
  return (
    <>
      <main className='login-flow'>
        <div className='login-wrapper'>
          <div className="login-logo">
            <img src={SiteLogo} alt="logo" />
          </div>
          <Outlet/> 
        </div>
      </main>
    </>
  )
}

export default LoginLayout
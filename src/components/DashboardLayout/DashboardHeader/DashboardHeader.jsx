import React, { useState } from 'react'
import DownArrow from '../../../assets/images/icon-down-arrow.svg'
import { login, newchallenge } from '../../../config/routConst'
import { NavLink, useLocation, useOutletContext } from 'react-router-dom'
import { SidebarContent } from '../DashboardSideBar'

const DashboardHeader = () => {
  const {pathname}= useLocation()
   let title =SidebarContent.find((e)=>e.URL.replaceAll("/","") ===pathname.replaceAll("/","") )?.title || "Dashboard"
  const [Dropdown, setDropdown] = useState(false)

  const AddClass = () =>{
    document.body.classList.toggle('sidebar-collapse');
  }
  return (
    <>
      <header className="admin-header">
        <div className="header-left-content">
          <div className="toggle-btn" onClick={AddClass}>
            {/* <img src="./assets/images/icon-burger.svg" alt="toggle-btn-icon" />  */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L4 6" stroke="black" stroke-width="1.5" stroke-linecap="round" />
              <path d="M20 12L4 12" stroke="black" stroke-width="1.5" stroke-linecap="round" />
              <path d="M20 18H4" stroke="black" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>
          <h2 className="p-16">{title}</h2>
        </div>
        <div className="header-right-content">
          <NavLink to={newchallenge} className="challange-btn">
            <span className="icon">
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.43176" y="1.5" width="15" height="15" rx="3.75" stroke="white" stroke-width="1.125" />
                <path d="M6.93176 12.75L6.93176 10.5" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.93176 12.75L9.93176 5.25" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.9318 12.75L12.9318 7.5" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span className="text">New Challenge</span>
          </NavLink>
          <div className={`header-dropdown ${Dropdown===true ? 'show':''}`} onClick={()=>{setDropdown(!Dropdown)}} onMouseLeave={()=>{setDropdown(false)}}>
            <div className="user-image">
              Mk
            </div>
            <a href="javascript:;" className="dropdown-link">Mark Jon.</a>
            <img src={DownArrow} alt="icon-down-arrow" className="down-arrow" />
              <div className="header-dropdown-menu">
                <ul>
                  <li>
                    <NavLink to={login}>Logout</NavLink>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default DashboardHeader
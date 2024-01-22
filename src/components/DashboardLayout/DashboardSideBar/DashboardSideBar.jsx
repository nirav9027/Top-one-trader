import React from 'react'
import SiteLogo from '../../../assets/images/site-logo.svg'
import SiteLogoCollapse from '../../../assets/images/topone-trader-logo.svg'
import IconColse from '../../../assets/images/icon-cross.svg'
import { affiliateportal, announcements, competitions, contracts, dashboard, economiccalendar, leaderboard, profile, rules, utilities, withdrawals } from '../../../config/routConst'
import { Link, NavLink } from 'react-router-dom'
const SidebarContent = [
  {
    iconName : "dashboard-icon",
    title : "Dashboard",
    URL : dashboard,
  },
  {
    iconName : "profile-icon",
    title : "Profile",
    URL : profile,
  },
  {
    iconName : "contracts-icon",
    title : "Contracts",
    URL : contracts,
  },
  {
    iconName : "rules-icon",
    title : "Rules",
    URL : rules,
  },
  {
    iconName : "withdrawals-icon",
    title : "Withdrawals",
    URL : withdrawals,
  },
  {
    iconName : "leaderboard-icon",
    title : "Leaderboard",
    URL : leaderboard,
  },
  {
    iconName : "economic-calendar-icon",
    title : "Economic Calendar",
    URL : economiccalendar,
  },
  {
    iconName : "announcements-icon",
    title : "Announcements",
    URL : announcements,
  },
  {
    iconName : "competitions-icon",
    title : "Competitions",
    URL : competitions,
  },
  {
    iconName : "affiliate-icon",
    title : "Affiliate Portal",
    URL : affiliateportal,
  },
  {
    iconName : "utilities-icon",
    title : "Utilities",
    URL : utilities,
  }
]
const DashboardSideBar = () => {
  const AddClass = () =>{
    document.body.classList.remove('sidebar-collapse');
  }

  return (
    <>
      <aside className="sidebar">
        <span className='menu-cross' onClick={AddClass}><img src={IconColse} alt="icon-cross" className="menu-cross-icon" /></span>
        <div className="trader-logo">
          <Link to={dashboard} className="site-logo" onClick={AddClass}>
            <img src={SiteLogo} alt="Site-logo" className="main-logo" />
            <img src={SiteLogoCollapse} alt="Site-logo" className="collapse-logo" />
          </Link>
        </div>
        <div className="sidebar-menu">
          <ul>
            {SidebarContent?.map((list , i) =>{
                return (
                  <>
                    <li key={i}>
                      <NavLink to={list.URL} className="sidebar-menu-link" title={list.title} onClick={AddClass}>
                        <i className={list.iconName}></i>
                        <span>{list.title}</span>
                      </NavLink>
                    </li>
                  </>
                )
              })
            }
          </ul>
        </div >
      </aside >

    </>
  )
}

export default DashboardSideBar
export {SidebarContent}
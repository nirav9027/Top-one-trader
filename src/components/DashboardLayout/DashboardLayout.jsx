import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardFooter from './DashboardFooter'
import DashboardSideBar from './DashboardSideBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = ({children}) => {
  return (
    <>
      <DashboardHeader />
        <main className='admin-content'>
          <DashboardSideBar/>
          <Outlet/>
        </main>
      <DashboardFooter />
    </>
  )
}

export default DashboardLayout
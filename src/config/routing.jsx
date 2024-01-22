import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import { affiliateportal, announcements, competitions, contracts, dashboard, economiccalendar, forgotpassword, home, leaderboard, login, newchallenge, profile, resetpassword, rules, signup, utilities, viewdetails, withdrawals } from './routConst'
import DashboardLayout from '../components/DashboardLayout/DashboardLayout'
import Login from '../pages/Login/Login'
import LoginLayout from '../components/LoginLayout'
import SignUp from '../pages/SignUp/SignUp'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import Profile from '../pages/Profile/Profile'
import Contracts from '../pages/Contracts'
import Rules from '../pages/Rules/Rules'
import Withdrawals from '../pages/Withdrawals/Withdrawals'
import Leaderboard from '../pages/Leaderboard/Leaderboard'
import EconomicCalendar from '../pages/EconomicCalendar/EconomicCalendar'
import Announcements from '../pages/Announcements/Announcements'
import Competitions from '../pages/Competitions/Competitions'
import AffiliatePortal from '../pages/AffiliatePortal/AffiliatePortal'
import Utilities from '../pages/Utilities/Utilities'
import ViewDetails from '../pages/Announcements/ViewDetails/ViewDetails'
import NewChallenge from '../pages/NewChallenge/NewChallenge'

const Routing = () => {
  return (
    <>

        <Routes >
          <Route path='/' element={<LoginLayout/>}>
            <Route index element={<Login />} />
            <Route path={signup} element={<SignUp />} />
            <Route path={forgotpassword} element={<ForgotPassword />} />
            <Route path={resetpassword} element={<ResetPassword />} />
          </Route>
          <Route element={<DashboardLayout />} >
            <Route  path={dashboard} element={<Dashboard />}   />
            <Route path={profile} element={<Profile />} />
            <Route path={contracts} element={<Contracts />} />
            <Route path={rules} element={<Rules />} />
            <Route path={withdrawals} element={<Withdrawals />} />
            <Route path={leaderboard} element={<Leaderboard />} />
            <Route path={economiccalendar} element={<EconomicCalendar />} />
            <Route path={announcements} element={<Announcements />} />
            <Route path={viewdetails} element={<ViewDetails />} />
            <Route path={competitions} element={<Competitions />} />
            <Route path={affiliateportal} element={<AffiliatePortal />} />
            <Route path={utilities} element={<Utilities />} />
            <Route path={newchallenge} element={<NewChallenge />} />
          </Route>
        </Routes>
    </>
  )
}

export default Routing
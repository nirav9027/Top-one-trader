import React from 'react'
import { Link } from 'react-router-dom'
import { announcements } from '../../../config/routConst'
import DashboardImage1 from "../../../assets/images/view-details-dashboard.png";

const ViewDetails = () => {
  return (
    <div className='announcements-view-details-page'>
      <ul className='breadcrumb'>
        <li className='breadcrumb-list'>
          <Link className="breadcrumb-link" to={announcements}>Announcement</Link>
        </li>
        <li className='breadcrumb-list'>
          <Link className="breadcrumb-link"> View Details</Link>
        </li>
      </ul>
        <div className='view-details-wrapper'>
          <div className='view-detail-image-box'>
          <div className="community-image-wrapper">
            <span>
              New <br /> Community
            </span>
            <div className="image-box">
              <img src={DashboardImage1} alt="dashboard-image" />
            </div>
          </div>
          </div>
          <div className='content'>
            <h5>Introducing Topone trader Official Community On Your Dashboard</h5>
            <p className="date">
              <i className="date-icon"></i> Dec 19, 2023.
            </p>
            <p>SCOPE OF WORK: In the event of any discrepancies between the terms of the Trader Agreement and the Scope of Work below, the Scope of Work shall control the following sections:1) Services ProvidedUpon acceptance of Trader’s qualification after successful completion of an assessment or evaluation program, Top One Trader (the “Company”) shall create and fund account (the “Account”) and provide the Trader with the credentials to access and trade the Account.2) The AccountTrader will need to provide the Company with certain compliance documents required by Trader’s country of residence to work as an independent contractor. These documents are typically a valid photo ID and address verification document (bank statement or utility bill dated no more than 90 days prior).Upon creation of the Account, Trader will receive an email (the “Welcome Email”) setting forth the following details:• Account Login Credentials• Allocated Capital• Trader Portal Credentials (which will contain the Risk Management and Program Rules)Trader accepts full responsibility for monitoring the Account to ensure that trades have been executed correctly and to ensure that no unauthorized trading is occurring in the Account. Trader may not give control over the Account to any other person or entity and Trader may not control the Account of any other Company authorized trader. Trader shall maintain the confidentiality of the Account credentials and prevent the unauthorized use thereof at all times. If Trader becomes aware of any deliberate or inadvertent disclosure, loss, theft or unauthorized use of the Account credentials, Trader must notify the Company immediately and request a new password.To maintain the Account and continue as an authorized trader of the Company, Trader must, at all times, adhere to the Risk Management and Program Rules. The Risk Management and Program Rules are an integral part of this Agreement. It is Trader’s responsibility as Trader to carefully read these Risk Management and Program Rules and to inform the Company of any questions or objections that Trader may have regarding them before entering a trade in the Account. By entering orders in the Account, Trader agrees, represents, warrants and certifies that Trader understands and accepts these Risk Management and Program Rules, as they are set forth here and as may be amended from time to time by the Company and communicated to Trader. Any violation thereof will result in the closing of Trader’s account and termination as an authorized trader of the Company. Additionally, the following actions may also result in the immediate closing of Trader’s account:• Exploiting errors or latency in the pricing and/or platform(s) provided by the Broker• Utilizing non-public and/or insider information• Front-running of trades placed elsewhere• Trading in any way that jeopardizes the relationship Account has with a broker or may result in the canceling of trades• Trading in any way that creates regulatory issues for the Broker• Utilizing any third-party strategy, off-the-shelf strategy or one marketed to pass assessment accounts • Utilizing one strategy to pass an assessment and then utilizing a different strategy in a funded account, as determined by the Company in cooperation with Top One Trader in their discretion• Holding a Single Share Equity CFD position into an earnings release pertaining to that underlying equity. To avoid being in breach of this rule, you must close all such Single Share Equity CFD positions by 3:50 pm Eastern Time on the day of the release, if an aftermarket release, or on the preceding day, if a before market open release. Violation of this rule will constitute an immediate, hard breach of your account and any gain or loss on said position will be removed from any profit calculations.3) Profit Splits & Withdrawals As an authorized trader for the Company, the Company agrees to pay Trader the percentage of profit generated in the account, as set forth herein. Withdrawal requests of profits will be processed on demand, but can be requested no more than once every 30 days. Withdrawals will be paid out via our accounts pro</p>
          </div>
        </div>
    </div>
  )
}

export default ViewDetails
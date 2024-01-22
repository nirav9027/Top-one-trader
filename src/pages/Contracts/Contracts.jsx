import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { contracts } from '../../config/routConst'

const Contracts = () => {
  const [Modal, setModal] = useState(false)
  return (
    <>
      <div className='competitions-wrapper'>
        <div className='admin-inner-card'>
          <div className="custom-table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title Name</th>
                        <th>Account</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                    <tr>
                        <td>19-12-2023</td>
                        <td>C13328-0-Brycen Coffman Affiliate</td>
                        <td>81210225</td>
                        <td>Affiliate</td>
                        <td><div className="table-btn red-btn">Pending</div></td>
                        <td><div className="table-btn view-btn" onClick={()=>{setModal(true)}}>View & Sign</div></td>
                    </tr>
                </tbody>
            </table>

          </div>
          <div className="custom-pagination-wrapper">
              <p>Showing 1 to 5 of 60 entries</p>
              <ul className="pagination">
                  <li>
                      <a href="javascript:void(0)" className="prev-btn">
                          <i className='prev-btn-icon'></i>
                      </a>
                  </li>
                  <li >
                      <a href="javascript:void(0)" className="active">1</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">2</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)">3</a>
                  </li>
                  <li>
                      <a href="javascript:void(0)" className="next-btn">
                          <i className='next-btn-icon'></i>
                          </a>
                  </li>
              </ul>
          </div>

          {/* Contracts Modal */}
          <div className={`contracts-modal ${Modal===true? "show" : " "}`}>
              <div className="modal-inner">
                <div className="modal-body">
                  <h2 className="title">C13328 - Brycen Coffman</h2>
                  <div className="description-body">
                      <p>SCOPE OF WORK: In the event of any discrepancies between the terms of the Trader Agreement and the Scope of Work below, the Scope of Work shall control the following sections:1) Services ProvidedUpon acceptance of Trader’s qualification after successful completion of an assessment or evaluation program, Top One Trader (the “Company”) shall create and fund account (the “Account”) and provide the Trader with the credentials to access and trade the Account.2) The AccountTrader will need to provide the Company with certain compliance documents required by Trader’s country of residence to work as an independent contractor. These documents are typically a valid photo ID and address verification document (bank statement or utility bill dated no more than 90 days prior).Upon creation of the Account, Trader will receive an email (the “Welcome Email”) setting forth the following details:• Account Login Credentials• Allocated Capital• Trader Portal Credentials (which will contain the Risk Management and Program Rules)Trader accepts full responsibility for monitoring the Account to ensure that trades have been executed correctly and to ensure that no unauthorized trading is occurring in the Account. Trader may not give control over the Account to any other person or entity and Trader may not control the Account of any other Company authorized trader. Trader shall maintain the confidentiality of the Account credentials and prevent the unauthorized use thereof at all times. If Trader becomes aware of any deliberate or inadvertent disclosure, loss, theft or unauthorized use of the Account credentials, Trader must notify the Company immediately and request a new password.To maintain the Account and continue as an authorized trader of the Company, Trader must, at all times, adhere to the Risk Management and Program Rules. The Risk Management and Program Rules are an integral part of this Agreement. It is Trader’s responsibility as Trader to carefully read these Risk Management and Program Rules and to inform the Company of any questions or objections that Trader may have regarding them before entering a trade in the Account. By entering orders in the Account, Trader agrees, represents, warrants and certifies that Trader understands and accepts these Risk Management and Program Rules, as they are set forth here and as may be amended from time to time by the Company and communicated to Trader. Any violation thereof will result in the closing of Trader’s account and termination as an authorized trader of the Company. Additionally, the following actions may also result in the immediate closing of Trader’s account:• Exploiting errors or latency in the pricing and/or platform(s) provided by the Broker• Utilizing non-public and/or insider information• Front-running of trades placed elsewhere• Trading in any way that jeopardizes the relationship Account has with a broker or may result in the canceling of trades• Trading in any way that creates regulatory issues for the Broker• Utilizing any third-party strategy, off-the-shelf strategy or one marketed to pass assessment accounts • Utilizing one strategy to pass an assessment and then utilizing a different strategy in a funded account, as determined by the Company in cooperation with Top One Trader in their discretion• Holding a Single Share Equity CFD position into an earnings release pertaining to that underlying equity. To avoid being in breach of this rule, you must close all such Single Share Equity CFD positions by 3:50 pm Eastern Time on the day of the release, if an aftermarket release, or on the preceding day, if a before market open release. Violation of this rule will constitute an immediate, hard breach of your account and any gain or loss on said position will be removed from any profit calculations.3) Profit Splits & Withdrawals As an authorized trader for the Company, the Company agrees to pay Trader the percentage of profit generated in the account, as set forth herein. Withdrawal requests of profits will be processed on demand, but can be requested no more than once every 30 days. Withdrawals will be paid out via our accounts processing affiliate, Deel. Upon processing of a withdrawal request, the Company shall also withdraw its share of the trading profits from the account.For example, let’s assume the following:• Beginning account balance - $100,000• Profit split 75%/25% in favor of Trader.• Account equity one month later is $120,000Trader requests a withdrawal of $10,000. $10,000 in profit will be withdrawn from the Account; Trader’s $7,500 and the Company’s $2,500. The new Account Balance High Water Mark will be adjusted back to $110,000 for purposes of adherence to risk management and program rules going forward. Please note that upon requesting a withdrawal, Trader’s maximum trailing drawdown equity breach level will automatically lock in at Trader’s starting balance. Any profits above the highwater mark in the Account after a program rule is violated, will be distributed according to the established profit split.4) Transmission of OrdersThe Company shall have no responsibility for delays in the transmission of orders due to disruption, failure or malfunction of communications facilities and shall not be liable for any claims, losses, damages, costs or expenses, including attorneys’ fees, to any person or entity arising other than as a direct result of the Company’s gross negligence.5) Position & Trading LimitsThe Company reserves the right to limit the number of open positions that Trader may enter or maintain in the Account. The Company or the broker which the Company designates reserve the right to refuse to accept any order. 6) Trading HoursAll references to the Company hours of trading are in U.S. Eastern Time (“ET”) using a 12-hour format. Access to the market is typically available from 5:00 PM ET on Sunday to 4:00 PM ET on Friday, but the Company reserves the right to suspend or modify its trading hours at any time and in such an event will inform clients in advance on a best-efforts basis of any changes in its operating hours. Trading hours by contract type may vary.</p>
                  </div>
                  <label className='checkbox-group'>
                    <input type="checkbox" id="Disclosure" />
                    <label for="Disclosure">I Agree to use electronic records and signatures. <Link to={contracts}>Disclosure</Link></label>
                  </label>
                  <div className="input-group">
                    <label>Please enter verification Code <Link to={contracts}>(Resent Verification code)</Link></label>
                    <input type="text" defaultValue='456987'/>
                    <span className="error" style={{display : 'none'}}>Please enter code </span>
                  </div>
                  <div className="modal-btn-group">
                    <button type="button" class="solid-green-btn modal-btn" onClick={()=>{setModal(false)}}>Agree & Sign</button>
                    <button type="button" class="border-grey-btn modal-btn" onClick={()=>{setModal(false)}}>Cancel</button>
                  </div>
                </div>
              </div>
          </div>
          {/* End Contracts Modal */}
        </div>
      </div>
    </>
  )
}

export default Contracts
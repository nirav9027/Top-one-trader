import React, { useState } from 'react'
import OfferImage from '../../assets/images/offer-image.png'

const Profile = () => {
  const [isActive, setisActive] = useState(1);
  const [Accounts, setAccounts] = useState(1);
  const [Show, setShow] = useState(false);
  const [password, setPassword] = useState(false)
  const [password2, setPassword2] = useState(false)
  const [password3, setPassword3] = useState(false)

  return (
    <>
      <div className="profile-wrapper">
        {/* Profile Sidebar */}
        <div  className="profile-sidebar">
            <ul className="profile-tab-menu">
                <li className="profile-tab-item"><a onClick={()=>{setisActive(1)}} className={`profile-tab-link ${isActive===1?"active":""}`}>Basic Information</a></li>
                <li className="profile-tab-item"><a onClick={()=>{setisActive(2)}} className={`profile-tab-link ${isActive===2?"active":""}`}>Change Password</a></li>
                <li className="profile-tab-item"><a onClick={()=>{setisActive(3)}} className={`profile-tab-link ${isActive===3?"active":""}`}>Accounts</a></li>
                <li className="profile-tab-item"><a onClick={()=>{setisActive(4)}} className={`profile-tab-link ${isActive===4?"active":""}`}>Order History</a></li>
            </ul>
        </div>
        {/* End Profile Sidebar */}

        {/* Profile All Tab body */}
        <div className="profile-tab-body">
            {/* Basic Information Tab */}
            <div className={`profile-tab ${isActive===1?"tab-active" :""}`}>
              <form action="" className='tab-form'>
                <div className="tab-head">
                  <h2 className="title">Basic Information</h2>
                  {Show===true ?
                    <button type="button" className="solid-green-btn form-btn" onClick={()=>{setShow(!Show)}}>Save</button>
                  :
                    <button type="button" className="solid-green-btn form-btn" onClick={()=>{setShow(!Show)}}>Edit Profile</button>
                  }
                </div>

                {Show===true ?
                    <>
                      {/* Edite Form Basic Information*/}
                      <div className='edite-form-body form-body'>
                        <div className="input-group-wrapper">
                          <div className="input-wrapper">
                            <label>First Name</label>
                            <input type="text" placeholder='Enter first name' defaultValue='Mark' />
                            <span className="error" style={{display : 'none'}}>Please enter first name</span>
                          </div>
                          <div className="input-wrapper">
                            <label>Last Name</label>
                            <input type="text" placeholder='Enter last name' defaultValue='Jonson' />
                            <span className="error" style={{display : 'none'}}>Please enter last name</span>
                          </div>
                          <div className="input-wrapper">
                            <label>User Name</label>
                            <input type="text" placeholder='Enter user name' defaultValue='Markjonson' />
                            <span className="error" style={{display : 'none'}}>Please enter user name</span>
                          </div>
                          <div className="input-wrapper">
                            <label>Email Address</label>
                            <input type="text" placeholder='Enter email address' defaultValue='markjonson@gmail.com' />
                            <span className="error" style={{display : 'none'}}>Please enter email address</span>
                          </div>
                          <div className="input-wrapper">
                            <label>Phone Number</label>
                            <input type="number" placeholder='Enter phone number' defaultValue='3085550121' />
                            <span className="error" style={{display : 'none'}}>Please enter phone number</span>
                          </div>
                        </div>

                        <h2 className="title">Address Information</h2>
                        <div className="input-wrapper">
                          <label>Address</label>
                          <input type="text" placeholder='Enter address' defaultValue='4517 Washington Ave. Manchester, Kentucky 39495' />
                          <span className="error" style={{display : 'none'}}>Please enter address</span>
                        </div>
                        <div className="input-group-wrapper">
                          <div className="input-wrapper">
                            <label>Country</label>
                            <select name="" id="">
                              <option value="">USA</option>
                              <option value="">UK</option>
                              <option value="">IND</option>
                            </select>
                            <span className="error" style={{display : 'none'}}>Please select country</span>
                          </div>
                          <div className="input-wrapper">
                            <label>State</label>
                            <select name="" id="">
                              <option value="">Texas</option>
                              <option value="">Texas 2</option>
                              <option value="">Texas 3</option>
                            </select>
                            <span className="error" style={{display : 'none'}}>Please select state</span>
                          </div>
                          <div className="input-wrapper">
                            <label>City</label>
                            <select name="" id="">
                              <option value="">Celina</option>
                              <option value="">Celina 2</option>
                              <option value="">Celina 3</option>
                            </select>
                            <span className="error" style={{display : 'none'}}>Please select city</span>
                          </div>
                          <div className="input-wrapper">
                            <label>Zip Code</label>
                            <select name="" id="">
                              <option value="">75009</option>
                              <option value="">75001</option>
                              <option value="">75004</option>
                            </select>
                            <span className="error" style={{display : 'none'}}>Please select zip code</span>
                          </div>
                        </div>

                        <h2 className="title">Social Media Handles</h2>
                        <div className="input-group-wrapper">
                          <div className="input-wrapper">
                            <label>Facebook Link</label>
                            <input type="text" placeholder='Enter facebook link' defaultValue='htt;facebook/username' />
                            <span className="error" style={{display : 'none'}}>Please enter facebook link</span>
                          </div>
                          <div className="input-wrapper">
                            <label>Instagram Link</label>
                            <input type="text" placeholder='Enter instagram link' defaultValue='htt;instagram/username' />
                            <span className="error" style={{display : 'none'}}>Please enter instagram link</span>
                          </div>
                          <div className="input-wrapper">
                            <label>YouTube Link</label>
                            <input type="text" placeholder='Enter youTube link' defaultValue='htt;youtube/username' />
                            <span className="error" style={{display : 'none'}}>Please enter youTube link</span>
                          </div>
                          <div className="input-wrapper">
                            <label>TikTok Link</label>
                            <input type="text" placeholder='Enter tikTok link' defaultValue='htt;tiktok/username' />
                            <span className="error" style={{display : 'none'}}>Please enter tikTok link</span>
                          </div>
                        </div>
                      </div>
                      {/* End Edite Form Basic Information*/}
                    </>
                  :
                    <>
                      {/* View Form Basic Information*/}
                      <div className='view-form-body form-body'>
                          <div className="input-group-wrapper">
                            <div className="input-wrapper">
                              <label>First Name</label>
                              <p>Mark</p>
                            </div>
                            <div className="input-wrapper">
                              <label>Last Name</label>
                              <p>Jonson</p>
                            </div>
                            <div className="input-wrapper">
                              <label>User Name</label>
                              <p>Markjonson</p>
                            </div>
                            <div className="input-wrapper">
                              <label>Email Address</label>
                              <p>markjonson@gmail.com</p>
                            </div>
                            <div className="input-wrapper">
                              <label>Phone Number</label>
                              <p>3085550121</p>
                            </div>
                          </div>

                          <h2 className="title">Address Information</h2>
                          <div className="input-wrapper">
                            <label>Address</label>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                          </div>
                          <div className="input-group-wrapper">
                            <div className="input-wrapper">
                              <label>Country</label>
                              <p>USA</p>
                            </div>
                            <div className="input-wrapper">
                              <label>State</label>
                              <p>Texas</p>
                            </div>
                            <div className="input-wrapper">
                              <label>City</label>
                              <p>Celina</p>
                            </div>
                            <div className="input-wrapper">
                              <label>Zip Code</label>
                              <p>75009</p>
                            </div>
                          </div>

                          <h2 className="title">Social Media Handles</h2>
                          <div className="input-group-wrapper">
                            <div className="input-wrapper">
                              <label>Facebook Link</label>
                              <p>htt;facebook/username <span className='copy'></span></p>
                            </div>
                            <div className="input-wrapper">
                              <label>Instagram Link</label>
                              <p>htt;instagram/username <span className='copy'></span></p>
                            </div>
                            <div className="input-wrapper">
                              <label>YouTube Link</label>
                              <p>htt;youtube/username <span className='copy'></span></p>
                            </div>
                            <div className="input-wrapper">
                              <label>TikTok Link</label>
                              <p>htt;tiktok/username <span className='copy'></span></p>
                            </div>
                          </div>
                      </div>
                      {/* End View Form Basic Information*/}
                    </>
                  }
              </form>
            </div>
            {/* End Basic Information Tab */}

            {/* Change Password Tab */}
            <div className={`profile-tab ${isActive===2?"tab-active" :""}`}>
                <form action="" className='tab-form'>
                  <div className="tab-head">
                    <h2 className="title"> Change Password</h2>
                    <button type="button" className="solid-green-btn form-btn">Save New Password</button>
                  </div>
                  <div className='form-body'>
                      <div className="input-group-wrapper">
                        <div className="input-wrapper">
                          <label>Old Password</label>
                          <div className="password-wrapper">
                            <input
                              type={password===true ? "text":"password"}
                              placeholder="Enter old password" value="123456" />
                              <button type="button" className={`toggle-password ${password===true ? "show-hide-password":""}`} onClick={()=>{setPassword(!password)}}></button>
                          </div>
                          <span className="error" style={{display : 'none'}}>Please enter password</span>
                        </div>
                        <div className="input-wrapper">
                          <label>New Password</label>
                          <div className="password-wrapper">
                            <input
                              type={password2===true ? "text":"password"}
                              placeholder="Enter new password" value="123456" />
                              <button type="button" className={`toggle-password ${password2===true ? "show-hide-password":""}`} onClick={()=>{setPassword2(!password2)}}></button>
                          </div>
                          <span className="error" style={{display : 'none'}}>Please enter password</span>
                        </div>
                        <div className="input-wrapper">
                          <label>Confirm Password</label>
                          <div className="password-wrapper">
                            <input
                              type={password3===true ? "text":"password"}
                              placeholder="Enter confirm password" value="123456" />
                              <button type="button" className={`toggle-password ${password3===true ? "show-hide-password":""}`} onClick={()=>{setPassword3(!password3)}}></button>
                          </div>
                          <span className="error" style={{display : 'none'}}>Please enter password</span>
                        </div>
                      </div>
                  </div>
                </form>
            </div>
            {/* End Change Password Tab */}

            {/* Accounts Tab */}
            <div className={`profile-tab ${isActive===3?"tab-active" :""}`}>
                <ul className="accounts-tab-menu">
                    <li className="accounts-tab-item"><a onClick={()=>{setAccounts(1)}} className={`accounts-tab-link ${Accounts===1?"active":""}`}>All</a></li>
                    <li className="accounts-tab-item"><a onClick={()=>{setAccounts(2)}} className={`accounts-tab-link ${Accounts===2?"active":""}`}>Active</a></li>
                    <li className="accounts-tab-item"><a onClick={()=>{setAccounts(3)}} className={`accounts-tab-link ${Accounts===3?"active":""}`}>Passed</a></li>
                    <li className="accounts-tab-item"><a onClick={()=>{setAccounts(4)}} className={`accounts-tab-link ${Accounts===4?"active":""}`}>Breached</a></li>
                </ul>
                <div className={`accounts-tab ${Accounts===1?"tab-active" :""}`}>
                    <div className="custom-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Account</th>
                                    <th>Order ID</th>
                                    <th>Plan</th>
                                    <th>Starting Balance</th>
                                    <th>Start Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9856856</td>
                                    <td>XAUUSDx</td>
                                    <td>Top One Trader-challenge 125-MT4</td>
                                    <td>$125,000.00</td>
                                    <td>19-12-2023</td>
                                    <td><div className="table-btn green-btn">Active</div></td>
                                </tr>
                                <tr>
                                    <td>9856856</td>
                                    <td>XAUUSDx</td>
                                    <td>Top One Trader-challenge 125-MT4</td>
                                    <td>$125,000.00</td>
                                    <td>19-12-2023</td>
                                    <td><div className="table-btn red-btn">Passed</div></td>
                                </tr>
                                <tr>
                                    <td>9856856</td>
                                    <td>XAUUSDx</td>
                                    <td>Top One Trader-challenge 125-MT4</td>
                                    <td>$125,000.00</td>
                                    <td>19-12-2023</td>
                                    <td><div className="table-btn dark-green-btn">Breached</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="custom-pagination-wrapper">
                        <p>Showing 1 to 5 of 60 entries</p>
                        <ul className="pagination">
                            <li>
                                <a href="javascript:void(0)" className="prev-btn">
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.658778 4.48017C0.557238 4.38646 0.500126 4.25932 0.5 4.12671V3.87329C0.501663 3.74097 0.558543 3.61435 0.658778 3.51983L4.36842 0.098634C4.43617 0.0355077 4.52841 0 4.62463 0C4.72085 0 4.81308 0.0355077 4.88084 0.098634L5.39326 0.572133C5.46115 0.633597 5.4994 0.717724 5.4994 0.805548C5.4994 0.893372 5.46115 0.977499 5.39326 1.03896L2.18161 4L5.39326 6.96104C5.46157 7.02365 5.5 7.10888 5.5 7.19779C5.5 7.2867 5.46157 7.37193 5.39326 7.43454L4.88084 7.90137C4.81308 7.96449 4.72085 8 4.62463 8C4.52841 8 4.43617 7.96449 4.36842 7.90137L0.658778 4.48017Z" fill="#666666"/>
                                    </svg>
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
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.34122 4.48017C5.44276 4.38646 5.49987 4.25932 5.5 4.12671V3.87329C5.49834 3.74097 5.44146 3.61435 5.34122 3.51983L1.63158 0.098634C1.56383 0.0355077 1.47159 0 1.37537 0C1.27915 0 1.18692 0.0355077 1.11916 0.098634L0.606741 0.572133C0.538854 0.633597 0.500597 0.717724 0.500597 0.805548C0.500597 0.893372 0.538854 0.977499 0.606741 1.03896L3.81839 4L0.606741 6.96104C0.538426 7.02365 0.5 7.10888 0.5 7.19779C0.5 7.2867 0.538426 7.37193 0.606741 7.43454L1.11916 7.90137C1.18692 7.96449 1.27915 8 1.37537 8C1.47159 8 1.56383 7.96449 1.63158 7.90137L5.34122 4.48017Z" fill="#666666"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className={`accounts-tab ${Accounts===2?"tab-active" :""}`}>
                    <div className="custom-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Account</th>
                                    <th>Order ID</th>
                                    <th>Plan</th>
                                    <th>Starting Balance</th>
                                    <th>Start Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9856856</td>
                                    <td>XAUUSDx</td>
                                    <td>Top One Trader-challenge 125-MT4</td>
                                    <td>$125,000.00</td>
                                    <td>19-12-2023</td>
                                    <td><div className="table-btn green-btn">Active</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="custom-pagination-wrapper">
                        <p>Showing 1 to 5 of 60 entries</p>
                        <ul className="pagination">
                            <li>
                                <a href="javascript:void(0)" className="prev-btn">
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.658778 4.48017C0.557238 4.38646 0.500126 4.25932 0.5 4.12671V3.87329C0.501663 3.74097 0.558543 3.61435 0.658778 3.51983L4.36842 0.098634C4.43617 0.0355077 4.52841 0 4.62463 0C4.72085 0 4.81308 0.0355077 4.88084 0.098634L5.39326 0.572133C5.46115 0.633597 5.4994 0.717724 5.4994 0.805548C5.4994 0.893372 5.46115 0.977499 5.39326 1.03896L2.18161 4L5.39326 6.96104C5.46157 7.02365 5.5 7.10888 5.5 7.19779C5.5 7.2867 5.46157 7.37193 5.39326 7.43454L4.88084 7.90137C4.81308 7.96449 4.72085 8 4.62463 8C4.52841 8 4.43617 7.96449 4.36842 7.90137L0.658778 4.48017Z" fill="#666666"/>
                                    </svg>
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
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.34122 4.48017C5.44276 4.38646 5.49987 4.25932 5.5 4.12671V3.87329C5.49834 3.74097 5.44146 3.61435 5.34122 3.51983L1.63158 0.098634C1.56383 0.0355077 1.47159 0 1.37537 0C1.27915 0 1.18692 0.0355077 1.11916 0.098634L0.606741 0.572133C0.538854 0.633597 0.500597 0.717724 0.500597 0.805548C0.500597 0.893372 0.538854 0.977499 0.606741 1.03896L3.81839 4L0.606741 6.96104C0.538426 7.02365 0.5 7.10888 0.5 7.19779C0.5 7.2867 0.538426 7.37193 0.606741 7.43454L1.11916 7.90137C1.18692 7.96449 1.27915 8 1.37537 8C1.47159 8 1.56383 7.96449 1.63158 7.90137L5.34122 4.48017Z" fill="#666666"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className={`accounts-tab ${Accounts===3?"tab-active" :""}`}>
                    <div className="custom-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Account</th>
                                    <th>Order ID</th>
                                    <th>Plan</th>
                                    <th>Starting Balance</th>
                                    <th>Start Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9856856</td>
                                    <td>XAUUSDx</td>
                                    <td>Top One Trader-challenge 125-MT4</td>
                                    <td>$125,000.00</td>
                                    <td>19-12-2023</td>
                                    <td><div className="table-btn red-btn">Passed</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="custom-pagination-wrapper">
                        <p>Showing 1 to 5 of 60 entries</p>
                        <ul className="pagination">
                            <li>
                                <a href="javascript:void(0)" className="prev-btn">
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.658778 4.48017C0.557238 4.38646 0.500126 4.25932 0.5 4.12671V3.87329C0.501663 3.74097 0.558543 3.61435 0.658778 3.51983L4.36842 0.098634C4.43617 0.0355077 4.52841 0 4.62463 0C4.72085 0 4.81308 0.0355077 4.88084 0.098634L5.39326 0.572133C5.46115 0.633597 5.4994 0.717724 5.4994 0.805548C5.4994 0.893372 5.46115 0.977499 5.39326 1.03896L2.18161 4L5.39326 6.96104C5.46157 7.02365 5.5 7.10888 5.5 7.19779C5.5 7.2867 5.46157 7.37193 5.39326 7.43454L4.88084 7.90137C4.81308 7.96449 4.72085 8 4.62463 8C4.52841 8 4.43617 7.96449 4.36842 7.90137L0.658778 4.48017Z" fill="#666666"/>
                                    </svg>
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
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.34122 4.48017C5.44276 4.38646 5.49987 4.25932 5.5 4.12671V3.87329C5.49834 3.74097 5.44146 3.61435 5.34122 3.51983L1.63158 0.098634C1.56383 0.0355077 1.47159 0 1.37537 0C1.27915 0 1.18692 0.0355077 1.11916 0.098634L0.606741 0.572133C0.538854 0.633597 0.500597 0.717724 0.500597 0.805548C0.500597 0.893372 0.538854 0.977499 0.606741 1.03896L3.81839 4L0.606741 6.96104C0.538426 7.02365 0.5 7.10888 0.5 7.19779C0.5 7.2867 0.538426 7.37193 0.606741 7.43454L1.11916 7.90137C1.18692 7.96449 1.27915 8 1.37537 8C1.47159 8 1.56383 7.96449 1.63158 7.90137L5.34122 4.48017Z" fill="#666666"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className={`accounts-tab ${Accounts===4?"tab-active" :""}`}>
                    <div className="custom-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Account</th>
                                    <th>Order ID</th>
                                    <th>Plan</th>
                                    <th>Starting Balance</th>
                                    <th>Start Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9856856</td>
                                    <td>XAUUSDx</td>
                                    <td>Top One Trader-challenge 125-MT4</td>
                                    <td>$125,000.00</td>
                                    <td>19-12-2023</td>
                                    <td><div className="table-btn dark-green-btn">Breached</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="custom-pagination-wrapper">
                        <p>Showing 1 to 5 of 60 entries</p>
                        <ul className="pagination">
                            <li>
                                <a href="javascript:void(0)" className="prev-btn">
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.658778 4.48017C0.557238 4.38646 0.500126 4.25932 0.5 4.12671V3.87329C0.501663 3.74097 0.558543 3.61435 0.658778 3.51983L4.36842 0.098634C4.43617 0.0355077 4.52841 0 4.62463 0C4.72085 0 4.81308 0.0355077 4.88084 0.098634L5.39326 0.572133C5.46115 0.633597 5.4994 0.717724 5.4994 0.805548C5.4994 0.893372 5.46115 0.977499 5.39326 1.03896L2.18161 4L5.39326 6.96104C5.46157 7.02365 5.5 7.10888 5.5 7.19779C5.5 7.2867 5.46157 7.37193 5.39326 7.43454L4.88084 7.90137C4.81308 7.96449 4.72085 8 4.62463 8C4.52841 8 4.43617 7.96449 4.36842 7.90137L0.658778 4.48017Z" fill="#666666"/>
                                    </svg>
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
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.34122 4.48017C5.44276 4.38646 5.49987 4.25932 5.5 4.12671V3.87329C5.49834 3.74097 5.44146 3.61435 5.34122 3.51983L1.63158 0.098634C1.56383 0.0355077 1.47159 0 1.37537 0C1.27915 0 1.18692 0.0355077 1.11916 0.098634L0.606741 0.572133C0.538854 0.633597 0.500597 0.717724 0.500597 0.805548C0.500597 0.893372 0.538854 0.977499 0.606741 1.03896L3.81839 4L0.606741 6.96104C0.538426 7.02365 0.5 7.10888 0.5 7.19779C0.5 7.2867 0.538426 7.37193 0.606741 7.43454L1.11916 7.90137C1.18692 7.96449 1.27915 8 1.37537 8C1.47159 8 1.56383 7.96449 1.63158 7.90137L5.34122 4.48017Z" fill="#666666"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
            {/* End Accounts Tab */}

            {/* Order History Tab */}
            <div className={`profile-tab ${isActive===4?"tab-active" :""}`}>
                <div className="tab-head">
                    <h2 className="title">Order History</h2>
                </div>
                <div className="custom-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Dis. Price</th>
                                <th>Dis. Code</th>
                                <th>Status</th>
                                <th>Upgrades</th>
                                <th>Account</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#30541</td>
                                <td>20-12-2023</td>
                                <td>$408.00</td>
                                <td>$4.08</td>
                                <td>TOPONETESTING</td>
                                <td>-</td>
                                <td><div className="table-btn green-btn">Paid</div></td>
                                <td>81210601</td>
                            </tr>
                            <tr>
                                <td>#30542</td>
                                <td>19-12-2023</td>
                                <td>$408.00</td>
                                <td>$4.08</td>
                                <td>TOPONETESTING</td>
                                <td>-</td>
                                <td><div className="table-btn green-btn">Paid</div></td>
                                <td>81210602</td>
                            </tr>
                            <tr>
                                <td>#30543</td>
                                <td>22-12-2023</td>
                                <td>$408.00</td>
                                <td>$4.08</td>
                                <td>TOPONETESTING</td>
                                <td>-</td>
                                <td><div className="table-btn red-btn">Unpaid</div></td>
                                <td>81210603</td>
                            </tr>
                            <tr>
                                <td>#30563</td>
                                <td>1-11-2023</td>
                                <td>$408.00</td>
                                <td>$4.08</td>
                                <td>TOPONETESTING</td>
                                <td>-</td>
                                <td><div className="table-btn red-btn">Unpaid</div></td>
                                <td>81210604</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="custom-pagination-wrapper">
                    <p>Showing 1 to 5 of 60 entries</p>
                    <ul className="pagination">
                        <li>
                            <a href="javascript:void(0)" className="prev-btn">
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.658778 4.48017C0.557238 4.38646 0.500126 4.25932 0.5 4.12671V3.87329C0.501663 3.74097 0.558543 3.61435 0.658778 3.51983L4.36842 0.098634C4.43617 0.0355077 4.52841 0 4.62463 0C4.72085 0 4.81308 0.0355077 4.88084 0.098634L5.39326 0.572133C5.46115 0.633597 5.4994 0.717724 5.4994 0.805548C5.4994 0.893372 5.46115 0.977499 5.39326 1.03896L2.18161 4L5.39326 6.96104C5.46157 7.02365 5.5 7.10888 5.5 7.19779C5.5 7.2867 5.46157 7.37193 5.39326 7.43454L4.88084 7.90137C4.81308 7.96449 4.72085 8 4.62463 8C4.52841 8 4.43617 7.96449 4.36842 7.90137L0.658778 4.48017Z" fill="#666666"/>
                                </svg>
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
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.34122 4.48017C5.44276 4.38646 5.49987 4.25932 5.5 4.12671V3.87329C5.49834 3.74097 5.44146 3.61435 5.34122 3.51983L1.63158 0.098634C1.56383 0.0355077 1.47159 0 1.37537 0C1.27915 0 1.18692 0.0355077 1.11916 0.098634L0.606741 0.572133C0.538854 0.633597 0.500597 0.717724 0.500597 0.805548C0.500597 0.893372 0.538854 0.977499 0.606741 1.03896L3.81839 4L0.606741 6.96104C0.538426 7.02365 0.5 7.10888 0.5 7.19779C0.5 7.2867 0.538426 7.37193 0.606741 7.43454L1.11916 7.90137C1.18692 7.96449 1.27915 8 1.37537 8C1.47159 8 1.56383 7.96449 1.63158 7.90137L5.34122 4.48017Z" fill="#666666"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End Order History Tab */}
        </div>
        {/* End Profile All Tab body */}

        {/* Sale Card */}
        <div className="offer-label">
            <div className="offer-card">
                <div className="offer-image">
                    <img src={OfferImage} alt="sale-image" />
                </div>
                <h3 className="title">You Will Get</h3>
                <ul className="offer-list">
                    <li>100% lifetime payout</li>
                    <li>On demand payout (on first withdrawal only)</li>
                    <li>30% profit share from your challenge phase.</li>
                    <li>30% profit share from your challenge phase.</li>
                    <li>Timeline: 22nd Dec - 31st Dec</li>
                </ul>
                <div className="promo-group">
                    <div className="top-text">
                        <div className="off">
                            30
                            <span><span>%</span> <br/>OFF</span>
                        </div>
                        <div className="accounts">All Challenge Accounts</div>
                    </div>
                    <div className="bottom-text">PROMO LASTS UNTIL 12/31</div>
                </div>
                <div className="bonus-group">
                    <div className="text">+150% Refund</div>
                    <div className="text">+25% Bonus Capital</div>
                    <div className="bedge">PROMO CODE: XMAS30</div>
                </div>
            </div>
        </div>
        {/* End Sale Card */}
      </div>
    </>
  )
}

export default Profile
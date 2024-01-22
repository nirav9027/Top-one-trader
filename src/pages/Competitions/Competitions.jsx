import React, { useState } from 'react'
import UpcomingTrophyIcon from '../../assets/images/icon-gold-trophy.svg'
import InProgressTrophyIcon from '../../assets/images/icon-green-trophy.svg'
import FinishedTrophyIcon from '../../assets/images/icon-silver-trophy.svg'
import CalendarIcon from '../../assets/images/icon-black-calendar.svg'
import PrizeCouponIcon from '../../assets/images/icon-prize-coupon.svg'
import UsersIcon from '../../assets/images/icon-users.svg'
import CrownIcon from '../../assets/images/icon-crown.svg'
import FirstRankTrophy from '../../assets/images/1st-rank-trophy.png'
import SecondRankTrophy from '../../assets/images/2nd-rank-trophy.png'
import ThirdRankTrophy from '../../assets/images/3rd-rank-trophy.png'
import greenTickIcon from '../../assets/images/icon-ongoing.svg'
import CloseIcon from '../../assets/images/icon-modal-close.svg'

const Competitions = () => {
  const [isActive, setisActive] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTabActive, setModalTabActive] = useState(1);
  const competitionsCardContent = [
    {
      className : "upcoming-event",
      img : UpcomingTrophyIcon,
      title : "January Competition",
      badge : "Upcoming",
      startDate : "Jan 1, 2024",
      endDate : "Jan 31, 2024",
      Prize : "$30,000+ ash & $2.75M",
      Pool : "Worth of Challenge Account",
      Contestants:"87547",
      timeStartTitle : "Time Until Start (GMT +02:00)",
      btnTilte : "Profile",
      endcompetition : ""
    },
    {
      className : "in-progress-event",
      img : InProgressTrophyIcon,
      title : "December Competition",
      badge : "In Progress",
      startDate : "Jan 1, 2024",
      endDate : "Jan 31, 2024",
      Prize : "$30,000+ ash & $2.75M",
      Pool : "Worth of Challenge Account",
      Contestants:"87547",
      timeStartTitle : "Time Until Start (GMT +02:00)",
      btnTilte : "Register",
      endcompetition : ""
    },
    {
      className : "finished-event",
      img : FinishedTrophyIcon,
      title : "November Competition",
      badge : "Finished",
      startDate : "Jan 1, 2024",
      endDate : "Jan 31, 2024",
      Prize : "$30,000+ ash & $2.75M",
      Pool : "Worth of Challenge Account",
      Contestants:"87547",
      timeStartTitle : "Time Until Start (GMT +02:00)",
      btnTilte : "Register",
      endcompetition : "November 30, 2023"
    },
    {
      className : "finished-event",
      img : FinishedTrophyIcon,
      title : "October Competition",
      badge : "Finished",
      startDate : "Jan 1, 2024",
      endDate : "Jan 31, 2024",
      Prize : "$30,000+ ash & $2.75M",
      Pool : "Worth of Challenge Account",
      Contestants:"87547",
      timeStartTitle : "Time Until Start (GMT +02:00)",
      btnTilte : "Register",
      endcompetition : "November 30, 2023"
    },
    {
      className : "finished-event",
      img : FinishedTrophyIcon,
      title : "September Competition",
      badge : "Finished",
      startDate : "Jan 1, 2024",
      endDate : "Jan 31, 2024",
      Prize : "$30,000+ ash & $2.75M",
      Pool : "Worth of Challenge Account",
      Contestants:"87547",
      timeStartTitle : "Time Until Start (GMT +02:00)",
      btnTilte : "Register",
      endcompetition : "November 30, 2023"
    }
  ]
  return (
    <>
      <div className='competitions-page'>
        <div className='competitions-wrapper'>
          <ul className='competitions-tabs-menu bg-white'>
          <li className="competitions-tab-item"><a onClick={()=>{setisActive(1)}} className={`competitions-tab-link ${isActive===1?"active":""}`}>All</a></li>
                    <li className="competitions-tab-item"><a onClick={()=>{setisActive(2)}} className={`competitions-tab-link ${isActive===2?"active":""}`}>Upcoming</a></li>
                    <li className="competitions-tab-item"><a onClick={()=>{setisActive(3)}} className={`competitions-tab-link ${isActive===3?"active":""}`}>In Progress </a></li>
                    <li className="competitions-tab-item"><a onClick={()=>{setisActive(4)}} className={`competitions-tab-link ${isActive===4?"active":""}`}>Finish</a></li>
          </ul>
          <div className="competitions-tabs-content">
              <ul className={`competitions-card-wrapper all-cards-wrapper ${isActive===1?"tab-active" :""}`}>
                {competitionsCardContent.map((cc,i) =>{
                  return(
                      <li className= {`competitions-card bg-white ${cc.className}`} key={i} >
                          <div className='title-wrapper'>
                              <div className='award-image'>
                                <img src={cc.img} alt="award-image" />
                              </div>
                              <h3>{cc.title}</h3>
                              <span className='badge'>{cc.badge}</span>
                          </div>
                          <div className='competitions-card-content'>
                              <div className='competitions-details'>
                                <div className='custom-row date'>
                                  <div className='icon'>
                                    <img src={CalendarIcon} alt="CalendarIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                    <span>Start:</span><p>{cc.startDate}</p>
                                    </div>
                                    <div className='wrap'>
                                      <span>End:</span><p> {cc.endDate}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='custom-row prize'>
                                  <div className='icon'>
                                    <img src={PrizeCouponIcon} alt="PrizeCouponIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                      <span>Start:</span><p>{cc.startDate}</p>
                                    </div>
                                    <div className='wrap'>
                                      <span>End:</span><p>{cc.endDate}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='custom-row contestants'>
                                <div className='icon'>
                                <img src={UsersIcon} alt="UsersIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                      <span>Contestants:</span><p className='numbers'>{cc.Contestants}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='counter-box bg-white'>
                                    <p className='counter-title'>Time Until Start (GMT +02:00)</p>
                                    <p className='end-competitions'>{cc.endcompetition}</p>
                                    <div className='counter-wrapper'>
                                      <div class="number">
                                          <span class="days time">00</span>
                                          <span class="text">Days</span>
                                      </div>
                                      <div class="number">
                                          <span class="hours time">00</span>
                                          <span class="text">Hours</span>
                                      </div>
                                      <div class="number">
                                          <span class="minutes time">00</span>
                                          <span class="text">Min</span>
                                      </div>
                                      <div class="number">
                                          <span class="seconds time">00</span>
                                          <span class="text">Sec</span>
                                      </div>
                                    </div>
                                </div>
                                <div className='competitions-buttons-wrapper'>
                                  <button type='button' className='border-grey-btn competitions-button details-button' onClick={()=>{setModalOpen(true)}} ><img src={CrownIcon} alt="crown icon" /> Details</button>
                                  <button type='button' className='solid-green-btn competitions-button'>{cc.btnTilte}</button>
                                </div>
                              </div>
                          </div>
                      </li>
                  )
                })}

              </ul>
              <ul className={`competitions-card-wrapper upcomming-cards-wrapper ${isActive===2?"tab-active" :""}`}>
                {competitionsCardContent.map((cc,i) =>{
                  return(
                      <li className= {`competitions-card bg-white ${cc.className}`} key={i} >
                          <div className='title-wrapper'>
                              <div className='award-image'>
                                <img src={cc.img} alt="award-image" />
                              </div>
                              <h3>{cc.title}</h3>
                              <span className='badge'>{cc.badge}</span>
                          </div>
                          <div className='competitions-card-content'>
                              <div className='competitions-details'>
                                <div className='custom-row date'>
                                  <div className='icon'>
                                    <img src={CalendarIcon} alt="CalendarIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                    <span>Start:</span><p>{cc.startDate}</p>
                                    </div>
                                    <div className='wrap'>
                                      <span>End:</span><p> {cc.endDate}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='custom-row prize'>
                                  <div className='icon'>
                                    <img src={PrizeCouponIcon} alt="PrizeCouponIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                      <span>Start:</span><p>{cc.startDate}</p>
                                    </div>
                                    <div className='wrap'>
                                      <span>End:</span><p>{cc.endDate}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='custom-row contestants'>
                                <div className='icon'>
                                <img src={UsersIcon} alt="UsersIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                      <span>Contestants:</span><p className='numbers'>{cc.Contestants}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='counter-box bg-white'>
                                    <p className='counter-title'>Time Until Start (GMT +02:00)</p>
                                    <p className='end-competitions'>{cc.endcompetition}</p>
                                    <div className='counter-wrapper'>
                                      <div class="number">
                                          <span class="days time">00</span>
                                          <span class="text">Days</span>
                                      </div>
                                      <div class="number">
                                          <span class="hours time">00</span>
                                          <span class="text">Hours</span>
                                      </div>
                                      <div class="number">
                                          <span class="minutes time">00</span>
                                          <span class="text">Min</span>
                                      </div>
                                      <div class="number">
                                          <span class="seconds time">00</span>
                                          <span class="text">Sec</span>
                                      </div>
                                    </div>
                                </div>
                                <div className='competitions-buttons-wrapper'>
                                  <button type='button' className='border-grey-btn competitions-button details-button' onClick={()=>{setModalOpen(true)}} ><img src={CrownIcon} alt="crown icon" /> Details</button>
                                  <button type='button' className='solid-green-btn competitions-button'>{cc.btnTilte}</button>
                                </div>
                              </div>
                          </div>
                      </li>
                  )
                })}

              </ul>
              <ul className={`competitions-card-wrapper inprogress-cards-wrapper ${isActive===3?"tab-active" :""}`}>
                {competitionsCardContent.map((cc,i) =>{
                  return(
                      <li className= {`competitions-card bg-white ${cc.className}`} key={i} >
                          <div className='title-wrapper'>
                              <div className='award-image'>
                                <img src={cc.img} alt="award-image" />
                              </div>
                              <h3>{cc.title}</h3>
                              <span className='badge'>{cc.badge}</span>
                          </div>
                          <div className='competitions-card-content'>
                              <div className='competitions-details'>
                                <div className='custom-row date'>
                                  <div className='icon'>
                                    <img src={CalendarIcon} alt="CalendarIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                    <span>Start:</span><p>{cc.startDate}</p>
                                    </div>
                                    <div className='wrap'>
                                      <span>End:</span><p> {cc.endDate}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='custom-row prize'>
                                  <div className='icon'>
                                    <img src={PrizeCouponIcon} alt="PrizeCouponIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                      <span>Start:</span><p>{cc.startDate}</p>
                                    </div>
                                    <div className='wrap'>
                                      <span>End:</span><p>{cc.endDate}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='custom-row contestants'>
                                <div className='icon'>
                                <img src={UsersIcon} alt="UsersIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                      <span>Contestants:</span><p className='numbers'>{cc.Contestants}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='counter-box bg-white'>
                                    <p className='counter-title'>Time Until Start (GMT +02:00)</p>
                                    <p className='end-competitions'>{cc.endcompetition}</p>
                                    <div className='counter-wrapper'>
                                      <div class="number">
                                          <span class="days time">00</span>
                                          <span class="text">Days</span>
                                      </div>
                                      <div class="number">
                                          <span class="hours time">00</span>
                                          <span class="text">Hours</span>
                                      </div>
                                      <div class="number">
                                          <span class="minutes time">00</span>
                                          <span class="text">Min</span>
                                      </div>
                                      <div class="number">
                                          <span class="seconds time">00</span>
                                          <span class="text">Sec</span>
                                      </div>
                                    </div>
                                </div>
                                <div className='competitions-buttons-wrapper'>
                                  <button type='button' className='border-grey-btn competitions-button details-button' onClick={()=>{setModalOpen(true)}} ><img src={CrownIcon} alt="crown icon" /> Details</button>
                                  <button type='button' className='solid-green-btn competitions-button'>{cc.btnTilte}</button>
                                </div>
                              </div>
                          </div>
                      </li>
                  )
                })}

              </ul>
              <ul className={`competitions-card-wrapper finish-cards-wrapper ${isActive===4?"tab-active" :""}`}>
                {competitionsCardContent.map((cc,i) =>{
                  return(
                      <li className= {`competitions-card bg-white ${cc.className}`} key={i} >
                          <div className='title-wrapper'>
                              <div className='award-image'>
                                <img src={cc.img} alt="award-image" />
                              </div>
                              <h3>{cc.title}</h3>
                              <span className='badge'>{cc.badge}</span>
                          </div>
                          <div className='competitions-card-content'>
                              <div className='competitions-details'>
                                <div className='custom-row date'>
                                  <div className='icon'>
                                    <img src={CalendarIcon} alt="CalendarIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                    <span>Start:</span><p>{cc.startDate}</p>
                                    </div>
                                    <div className='wrap'>
                                      <span>End:</span><p> {cc.endDate}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='custom-row prize'>
                                  <div className='icon'>
                                    <img src={PrizeCouponIcon} alt="PrizeCouponIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                      <span>Start:</span><p>{cc.startDate}</p>
                                    </div>
                                    <div className='wrap'>
                                      <span>End:</span><p>{cc.endDate}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='custom-row contestants'>
                                <div className='icon'>
                                <img src={UsersIcon} alt="UsersIcon" />
                                  </div>
                                  <div className='detail'>
                                    <div className='wrap'>
                                      <span>Contestants:</span><p className='numbers'>{cc.Contestants}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='counter-box bg-white'>
                                    <p className='counter-title'>Time Until Start (GMT +02:00)</p>
                                    <p className='end-competitions'>{cc.endcompetition}</p>
                                    <div className='counter-wrapper'>
                                      <div class="number">
                                          <span class="days time">00</span>
                                          <span class="text">Days</span>
                                      </div>
                                      <div class="number">
                                          <span class="hours time">00</span>
                                          <span class="text">Hours</span>
                                      </div>
                                      <div class="number">
                                          <span class="minutes time">00</span>
                                          <span class="text">Min</span>
                                      </div>
                                      <div class="number">
                                          <span class="seconds time">00</span>
                                          <span class="text">Sec</span>
                                      </div>
                                    </div>
                                </div>
                                <div className='competitions-buttons-wrapper'>
                                  <button type='button' className='border-grey-btn competitions-button details-button' onClick={()=>{setModalOpen(true)}} ><img src={CrownIcon} alt="crown icon" /> Details</button>
                                  <button type='button' className='solid-green-btn competitions-button'>{cc.btnTilte}</button>
                                </div>
                              </div>
                          </div>
                      </li>
                  )
                })}

              </ul>
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
          </div>
        </div>
        <div className={`competitions-details-modal ${modalOpen===true?"show":""}`}>
            <div className='competitions-modal-wrapper'>
              <div className='close-btn' onClick={()=>{setModalOpen(false)}}>
                <img src={CloseIcon} alt="CloseIcon" />
              </div>
              <div className='competitions-modal-tabs'>
                <ul className='competitions-tabs-menu'>
                  <li className="modal-tab-item">
                    <a href="#" className={`modal-tab-link border-grey-btn ${modalTabActive===1?"active":""}`} onClick={()=>{setModalTabActive(1)}}>Prize Pool</a>
                  </li>
                  <li className="modal-tab-item">
                    <a href="#" className={`modal-tab-link border-grey-btn ${modalTabActive===2?"active":""}`} onClick={()=>{setModalTabActive(2)}}>Rules</a>
                  </li>
                </ul>
                <div className={`competitions-modal-tab-content ${modalTabActive===1?"tab-active" :""}`}>
                  <div className='title-content'>
                    <h4>January Competition Prize and Rules</h4>
                  </div>
                  <div className='ranking-wrapper'>
                    <div className='rank-box'>
                        <div className='rank-title'>
                          <h4>2nd</h4>
                        </div>
                        <div className='ranking-details'>
                          <div className='rank-trophy-box'>
                            <img src={SecondRankTrophy} alt="Rank Trophy" />
                          </div>
                          <ul className='prize-list-wrapper'>
                            <li>
                              <img src={greenTickIcon} alt="greenTickIcon" />
                              <p>$3,000 in cash</p>
                            </li>
                            <li>
                            <img src={greenTickIcon} alt="greenTickIcon" />
                              <p>Stellar 2-Step 200K</p>
                            </li>
                          </ul>
                        </div>
                    </div>
                    <div className='rank-box'>
                        <div className='rank-title'>
                          <h4>1st</h4>
                        </div>
                        <div className='ranking-details'>
                          <div className='rank-trophy-box'>
                            <img src={FirstRankTrophy} alt="Rank Trophy" />
                          </div>
                          <ul className='prize-list-wrapper'>
                            <li>
                              <img src={greenTickIcon} alt="greenTickIcon" />
                              <p>$7,000 in cash</p>
                            </li>
                            <li>
                            <img src={greenTickIcon} alt="greenTickIcon" />
                              <p>Stellar 2-Step 300K</p>
                            </li>
                          </ul>
                        </div>
                    </div>
                    <div className='rank-box'>
                        <div className='rank-title'>
                          <h4>3rd</h4>
                        </div>
                        <div className='ranking-details'>
                          <div className='rank-trophy-box'>
                            <img src={ThirdRankTrophy} alt="Rank Trophy" />
                          </div>
                          <ul className='prize-list-wrapper'>
                            <li>
                              <img src={greenTickIcon} alt="greenTickIcon" />
                              <p>$2,000 in cash</p>
                            </li>
                            <li>
                            <img src={greenTickIcon} alt="greenTickIcon" />
                              <p>Stellar 2-Step 100K</p>
                            </li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div className="custom-table ranking-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Plan Name</th>
                                        <th>Cash Prize</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4th</td>
                                        <td>Stellar 1-Step 50K</td>
                                        <td>$1,000</td>
                                    </tr>
                                    <tr>
                                        <td>5th</td>
                                        <td>Stellar 1-Step 50K</td>
                                        <td>$1,000</td>
                                    </tr>
                                    <tr>
                                        <td>6th</td>
                                        <td>Stellar 1-Step 25K</td>
                                        <td>$300</td>
                                    </tr>
                                    <tr>
                                        <td>7th</td>
                                        <td>Stellar 1-Step 25K</td>
                                        <td>$300</td>
                                    </tr>
                                    <tr>
                                        <td>8th</td>
                                        <td>Stellar 1-Step 25K</td>
                                        <td>$300</td>
                                    </tr>
                                    <tr>
                                        <td>9th</td>
                                        <td>Stellar 1-Step 25K</td>
                                        <td>$300</td>
                                    </tr>
                                    <tr>
                                        <td>10th</td>
                                        <td>Stellar 1-Step 25K</td>
                                        <td>$300</td>
                                    </tr>
                                    <tr>
                                        <td>11th to 20th</td>
                                        <td>Stellar 1-Step 25K</td>
                                        <td>$300</td>
                                    </tr>
                                    <tr>
                                        <td>21th to 70th</td>
                                        <td>Stellar 1-Step 25K</td>
                                        <td>$200</td>
                                    </tr>
                                    <tr>
                                        <td>71th to 100th</td>
                                        <td>Express Consistency 15K</td>
                                        <td>$200</td>
                                    </tr>
                                </tbody>
                            </table>

                  </div>
                </div>
                <div className={`competitions-modal-tab-content ${modalTabActive===2?"tab-active" :""}`}>
                <div className='title-content'>
                    <h4>Here are the rules:</h4>
                    <p>Get ready for the ultimate trading challenge! The trading competition is now open and we're looking for talented traders to join us.</p>
                  </div>
                  <div className='rules-listing-wrapper'>
                    <ul className='rules-list'>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>The Drawdown will be calculated based on balance.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>The maximum daily loss limit is 5%.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>The maximum overall loss limit is 10%.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>Participants must meet a minimum trading requirement of 5 trading days.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>News trading is allowed.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>Commission is $3 per lot for Forex and Commodities, no commission on Indices.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>Overnight and over-weekend holding is permitted.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>Accounts will be swap-free.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>Maximum lot size 3/per indices, commodities and metals.</p>
                      </li>
                      <li>
                        <img src={greenTickIcon} alt="greenTickIcon" />
                        <p>Participants can hold a maximum of 5 trading positions at a time.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Competitions
import React, { useState } from 'react'
import ExclamationIcon from '../../assets/images/icon-round-exclamation-mark.svg'
import CurrentBalanceImage from '../../assets/images/graph-current-balance.svg'
import ProfitFactorImage from '../../assets/images/graph-profit-factor.svg'
import WinRateImage from '../../assets/images/graph-win-rate.svg'
import AvgWinLossImage from '../../assets/images/graph-avg-win-loss.svg'
import TradeOverviewImage from '../../assets/images/trade-overview-chart.png'
import DiscoverProPanelImage1 from '../../assets/images/pro-panel-image-1.png'
import  NotificationIMage from '../../assets/images/notification-image.png'
import NotificationBlueTickIcon from '../../assets/images/icon-blue-tick-mark.svg'
import DownArrowIcon from '../../assets/images/icon-arrow-select.svg'
import ClockIcon from '../../assets/images/icon-clock.svg'
import { Link } from 'react-router-dom'
import { announcements, viewdetails } from '../../config/routConst'
const Dashboard = () => {
    const [SummaryActive, setSummaryActive] = useState(1);
    const [overviewActive , SetoverviewActive] = useState(1);
     const [Select, setSelect] = useState(false);
    const  DiscoverProContent = [
        {
           img : DiscoverProPanelImage1,
           title : "Introducing Topone trader Official Community On Your Dashboard",
           date : "Dec 19, 2023."
        },
        {
            img : DiscoverProPanelImage1,
            title : "Introducing Topone trader Official Community On Your Dashboard",
            date : "Dec 19, 2023."
        },
        {
            img : DiscoverProPanelImage1,
            title : "Introducing Topone trader Official Community On Your Dashboard",
            date : "Dec 19, 2023."
        },
        {
            img : DiscoverProPanelImage1,
            title : "Introducing Topone trader Official Community On Your Dashboard",
            date : "Dec 19, 2023."
        },
        {
            img : DiscoverProPanelImage1,
            title : "Introducing Topone trader Official Community On Your Dashboard",
            date : "Dec 19, 2023."
        }
    ]
    const  NotificationContent = [
        {
           img : DiscoverProPanelImage1,
           id : "@Globalknowledge",
           title : "Globla Knowledge",
           date : "September 19, 2023 12:52 pm",
           paraLinks : <>Top 5 new company list <a href="">#IBMT</a> <a href="">#IBMT</a> <a href="">#TeeVee</a> <a href="">#BITech</a> <a href="">#LionBI</a></>
        },
        {
            img : DiscoverProPanelImage1,
            id : "@Globalknowledge",
            title : "Globla Knowledge",
            date : "September 19, 2023 12:52 pm",
            paraLinks : <>Top 5 new company list <a href="">#IBMT</a> <a href="">#IBMT</a> <a href="">#TeeVee</a>
           <a href="">#BITech</a> <a href="">#LionBI</a></>
        },
        {
            img : DiscoverProPanelImage1,
            id : "@Globalknowledge",
            title : "Globla Knowledge",
            date : "September 19, 2023 12:52 pm",
            paraLinks : <>Top 5 new company list <a href="">#IBMT</a> <a href="">#IBMT</a> <a href="">#TeeVee</a>
           <a href="">#BITech</a> <a href="">#LionBI</a></>
        },
        {
            img : DiscoverProPanelImage1,
            id : "@Globalknowledge",
            title : "Globla Knowledge",
            date : "September 19, 2023 12:52 pm",
            paraLinks : <>Top 5 new company list <a href="">#IBMT</a> <a href="">#IBMT</a> <a href="">#TeeVee</a>
           <a href="">#BITech</a> <a href="">#LionBI</a></>
        },
        {
            img : DiscoverProPanelImage1,
            id : "@Globalknowledge",
            title : "Globla Knowledge",
            date : "September 19, 2023 12:52 pm",
            paraLinks : <>Top 5 new company list <a href="">#IBMT</a> <a href="">#IBMT</a> <a href="">#TeeVee</a>
           <a href="">#BITech</a> <a href="">#LionBI</a></>
        }
    ]
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-main-content">
            <div className="dashboard-card-wrapper">
                    <div className="dashboard-cardbox bg-white">
                        <div className="card-content">
                            <span className="p-14">Current Balance<img src={ExclamationIcon} alt="exclamation-mark" /></span>
                            <h3>$125,000.00</h3>
                        </div>
                        <div className="card-graph-image">
                            <img src={CurrentBalanceImage} alt="graph-current-balance" />
                        </div>
                    </div>
                    <div className="dashboard-cardbox bg-white">
                        <div className="card-content">
                            <span className="p-14">Profit Factor<img src={ExclamationIcon} alt="exclamation-mark" /></span>
                            <h3>40.28</h3>
                        </div>
                        <div className="card-graph-image">
                            <img src={ProfitFactorImage} alt="graph-profit-factor" />
                        </div>
                    </div>
                    <div className="dashboard-cardbox bg-white">
                        <div className="card-content">
                            <span className="p-14">Win Rate<img src={ExclamationIcon} alt="exclamation-mark" /></span>
                            <h3>62.88%</h3>
                        </div>
                        <div className="card-graph-image">
                            <img src={WinRateImage} alt="graph-win-rate" />
                        </div>
                    </div>
                    <div className="dashboard-cardbox bg-white">
                        <div className="card-content">
                            <span className="p-14">Avg Win/Avg Loss<img src={ExclamationIcon} alt="exclamation-mark" /></span>
                            <h3>25.93</h3>
                        </div>
                        <div className="card-graph-image">
                            <img src={AvgWinLossImage} alt="graph-avg-win-loss" />
                        </div>
                    </div>
            </div>
            <div className="overview-chart mt-30 bg-white">
                <div className="trading-list-wrapper">
                    <ul className="trading-tabs">
                            <li>
                                <a href="javascript:void(0)"  onClick={()=>{SetoverviewActive(1)}} className={`border-grey-btn overview-tab-btns tab-btns ${overviewActive===1?"active":""}`}>Trade Overview</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={()=>{SetoverviewActive(2)}} className={`border-grey-btn overview-tab-btns tab-btns ${overviewActive===2?"active":""}`}>Statistics</a>
                            </li>
                    </ul>
                    <div className="overview-sorting">
                        <div className="date-range-wrap">
                            <input type="date" defaultValue="2024-01-10"/>
                        </div>
                        <div className={`select-account ${Select===true ? 'show':''}`} onClick={()=>{setSelect(!Select)}} onMouseLeave={()=>{setSelect(false)}}>
                            <h4>Account:</h4>
                            <button type='button' className='select-content'>81210602</button>
                            <img src={DownArrowIcon} className='down-arrow' alt="down arrow" />
                            <div className='select-dropdown-content'>
                            <div className='select-menu-wrapper'>
                                <h5>Accounts</h5>
                                <ul className='select-menu'>
                                    <li >
                                        <a href="javascript:;" className='select-link'>81210602</a>
                                    </li>
                                    <li >
                                        <a href="javascript:;" className='select-link'>81210225</a>
                                    </li>
                                    <li >
                                        <a href="javascript:;" className='select-link'>81210583</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="overview-chart-wrap">
                    <div className={`trade-overview-tab-content chart-tab-content ${overviewActive===1?"tab-active" :""}`}>
                        <div className="trading-chart">
                            <img src={TradeOverviewImage} alt="trade-overview-chart" />
                        </div>
                    </div>
                    <div className={`statistics-tab-content chart-tab-content ${overviewActive===2?"tab-active" :""}`}>
                        <ul>
                            <li className="statistics-list">
                                <p className="lable-title">High Water Mark</p>
                                <p>$125,000.00</p>
                            </li>
                            <li className="statistics-list">
                                <p className="lable-title">Prior Days Equity</p>
                                <p>$125,000.00</p>
                            </li>
                            <li className="statistics-list">
                                <p className="lable-title">Current Equity</p>
                                <p>$15,000.00</p>
                            </li>
                            <li className="statistics-list">
                                <p className="lable-title">Prior Days Balance</p>
                                <p>$36,000.00</p>
                            </li>
                            <li className="statistics-list">
                                <p className="lable-title">Lots</p>
                                <p>36.85</p>
                            </li>
                            <li className="statistics-list">
                                <p className="lable-title">Average RRR</p>
                                <p>25.02%</p>
                            </li>
                            <li className="statistics-list">
                                <p className="lable-title">Expectancy</p>
                                <p>$0.00</p>
                            </li>
                            <li className="statistics-list">
                                <p className="lable-title">Average Win</p>
                                <p>$2554.00</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="trading-summary mt-30 bg-white">
                <div className="trading-list-wrapper">
                    <ul className="trading-tabs">
                        <li>
                            <a href="javascript:void(0)" onClick={()=>{setSummaryActive(1)}}
                            className={`border-grey-btn tab-btns summary-tab-btns  ${SummaryActive===1?"active":""}`}>Trade Summary</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"
                            onClick={()=>{setSummaryActive(2)}}
                            className={`border-grey-btn summary-tab-btns tab-btns ${SummaryActive===2?"active":""}`}>Trade Overview</a>
                        </li>
                    </ul>
                </div>
                <div className="summary-details-wrap">
                    <div
                    className={`summary-tab-content trade-tab-content ${SummaryActive===1?"tab-active" :""}`}>
                        <div className="custom-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Trades</th>
                                        <th>Lots</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>08-12-2023</td>
                                        <td>Infused Cooking Oil</td>
                                        <td>22.23</td>
                                        <td> <div className="table-btn dark-green-btn">Pending</div></td>
                                    </tr>
                                    <tr>
                                        <td>08-12-2023</td>
                                        <td>Infused Cooking Oil</td>
                                        <td>22.23</td>
                                        <td> <div className="table-btn green-btn">Win</div></td>
                                    </tr>
                                    <tr>
                                        <td>08-12-2023</td>
                                        <td>Infused Cooking Oil</td>
                                        <td>22.23</td>
                                        <td> <div className="table-btn red-btn">Loss</div></td>
                                    </tr>
                                    <tr>
                                        <td>08-12-2023</td>
                                        <td>Infused Cooking Oil</td>
                                        <td>22.23</td>
                                        <td> <div className="table-btn green-btn">Win</div></td>
                                    </tr>
                                    <tr>
                                        <td>08-12-2023</td>
                                        <td>Infused Cooking Oil</td>
                                        <td>22.23</td>
                                        <td> <div className="table-btn red-btn">Loss</div></td>
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
                    </div>
                    <div className={`new-trade-overview-tab-content trade-tab-content ${SummaryActive===2?"tab-active" :""}`}>

                        <div className="custom-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Trading Objectives</th>
                                        <th>Result</th>
                                        <th>Equity Limit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Max Daily Loss</td>
                                        <td>$0.00 lost of $6,250.00</td>
                                        <td className="text-red">-$118,750.00</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Losses</td>
                                        <td>$0.00 lost of $10,000.00</td>
                                        <td className="text-red">-$115,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>Gains</td>
                                        <td>$0.00 made of $12,500.00</td>
                                        <td className="text-green   ">$137,500.00</td>
                                    </tr>
                                    <tr>
                                        <td>Max Daily Loss</td>
                                        <td>$0.00 lost of $6,250.00</td>
                                        <td>$118,750.00</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div className="trading-history mt-30 bg-white">
                <div className="title-wrap">
                    <h4>Trade History</h4>
                    <div className="search-box">
                        <label for="search" className="search-input">
                            <input type="search" id="search" placeholder="Search" />
                        </label>
                        <button type="button" className="solid-green-btn download-btn">Download</button>
                    </div>

                </div>
                <div className="custom-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Ticket</th>
                                <th>Symbol </th>
                                <th>Side</th>
                                <th>Open Time</th>
                                <th>Open Price</th>
                                <th>Close Time</th>
                                <th>Close Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9856856</td>
                                <td>XAUUSDx</td>
                                <td><div className="table-btn side-btn green-btn">Buy</div></td>
                                <td>2023-12-05 10:21:05</td>
                                <td>2,029.4800</td>
                                <td>2023-12-05 12:43:25</td>
                                <td>2,029.4800</td>
                                <td><a href="javascript:;" className="table-btn action-btn green-btn">View</a></td>
                            </tr>
                            <tr>
                                <td>9856856</td>
                                <td>XAUUSDx</td>
                                <td><div className="table-btn side-btn red-btn green-btn">Sell</div></td>
                                <td>2023-12-05 10:21:05</td>
                                <td>2,029.4800</td>
                                <td>2023-12-05 12:43:25</td>
                                <td>2,029.4800</td>
                                <td><a href="javascript:;" className="table-btn action-btn green-btn">View</a></td>
                            </tr>
                            <tr>
                                <td>9856856</td>
                                <td>XAUUSDx</td>
                                <td><div className="table-btn side-btn green-btn">Buy</div></td>
                                <td>2023-12-05 10:21:05</td>
                                <td>2,029.4800</td>
                                <td>2023-12-05 12:43:25</td>
                                <td>2,029.4800</td>
                                <td><a href="javascript:;" className="table-btn action-btn green-btn">View</a></td>
                            </tr>
                            <tr>
                                <td>9856856</td>
                                <td>XAUUSDx</td>
                                <td><div className="table-btn side-btn green-btn">Buy</div></td>
                                <td>2023-12-05 10:21:05</td>
                                <td>2,029.4800</td>
                                <td>2023-12-05 12:43:25</td>
                                <td>2,029.4800</td>
                                <td><a href="javascript:;" className="table-btn action-btn green-btn">View</a></td>
                            </tr>
                            <tr>
                                <td>9856856</td>
                                <td>XAUUSDx</td>
                                <td><div className="table-btn side-btn red-btn green-btn">Sell</div></td>
                                <td>2023-12-05 10:21:05</td>
                                <td>2,029.4800</td>
                                <td>2023-12-05 12:43:25</td>
                                <td>2,029.4800</td>
                                <td><a href="javascript:;" className="table-btn action-btn green-btn">View</a></td>
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
            </div>
        </div>
        <div className="dashboard-advertisement-content">
            <div className="discover-wrapper bg-white">
            <div className="title-wrap">
                    <h4>Discover Pro</h4>
                    <Link to={announcements}>View All</Link>
                </div>
                <ul className='pro-content-wrapper'>
                    {DiscoverProContent.map((prodetails,i) =>{
                        return(
                            <>
                            <li className="discover-pro-box" key={i}>
                            <Link to={viewdetails}>
                            <div className="discover-image-box">
                                <img src={prodetails.img} alt="pro-panel-image" />
                            </div>
                            <div className="discover-content">
                                <p>{prodetails.title}</p>
                                <p className='date'>
                                    <i className='calender-iconn'></i>
                                    {prodetails.date}</p>
                            </div>
                            </Link>
                    </li>
                            </>
                        )
                    })}
                </ul>
            </div>
            <div className="notification-list-wrapper bg-white mt-30">
                <div className="title-wrap">
                    <h4>Notification</h4>
                    <a href="javascript:;">View All</a>
                </div>
                <div className="notifications-wrapper">
                    <ul>
                        {NotificationContent.map((Notification,i) =>{
                            return(
                                <>
                                <li className="notification-box">
                                    <div className='notification-image-box'>
                                        <img src={NotificationIMage} alt="NotificationIMage" />
                                    </div>
                                    <div className='notification-content'>
                                        <div className='title'>
                                        <h5>{Notification.title} <img src={NotificationBlueTickIcon} alt="blue-tick-icon" /></h5>
                                        </div>
                                        <a href="javascript:;" className='user-link'>{Notification.id}</a>
                                    <p>{Notification.paraLinks}</p>
                                    <p className="date"><img src={ClockIcon} alt="icon-clock" /> {Notification.date}</p>
                                    </div>
                                </li>
                                </>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
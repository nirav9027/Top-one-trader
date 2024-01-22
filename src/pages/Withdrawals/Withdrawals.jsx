import React, { useState } from 'react'
import ethereummainnet from '../../assets/images/ethereum-mainnet.png'
import arbitrumone from '../../assets/images/arbitrum-one.png'
import avalanchechain from '../../assets/images/avalanche-chain.png'
import polygonmainnet from '../../assets/images/polygon-mainnet.png'
import optimism from '../../assets/images/optimism.png'

const Withdrawals = () => {
  const [isActive, setisActive] = useState(1);
  const DepositList = [
    {
      Title:'Ethereum Mainnet',
      image: ethereummainnet,
    },
    {
      Title:'Arbitrum One',
      image: arbitrumone,
    },
    {
      Title:'Avalanche C-Chain',
      image: avalanchechain,
    },
    {
      Title:'Polygon Mainnet',
      image: polygonmainnet,
    },
    {
      Title:'Optimism',
      image: optimism,
    },
  ]
  return (
    
    <>
      <div className='withdrawals-wrapper'>
        {/* Profile Sidebar */}
        <div  className="withdrawals-sidebar">
            <ul className="withdrawals-tab-menu">
                <li className="withdrawals-tab-item"><a onClick={()=>{setisActive(1)}} className={`withdrawals-tab-link ${isActive===1?"active":""}`}>Wire Transfer</a></li>
                <li className="withdrawals-tab-item"><a onClick={()=>{setisActive(2)}} className={`withdrawals-tab-link ${isActive===2?"active":""}`}>Dedication Deposit Address</a></li>
                <li className="withdrawals-tab-item"><a onClick={()=>{setisActive(3)}} className={`withdrawals-tab-link ${isActive===3?"active":""}`}>Withdrawals History</a></li>
            </ul>
        </div>
        {/* End Profile Sidebar */}

        {/* Profile All Tab body */}
        <div className="withdrawals-tab-body">
          {/* Wire Transfer Tab */}
          <div className={`withdrawals-tab ${isActive===1?"tab-active" :""}`}>
            <div className="tab-head">
              <h2 className='title'>Wire Transfer</h2>
            </div>
          </div>
          {/* End Wire Transfer Tab */}

          {/* Dedication Deposit Address Tab */}
          <div className={`withdrawals-tab ${isActive===2?"tab-active" :""}`}>
            <div className="tab-head">
              <h2 className='title'>Dedication Deposit Address</h2>
            </div>
            <ul className='deposit-list'>
              {DepositList?.map((list,i)=>{
                return(
                  <li key={i}><img src={list.image} alt={list.Title} />{list.Title}</li>
                )
              })}
            </ul>
          </div>
          {/* End Dedication Deposit Address Tab */}

          {/* Withdrawals History Tab */}
          <div className={`withdrawals-tab ${isActive===3?"tab-active" :""}`}>
            <div className="tab-head">
              <h2 className='title'>Withdrawals History</h2>
            </div>
            <div className="custom-table">
              <table>
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Payment Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn green-btn'>Success</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn green-btn'>Success</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn orange-btn'>Pending</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn orange-btn'>Pending</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn red-btn'>Rejected</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn green-btn'>Success</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn green-btn'>Success</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn orange-btn'>Pending</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn orange-btn'>Pending</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
                  </tr>
                  <tr>
                    <td>19-12-2023 12:55 PM</td>
                    <td><div className='table-btn red-btn'>Rejected</div></td>
                    <td>$408.00</td>
                    <td><div className='table-btn view-btn'>View Details</div></td>
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
          {/* End Withdrawals History Tab */}
        </div>
        {/* End Profile All Tab body */}
      </div>
    </>
  )
}

export default Withdrawals
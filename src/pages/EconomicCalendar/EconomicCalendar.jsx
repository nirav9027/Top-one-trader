import React, { useState } from 'react'
import CountryImage from '../../assets/images/country-image.png'
import EconomicFilterBG from '../../assets/images/economic-filter-bg.png'
import AllCountries from '../../assets/images/all-countries-image.png'
import US from '../../assets/images/us.png'
import Australia from '../../assets/images/australia.png'
import Brazil from '../../assets/images/brazil.png'
import Canada from '../../assets/images/canada.png'
import India from '../../assets/images/india.png'
import France from '../../assets/images/france.png'
import Poland from '../../assets/images/poland.png'

const EconomicCalendar = () => {
  const [Dropdown, setDropdown] = useState(false)
  const [Dropdown2, setDropdown2] = useState(false)

  const countriesList = [
    {
      Name:'USA',
      Image:US,
    },
    {
      Name:'Australia',
      Image:Australia,
    },
    {
      Name:'Brazil',
      Image:Brazil,
    },
    {
      Name:'Canada',
      Image:Canada,
    },
    {
      Name:'India',
      Image:India,
    },
    {
      Name:'France',
      Image:France,
    },
    {
      Name:'Poland',
      Image:Poland,
    },
  ]
  return (
    <>
      <div className='economic-calendar-wrapper'>
        <div className="economic-filter">
          <img src={EconomicFilterBG} alt="bg-image"  className='bg-image'/>
          <div className='filter-card'>
            <div className="filter-list">
              <div className="dropdown-list">
                  <div className={`countries-dropdown dropdown ${Dropdown===true ? "show" : ''}`}  onMouseLeave={()=>{setDropdown(false)}}>
                    <button type='button' className='dropdown-togle' onClick={()=>{setDropdown(!Dropdown)}}>Select Countries</button>
                    <div className="dropdown-body">
                      <input type="search" />
                      <ul className='dropdown-body-list'>
                        <li className='all-select'>
                          <div className='checkbox-group'>
                            <input type="checkbox" id='All-Countries'/>
                            <label for='All-Countries'><img src={AllCountries} alt='All Countries' />All Countries</label>
                          </div>
                        </li>
                        {countriesList?.map((list,i)=>{
                          return(
                            <li key={i}>
                              <div className='checkbox-group'>
                                <input type="checkbox" id={list.Name}/>
                                <label for={list.Name}><img src={list.Image} alt={list.Name} /> {list.Name}</label>
                              </div>
                            </li>
                          )
                        })

                        }
                      </ul>
                    </div>
                  </div>
                  <div className={`countries-dropdown dropdown ${Dropdown2===true ? "show" : ''}`}  onMouseLeave={()=>{setDropdown2(false)}}>
                    <button type='button' className='dropdown-togle' onClick={()=>{setDropdown2(!Dropdown2)}}>Impact</button>
                    <div className="dropdown-body">
                      <ul className='dropdown-body-list'>
                        <li className='all-select'>
                          <div className='checkbox-group'>
                            <input type="checkbox" id='Impact'/>
                            <label for='Impact'>All Impact</label>
                          </div>
                        </li>
                        <li>
                          <div className='checkbox-group'>
                            <input type="checkbox" id='Low'/>
                            <label for='Low'>Low</label>
                          </div>
                        </li>
                        <li>
                          <div className='checkbox-group'>
                            <input type="checkbox" id='Medium'/>
                            <label for='Medium'>Medium</label>
                          </div>
                        </li>
                        <li>
                          <div className='checkbox-group'>
                            <input type="checkbox" id='High'/>
                            <label for='High'>High</label>
                          </div>
                        </li>
                        <li>
                          <div className='checkbox-group'>
                            <input type="checkbox" id='Holidays'/>
                            <label for='Holidays'>Holidays</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
              <div className="btn-group">
                <button type='button' className='solid-green-btn filter-btn'>Apply</button>
                <button type='button' className='border-grey-btn filter-btn'>Reset</button>
              </div>
            </div>
            <div className="filter-result">
              <div className='filter-result-inner'>
                <h3 className="title">Countries:</h3>
                <ul>
                  <li><img src={US} alt="USA" /> USA<span className='cancle'></span></li>
                  <li><img src={Australia} alt="Australia" /> Australia<span className='cancle'></span></li>
                  <li><img src={Brazil} alt="Brazil" /> Brazil<span className='cancle'></span></li>
                </ul>
              </div>
              <div className='filter-result-inner'>
                <h3 className="title">Impact:</h3>
                <ul>
                  <li>Low<span className='cancle'></span></li>
                  <li>High<span className='cancle'></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
        <div className='admin-inner-card'>
          <div className="custom-table">
              <table>
                  <thead>
                      <tr>
                          <th>Impact</th>
                          <th>Event Name</th>
                          <th>Countries</th>
                          <th>Date & Time</th>
                          <th>Actual</th>
                          <th>Forecast</th>
                          <th>Prior</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td><div className="table-btn green-btn">Holiday</div></td>
                        <td>Monthly Home Price MM</td>
                        <td><div className='table-flex'><img src={CountryImage} alt="country-imag" />USA</div></td>
                        <td>02/01/2024 12:00 PM</td>
                        <td>0.6%</td>
                        <td>4.6%</td>
                        <td>3.9%</td>
                      </tr>
                      <tr>
                        <td><div className="table-btn dark-green-btn">Low</div></td>
                        <td>Monthly Home Price MM</td>
                        <td><div className='table-flex'><img src={CountryImage} alt="country-imag" />USA</div></td>
                        <td>02/01/2024 12:00 PM</td>
                        <td>0.6%</td>
                        <td>4.6%</td>
                        <td>3.9%</td>
                      </tr>
                      <tr>
                        <td><div className="table-btn red-btn">High</div></td>
                        <td>Monthly Home Price MM</td>
                        <td><div className='table-flex'><img src={CountryImage} alt="country-imag" />USA</div></td>
                        <td>02/01/2024 12:00 PM</td>
                        <td>0.6%</td>
                        <td>4.6%</td>
                        <td>3.9%</td>
                      </tr>
                      <tr>
                        <td><div className="table-btn orange-btn">Medium</div></td>
                        <td>Monthly Home Price MM</td>
                        <td><div className='table-flex'><img src={CountryImage} alt="country-imag" />USA</div></td>
                        <td>02/01/2024 12:00 PM</td>
                        <td>0.6%</td>
                        <td>4.6%</td>
                        <td>3.9%</td>
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
    </>
  )
}

export default EconomicCalendar
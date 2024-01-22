import React, { useState } from "react";
import TradeOverviewImage from '../../assets/images/leader-board-chart.png'
const Leaderboard = () => {
  const [overviewActive , SetoverviewActive] = useState(1);
  return (
    <>
      <div className="leader-board-wrapper">
        <div className="leader-board-list">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name/Country</th>
                <th>Return%</th>
                <th>
                  %back from <br /> 1st place
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="rank">1</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">2</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">3</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">4</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">5</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">6</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">7</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">8</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">9</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="rank">10</span>
                </td>
                <td>
                  <span className="name">Martin Justra</span>
                  <span className="location">Switzerland</span>
                </td>
                <td>
                  <span className="text">Reture</span>
                  <span className="count">10.40</span>
                </td>
                <td>
                  <span className="text">back</span>
                  <span className="count">10.40</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="leader-board-details-wrapper">
          <div className="leader-board-statistics bg-white">
            <div className="trading-list-wrapper">
              <div className="title">
                <h2>Martin Justra Dashboard</h2>
              </div>
              <ul className="trading-tabs">
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      SetoverviewActive(1);
                    }}
                    className={`border-grey-btn overview-tab-btns tab-btns ${
                      overviewActive === 1 ? "active" : ""
                    }`}
                  >
                    Trade Overview
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      SetoverviewActive(2);
                    }}
                    className={`border-grey-btn overview-tab-btns tab-btns ${
                      overviewActive === 2 ? "active" : ""
                    }`}
                  >
                    Statistics
                  </a>
                </li>
              </ul>
            </div>
            <div className="overview-chart-wrap">
              <div
                className={`trade-overview-tab-content chart-tab-content ${
                  overviewActive === 1 ? "tab-active" : ""
                }`}
              >
                <div className="trading-chart">
                  <img src={TradeOverviewImage} alt="trade-overview-chart" />
                </div>
              </div>
              <div
                className={`statistics-tab-content chart-tab-content ${
                  overviewActive === 2 ? "tab-active" : ""
                }`}
              >
                <ul>
                  <li className="statistics-list">
                    <p className="lable-title">Current Equity</p>
                    <p>$69,484.12</p>
                  </li>
                  <li className="statistics-list">
                    <p className="lable-title">Current Balance</p>
                    <p>$69,308.85</p>
                  </li>
                  <li className="statistics-list">
                    <p className="lable-title">Cumulative PNL</p>
                    <p>$6,984.12</p>
                  </li>
                  <li className="statistics-list">
                    <p className="lable-title">Most Traded Product</p>
                    <p>GER40</p>
                  </li>
                  <li className="statistics-list">
                    <p className="lable-title">% Return</p>
                    <p>10.89</p>
                  </li>
                  <li className="statistics-list">
                    <p className="lable-title">Win Rate</p>
                    <p>58.08</p>
                  </li>
                  <li className="statistics-list">
                    <p className="lable-title">Account Age</p>
                    <p>17 days</p>
                  </li>
                  <li className="statistics-list">
                    <p className="lable-title">Loss Rate</p>
                    <p>41.05</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="leader-board-dashboard-table mt-30 bg-white">
            <div className="title-wrap">
              <div className="title">
                <h2>Martin Justra Dashboard</h2>
                </div>
                <div className="search-box">
                    <label for="search" className="search-input">
                        <input type="search" id="search" placeholder="Search" />
                    </label>
                </div>

            </div>
            <div className="custom-table">
                <table>
                    <thead>
                        <tr>
                            <th>Open Time</th>
                            <th>Open Price </th>
                            <th>Close Time</th>
                            <th>Close Price</th>
                            <th>Side</th>
                            <th>Symbol</th>
                            <th>Volume</th>
                            <th>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023-12-05 10:21:05</td>
                            <td>2,029.4800</td>
                            <td>2023-12-05 12:43:25</td>
                            <td>2,029.4800</td>
                            <td><div className="table-btn side-btn green-btn">Buy</div></td>
                            <td>XAUUSDx</td>
                            <td>5.00</td>
                            <td>$5.42</td>
                        </tr>
                        <tr>
                            <td>2023-12-05 10:21:05</td>
                            <td>2,029.4800</td>
                            <td>2023-12-05 12:43:25</td>
                            <td>2,029.4800</td>
                            <td><div className="table-btn side-btn green-btn">Buy</div></td>
                            <td>XAUUSDx</td>
                            <td>5.00</td>
                            <td>$5.42</td>
                        </tr>
                        <tr>
                            <td>2023-12-05 10:21:05</td>
                            <td>2,029.4800</td>
                            <td>2023-12-05 12:43:25</td>
                            <td>2,029.4800</td>
                            <td><div className="table-btn side-btn green-btn">Buy</div></td>
                            <td>XAUUSDx</td>
                            <td>5.00</td>
                            <td>$5.42</td>
                        </tr>
                        <tr>
                            <td>2023-12-05 10:21:05</td>
                            <td>2,029.4800</td>
                            <td>2023-12-05 12:43:25</td>
                            <td>2,029.4800</td>
                            <td><div className="table-btn side-btn green-btn">Buy</div></td>
                            <td>XAUUSDx</td>
                            <td>5.00</td>
                            <td>$5.42</td>
                        </tr>
                        <tr>
                            <td>2023-12-05 10:21:05</td>
                            <td>2,029.4800</td>
                            <td>2023-12-05 12:43:25</td>
                            <td>2,029.4800</td>
                            <td><div className="table-btn side-btn green-btn">Buy</div></td>
                            <td>XAUUSDx</td>
                            <td>5.00</td>
                            <td>$5.42</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Leaderboard;

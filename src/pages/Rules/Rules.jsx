import React from 'react'
import OngoingIcon from '../../assets/images/icon-ongoing.svg'
import PassedIcon from '../../assets/images/icon-passed.svg'
const Rules = () => {
   const RulesContent = [
      {
        className : "ongoing-box-content",
        icon : OngoingIcon,
        title : "Prove you can generate a minimum 10% net profit.",
        btnTitle : "Ongoing",
        btnClassName : "ongoing-btn",
        details1 : "Minimum Net Profit:  10%",
        details2 : <>Total Net Profit: <span>24%</span></>
      },
      {
        className : "ongoing-box-content",
        icon : OngoingIcon,
        title : "Don’t Lose more than 8% from your high water mark.",
        btnTitle : "Ongoing",
        btnClassName : "ongoing-btn",
        details1 : "Minimum High Water Mark Lose: 8%",
        details2 : <>Total High Water Mark <span>16%</span></>
      },
      {
        className : "ongoing-box-content",
        icon : OngoingIcon,
        title : "Prove you can generate a minimum 10% net profit.",
        btnTitle : "Ongoing",
        btnClassName : "ongoing-btn",
        details1 : "Minimum Net Profit:  10%",
        details2 : <>Total Net Profit: <span>24%</span></>
      },
      {
        className : "passed-box-content",
        icon : PassedIcon,
        title : "Every trade must have a stop loss",
        btnTitle : "Passed",
        btnClassName : "passed-btn",
        details1 : "Minimum Loss:  10%",
        details2 : <>Total Loss: <span>24%</span></>
      },
      {
        className : "passed-box-content",
        icon : PassedIcon,
        title : "Earn 75% profit share on funded account(90% with add-on is purchased)",
        btnTitle : "Passed",
        btnClassName : "passed-btn",
        details1 : "Profit Share: 75%",
        details2 : <>Total Profit: <span>16%</span></>
      }
    ]
  return (
    <div className='rules-page-wrapper bg-white'>
      <div className='rules-wrapper'>
        <ul>
            {RulesContent.map((rules,i) =>{
              return(
                <li key={i} className={`rules-box ${rules.className}`}>
                  <div className='custom-row'>
                    <div className='title-wrap'>
                      <div className='icon-box'>
                        <img src={rules.icon} alt="rules-icon" />
                      </div>
                      <div className='rules-box-content'>
                        <h5>{rules.title}</h5>
                        <div className='inner-content'>
                          <span className='para'>{rules.details1}</span>
                          <p>{rules.details2}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`solid-green-btn ${rules.btnClassName}`}>{rules.btnTitle}</div>
                  </div>
              </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Rules
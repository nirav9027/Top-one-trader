import React, { useState } from 'react'

const NewChallenge = () => {
  const [isActive, setisActive] = useState(1);
  const [DiscountShow, setDiscountShow] = useState(false)
  const [VerifyShow, setVerifyShow] = useState(false)
  const [Modal, setModal] = useState(false)

  const AccountBalanceList = [
    {
      step: '1-Step Flash Challenge',
      price: '$12,500.00',
    },
    {
      step: '1-Step Flash Challenge',
      price: '$31,250.00',
    },
    {
      step: '1-Step Flash Challenge',
      price: '$62.500.00',
    },
    {
      step: '1-Step Flash Challenge',
      price: '$125,000.00',
    },
    {
      step: '1-Step Flash Challenge',
      price: '$250,000.00',
    },
  ]

  const AccountBalanceList2 = [
    {
      step: '2-Step Flash Challenge',
      price: '$12,500.00',
    },
    {
      step: '2-Step Flash Challenge',
      price: '$31,250.00',
    },
    {
      step: '2-Step Flash Challenge',
      price: '$62.500.00',
    },
    {
      step: '2-Step Flash Challenge',
      price: '$125,000.00',
    },
    {
      step: '2-Step Flash Challenge',
      price: '$250,000.00',
    },
  ]

  const ChallengeList = [
    {
      title: 'You Keep Up to 90% of The Gains',
    },
    {
      title: 'Gain Target: 10%',
    },
    {
      title: 'Daily Loss Limit: 5%',
    },
    {
      title: 'Max Trailing Drawdown: 8%',
    },
    {
      title: 'Leverage Up To: 20:1**',
    },
    {
      title: 'Hold Trades Over The Weekend',
    },
    {
      title: 'No Time Limit. No Min/Max Trading Days.',
    },
    {
      title: 'News Trading & EAs Allowed',
    }
  ]

  const ChallengeList2 = [
    {
      title: 'You Keep Up to 90% of The Gains',
    },
    {
      title: 'Gain Target: 10%',
    },
    {
      title: 'Daily Loss Limit: 5%',
    },
    {
      title: 'Max Trailing Drawdown: 8%',
    },
    {
      title: 'Leverage Up To: 20:1**',
    },
    {
      title: 'Hold Trades Over The Weekend',
    },
    {
      title: 'No Time Limit. No Min/Max Trading Days.',
    },
    {
      title: 'News Trading & EAs Allowed',
    }
  ]
  return (
    <>
      <div className='new-challenge-wrapper'>
        {/* New Challenge Tab */}
        <ul className="challenge-tab-menu">
          <li className="challenge-tab-item"><a onClick={() => { setisActive(1) }} className={`challenge-tab-link step1 ${isActive === 1 ? "active" : ""}`}>1-Step Challenge</a></li>
          <li className="challenge-tab-item"><a onClick={() => { setisActive(2) }} className={`challenge-tab-link step2 ${isActive === 2 ? "active" : ""}`}>2-Step Challenge</a></li>
        </ul>
        {/* End New Challenge Tab */}

        <div className="challenge-tab-body">
          {/* 1-Step Challenge Tab */}
          <div className={`challenge-tab step1-challenge ${isActive === 1 ? "tab-active" : ""}`}>
            <div className="tab-col tab-col-1">
              <div className="tab-inner">
                <div className="head">
                  <h2 className='title'>1-Step <span>“Flash”</span> Challenge</h2>
                </div>
                <div className="inner-body">
                  <ul className='challenge-list'>
                    {ChallengeList?.map((list, i) => {
                      return (
                        <>
                          <li key={i}>{list.title}</li>
                        </>
                      )
                    })}
                  </ul>
                  <p className='italic'>Standard gain share of 75% can be increased to 90% with add-on purchase. </p>
                  <p className='italic'>Standard Leverage can be increased up to 20:1 with add-on purchase & applies only to FX & Metals</p>
                </div>
              </div>
            </div>
            <div className="tab-col tab-col-2">
              <div className="tab-inner">
                <div className="head">
                  <h2 className='title'>Account Balance</h2>
                </div>
                <div className="inner-body">
                  <ul className='account-balance-list'>
                    {AccountBalanceList?.map((list, i) => {
                      return (
                        <li key={i} className='balance-item'>
                          <input type="radio" name='radio' id={list.price} />
                          <label for={list.price}>
                            {list.step}
                            <span className='price'>{list.price}</span>
                          </label>
                        </li>
                      )
                    })

                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-col tab-col-3">
              <div className="col-card">
                <h2 className="title">Broker</h2>
                <ul className='multi-select-check single-check dark-check'>
                  <li className='item'>
                    <input type="radio" name='Broker' id='ThinkMarkets'/>
                    <label for="ThinkMarkets">ThinkMarkets</label>
                  </li>
                </ul>
              </div>
              <div className="col-card">
                <h2 className="title">Platform</h2>
                <ul className='multi-select-check single-check'>
                  <li className='item'>
                    <input type="radio" name='Platform' id='MT4'/>
                    <label for="MT4">MT4</label>
                  </li>
                  <li className='item'>
                    <input type="radio" name='Platform' id='MT5'/>
                    <label for="MT5">MT5</label>
                  </li>
                </ul>
              </div>
              <div className="col-card">
                <h2 className="title">Add Ons</h2>
                <ul className='multi-select-check'>
                  <li className='item'>
                    <input type="checkbox" id='Leverage'/>
                    <label for="Leverage">Double Leverage (+25%)(Forex And Metals Only)</label>
                  </li>
                  <li className='item'>
                    <input type="checkbox" id='Loss'/>
                    <label for="Loss">No Stop Loss (+10%)</label>
                  </li>
                  <li className='item'>
                    <input type="checkbox" id='Gains'/>
                    <label for="Gains">90/10 Share of Gains (+20%)</label>
                  </li>
                </ul>
              </div>
              <div className="col-card">
                <h2 className="title">Bundles</h2>
                <ul className='multi-select-check'>
                  <li className='item'>
                    <input type="checkbox" id='Bundle'/>
                    <label for="Bundle">Pro Bundle (Include All 3 Add-Ons) (+30%)</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-col tab-col-4">
              <div className="tab-inner">
                <div class="checkbox-flex">
                  <label class="checkbox-group"><input type="checkbox" id="Agree-with-TC" /><label for="Agree-with-TC">Agree with T&amp;C</label></label>
                  <label class="checkbox-group"><input type="checkbox" id="refund-policy" /><label for="refund-policy">Agree with Refund Policy</label></label>
                  <label class="checkbox-group"><input type="checkbox" id="privacy-policy" /><label for="privacy-policy">Agree with Privacy Policy</label></label>
                  <span class="error" style={{display: 'none'}}>Please select policy</span>
                </div>
                <div className='discount-group'>
                  {DiscountShow===true ? 
                    <div className={`input-wrapper ${VerifyShow===true ? "verify" : ""}`}>
                      <input type="text" placeholder='Discount Code' defaultValue='TOPONE24'/>
                      {VerifyShow===true ?
                        <button type='button' className='verify-btn' onClick={()=>{setVerifyShow(!VerifyShow)}}>Remove</button>
                        :
                        <button type='button' className='verify-btn' onClick={()=>{setVerifyShow(!VerifyShow)}}>Verify</button>
                      }
                      <span class="error" style={{display: 'none'}}>Please enter code</span>
                    </div>
                  :
                    <span className='discount-btn' onClick={()=>{setDiscountShow(true)}}>Have you discount code?</span>
                  }
                   
                  <div className="create-ordar">
                    <div className='input-wrapper'>
                      <div className='input-inner'>
                        <label>Purchase Price:</label>
                        <input type="text" placeholder='Price' defaultValue='$20,500.00'/>
                      </div>
                      <button type='button' className='create-btn' onClick={()=>{setModal(true)}}>Create Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End 1-Step Challenge Tab */}

          {/* 2-Step Challenge Tab */}
          <div className={`challenge-tab step2-challenge ${isActive === 2 ? "tab-active" : ""}`}>
            <div className="tab-col tab-col-1">
              <div className="tab-inner">
                <div className="head">
                  <h2 className='title'>2-Step <span>“Pro”</span> Challenge</h2>
                </div>
                <div className="inner-body">
                  <ul className='challenge-list'>
                    {ChallengeList2?.map((list, i) => {
                      return (
                        <>
                          <li key={i}>{list.title}</li>
                        </>
                      )
                    })}
                  </ul>
                  <p className='italic'>Standard gain share of 75% can be increased to 90% with add-on purchase. </p>
                  <p className='italic'>Standard Leverage can be increased up to 20:1 with add-on purchase & applies only to FX & Metals</p>
                </div>
              </div>
            </div>
            <div className="tab-col tab-col-2">
              <div className="tab-inner">
                <div className="head">
                  <h2 className='title'>Account Balance</h2>
                </div>
                <div className="inner-body">
                  <ul className='account-balance-list'>
                    {AccountBalanceList2?.map((list, i) => {
                      return (
                        <li key={i} className='balance-item'>
                          <input type="radio" name='radio' id={`${list.price}-1`} />
                          <label for={`${list.price}-1`}>
                            {list.step}
                            <span className='price'>{list.price}</span>
                          </label>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-col tab-col-3">
              <div className="col-card">
                <h2 className="title">Broker</h2>
                <ul className='multi-select-check single-check dark-check'>
                  <li className='item'>
                    <input type="radio" name='Broker' id='ThinkMarkets-1'/>
                    <label for="ThinkMarkets-1">ThinkMarkets</label>
                  </li>
                </ul>
              </div>
              <div className="col-card">
                <h2 className="title">Platform</h2>
                <ul className='multi-select-check single-check'>
                  <li className='item'>
                    <input type="radio" name='Platform' id='MT4-1'/>
                    <label for="MT4-1">MT4</label>
                  </li>
                  <li className='item'>
                    <input type="radio" name='Platform' id='MT5-1'/>
                    <label for="MT5-1">MT5</label>
                  </li>
                </ul>
              </div>
              <div className="col-card">
                <h2 className="title">Add Ons</h2>
                <ul className='multi-select-check'>
                  <li className='item'>
                    <input type="checkbox" id='Loss-1'/>
                    <label for="Loss-1">No Stop Loss (+10%)</label>
                  </li>
                  <li className='item'>
                    <input type="checkbox" id='Gains-1'/>
                    <label for="Gains-1">90/10 Share of Gains (+20%)</label>
                  </li>
                </ul>
              </div>
              <div className="col-card">
                <h2 className="title">Bundles</h2>
                <ul className='multi-select-check'>
                  <li className='item'>
                    <input type="checkbox" id='Bundle-1'/>
                    <label for="Bundle-1">Pro Bundle (Include All 3 Add-Ons) (+30%)</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-col tab-col-4">
              <div className="tab-inner">
                <div class="checkbox-flex">
                  <label class="checkbox-group"><input type="checkbox" id="Agree-with-TC-1" /><label for="Agree-with-TC-1">Agree with T&amp;C</label></label>
                  <label class="checkbox-group"><input type="checkbox" id="refund-policy-1" /><label for="refund-policy-1">Agree with Refund Policy</label></label>
                  <label class="checkbox-group"><input type="checkbox" id="privacy-policy-1" /><label for="privacy-policy-1">Agree with Privacy Policy</label></label>
                  <span class="error" style={{display: 'none'}}>Please select policy</span>
                </div>
                <div className='discount-group'>
                  {DiscountShow===true ? 
                    <div className={`input-wrapper ${VerifyShow===true ? "verify" : ""}`}>
                      <input type="text" placeholder='Discount Code' defaultValue='TOPONE24'/>
                      {VerifyShow===true ?
                        <button type='button' className='verify-btn' onClick={()=>{setVerifyShow(!VerifyShow)}}>Remove</button>
                        :
                        <button type='button' className='verify-btn' onClick={()=>{setVerifyShow(!VerifyShow)}}>Verify</button>
                      }
                      <span class="error" style={{display: 'none'}}>Please enter code</span>
                    </div>
                  :
                    <span className='discount-btn' onClick={()=>{setDiscountShow(true)}}>Have you discount code?</span>
                  }
                  
                  <div className="create-ordar">
                    <div className='input-wrapper'>
                      <div className='input-inner'>
                        <label>Purchase Price:</label>
                        <input type="text" placeholder='Price' defaultValue='$20,500.00'/>
                      </div>
                      <button type='button' className='create-btn'  onClick={()=>{setModal(true)}}>Create Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End 2-Step Challenge Tab */}
        </div>
        <div className={`payment-modal ${Modal===true ? "show" : ""}`}>
          <div className="modal-inner">
            <div className="modal-body">
              <h2 className='title'>Complete Payment</h2>
              <p>You will be redirected to the checkout page. please click proceed to finish your payment.</p>
              <div className="modal-btn-group">
                <button type='button' className='solid-green-btn modal-btn' onClick={()=>{setModal(false)}}>Proceed to Payment</button>
                <button type='button' className='border-grey-btn modal-btn' onClick={()=>{setModal(false)}}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewChallenge
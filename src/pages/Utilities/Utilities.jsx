import React, { useState } from 'react'
import UtilitiesDownloadImage from "../../assets/images/utilities-download-image.png";
import UtilitiesVideoImage from "../../assets/images/utilities-video-image.png";
const Utilities = (download,video) => {
  const [isActive, setisActive] = useState(download);
  return (
    <div className='utilities-page'>
      <div className='utilities-wrapper'>
          <ul className='utilities-tabs-menu bg-white'>
          <li className="utilities-tab-item"><a onClick={()=>{setisActive(download)}} className={`utilities-tab-link ${isActive===download?"active":""}`}>Download</a></li>
                    <li className="utilities-tab-item"><a onClick={()=>{setisActive(video)}} className={`utilities-tab-link ${isActive===video?"active":""}`}>Video</a></li>
          </ul>
          <div className="utilities-tabs-content">
            <div className={`utilities-content-wrapper ${isActive===download?"tab-active" :""}`}>
              <ul className='download-content tab-content'>
                <li className='utilities-box bg-white'>
                    <div className='image-box'>
                        <img src={UtilitiesDownloadImage} alt="utilities-tab-image" />
                    </div>
                    <div className='content'>
                      <h5>MT4</h5>
                      <button type='button' className='solid-green-btn download-btn'>Download</button>
                    </div>
                </li>
                <li className='utilities-box bg-white'>
                    <div className='image-box'>
                        <img src={UtilitiesDownloadImage} alt="utilities-tab-image" />
                    </div>
                    <div className='content'>
                      <h5>MT4</h5>
                      <button type='button' className='solid-green-btn download-btn'>Download</button>
                    </div>
                </li>
                <li className='utilities-box bg-white'>
                    <div className='image-box'>
                        <img src={UtilitiesDownloadImage} alt="utilities-tab-image" />
                    </div>
                    <div className='content'>
                      <h5>MT4</h5>
                      <button type='button' className='solid-green-btn download-btn'>Download</button>
                    </div>
                </li>
                <li className='utilities-box bg-white'>
                    <div className='image-box'>
                        <img src={UtilitiesDownloadImage} alt="utilities-tab-image" />
                    </div>
                    <div className='content'>
                      <h5>MT4</h5>
                      <button type='button' className='solid-green-btn download-btn'>Download</button>
                    </div>
                </li>
              </ul>
              </div>
              <div className={`utilities-content-wrapper ${isActive===video?"tab-active" :""}`}>
                <ul className='video-content tab-content'>
                  <li className='utilities-box bg-white'>
                    <div className='image-box'>

                      <video width="100%" height="100%" controls >
                        <source src="https://pic.pikbest.com/19/92/59/56h888piC4us.mp4" type="video/mp4"/>
                        <source src='https://pic.pikbest.com/19/92/59/56h888piC4us.mp4' type="video/ogg" />
                      </video>

                      </div>
                      <div className='content'>
                        <h5>How To Calculate Drawdown on Topone Trader.</h5>
                      </div>
                  </li>
                  <li className='utilities-box bg-white'>
                    <div className='image-box'>
                        <video width="100%" height="100%" controls >
                          <source src="https://pic.pikbest.com/19/92/59/56h888piC4us.mp4" type="video/mp4"/>
                          <source src='https://pic.pikbest.com/19/92/59/56h888piC4us.mp4' type="video/ogg" />
                        </video>
                        { /*<img src={UtilitiesVideoImage} alt="utilities-tab-image" /> */}
                      </div>
                      <div className='content'>
                        <h5>How To Calculate Drawdown on Topone Trader.</h5>
                      </div>
                  </li>
                  <li className='utilities-box bg-white'>
                    <div className='image-box'>
                        <video width="100%" height="100%" controls >
                          <source src="https://pic.pikbest.com/19/92/59/56h888piC4us.mp4" type="video/mp4"/>
                          <source src='https://pic.pikbest.com/19/92/59/56h888piC4us.mp4' type="video/ogg" />
                        </video>
                        { /*<img src={UtilitiesVideoImage} alt="utilities-tab-image" /> */}
                      </div>
                      <div className='content'>
                        <h5>How To Calculate Drawdown on Topone Trader.</h5>
                      </div>
                  </li>
                  <li className='utilities-box bg-white'>
                    <div className='image-box'>
                        <video width="100%" height="100%" controls >
                          <source src="https://pic.pikbest.com/19/92/59/56h888piC4us.mp4" type="video/mp4"/>
                          <source src='https://pic.pikbest.com/19/92/59/56h888piC4us.mp4' type="video/ogg" />
                        </video>
                        { /*<img src={UtilitiesVideoImage} alt="utilities-tab-image" /> */}
                      </div>
                      <div className='content'>
                        <h5>How To Calculate Drawdown on Topone Trader.</h5>
                      </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Utilities
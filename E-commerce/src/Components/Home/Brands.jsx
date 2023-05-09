import React from 'react'
import Logodawlance from '../../assets/images/logo-dawlance.png'
import Logopel from '../../assets/images/logo-pel.png'
import LogoHaier from '../../assets/images/logo-haier.png'
import Logojazzcash from '../../assets/images/logo-jazzcash.png'
import Logoeasypaisa from '../../assets/images/logo-easypaisa.png'

const Brands = () => {
  return (
    // Brands
    <div className="brands">
        <div className="small-container">
            <div className="row">
                <div className="col-5">
                <img src={Logodawlance} alt=""/>
                </div>
                <div className="col-5">
                    <img src={Logopel} alt=""/>
                </div>
                <div className="col-5">
                    <img src={LogoHaier} alt=""/>
                </div>
                <div className="col-5">
                    <img src={Logojazzcash} alt=""/>
                </div>
                <div className="col-5">
                    <img src={Logoeasypaisa} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands

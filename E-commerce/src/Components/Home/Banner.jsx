import React from 'react'
import { Link } from 'react-router-dom'
import Pre from '../../assets/images/pre-u.jpg'


const Banner = () => {
  return (
    //Banner
    <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img src={Pre} width="500px" height="355px"alt=""/> 
                </div>
                <div className="col-2">
                    <p>Available on ELECTRONICS SPOT</p>
                    <h1>Smart DC INVERTER</h1>
                    <small>The Smart DC INVERTER 4 features AMOLED color full-touch display
                        with adjustable brightness, so everything is clear as can be.</small><br/>
                    <Link to="/product" className="btn">Buy Now &#8594;</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner

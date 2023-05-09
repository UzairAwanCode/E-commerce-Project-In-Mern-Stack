import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../../assets/slider/mu.jpg'
import Image2 from '../../assets/slider/us4.png'
import Image3 from '../../assets/slider/us5.png'
import Image4 from '../../assets/slider/us3.png'
import Image5 from '../../assets/slider/4.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function Headerbanner() {
    return (
        <div className="row">
            <div>

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={Image1} width={850} height={850} alt="First slide" />
                            <div className="slide-text">
                                <h2 className="sl-h">Limited Time Offer!</h2>
                                <p className="sl-para">GRAND HOME APPLIANCES SALE 11 to 30 MARCH <br /> UPTO 75% DISCOUNTS ON EVERY ITEM   </p>
                                <button className="sl-btn"><Link to='/refrigerators'>Shop Now</Link></button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Image2} width={850} height={850} alt="First slide" />
                            <div className="slide-text"></div>
                            <div className="slide-text">
                                <h2 className="sl-h">SUPER SAVER Offer</h2>
                                <p className="sl-para">UPTO 50% DISCOUNTS ON EVERY REFRIGRATOR <br /> DAWLANCE   </p>
                                <button className="sl-btn"><Link to='/refrigerators'>Shop Now</Link></button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Image3} width={850} height={850} alt="First slide" />
                            <div className="slide-text"></div>
                            <div className="slide-text">
                                <h2 className="sl-h">Limited Time Offer!</h2>
                                <p className="sl-para">Avail discount of PKR 90,000 on purchase of 255-ES <br /> Washing Machine </p>
                                <button className="sl-btn" ><Link to='/refrigerators'>Shop Now</Link></button>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <img className="d-block w-100" src={Image4} width={850} height={850} alt="First slide" />
                            <div className="slide-text"></div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image5} alt="fifth slide" />
                    </div>

                    <div style={{ display: "inline-block", position: "absolute", width: "4rem", height: "4rem", lineHeight: "0.6rem", textAlign: "center", borderRadius: "50%", fontSize: "0", marginTop: "-550px", marginLeft: "45px", cursor: "pointer", backgroundColor: "rgba(12, 92, 168, 0.3)" }}>
                        <a className="carousel-control-prev" style={{ marginLeft: "27px", color: "#fff", fontSize: "30px" }} href="#carouselExampleControls" role="button" data-slide="prev">
                            <i className="fas"> <BsChevronLeft /></i>
                            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            {/* <span className="sr-only">Previous</span> */}
                        </a>
                    </div>

                    <div style={{ display: "inline-block", position: "absolute", right: "1%", width: "4rem", height: "4rem", lineHeight: "0.6rem", textAlign: "center", borderRadius: "50%", fontSize: "0", top: "50%", marginTop: "-110px", marginRight: "45px", cursor: "pointer", backgroundColor: "rgba(12, 92, 168, 0.3)" }}>
                        <a className="carousel-control-next" style={{ marginRight: "23px", color: "#fff", fontSize: "30px" }} href="#carouselExampleControls" role="button" data-slide="next">
                            <i className="fas"> <BsChevronRight /></i>
                            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                            {/* <span className="sr-only">Next</span> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headerbanner

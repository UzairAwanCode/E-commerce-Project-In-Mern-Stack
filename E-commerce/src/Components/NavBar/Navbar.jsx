import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import Cart from '../../assets/images/cart56.png'
import Image1 from '../../assets/headerpictures/1.png'
import Image2 from '../../assets/headerpictures/2.png'
import Image3 from '../../assets/headerpictures/3.png'
import Image4 from '../../assets/headerpictures/4.png'
import SubImage1 from '../../assets/headerpictures/subheader/1.png'
import SubImage2 from '../../assets/headerpictures/subheader/2.png'
import SubImage3 from '../../assets/headerpictures/subheader/3.png'
import SubImage4 from '../../assets/headerpictures/subheader/4.png'
import { useState } from 'react'
import Headerbanner from '../Home/Headerbanner'
import { useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Searchbar from './Searchbar'



const Navbar = (props) => {
    const [show, setShow] = useState(false);
    const [removebanner, setRemovebanner] = useState(true);
    const [myheader, setMyHeader] = useState("header");
    useEffect(() => {
        setRemovebanner(true);
        setMyHeader("header");
    }, [])
    const homebanner = () => {
        setRemovebanner(true)
        setMyHeader("header")
    }
    const removehomebanner = () => {
        setRemovebanner(false)
        setMyHeader("")
    }

    const accountfunc = () => {
        setRemovebanner(false)
        setMyHeader("header")
    }

    const Logout = ()=>{
        window.localStorage.clear()
        window.location.href = '/account'
    }
    return (
        <div className="header" >
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <Link className='logosection' to="/">
                            <img src={Logo} width="300px" height="300px" alt="" />
                        </Link>
                    </div>

                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links" style={{}}>
                        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                        <li className="nav-links-hover"><Link to="/" onClick={homebanner}>Home</Link></li>
                        <li>
                            <Link className="desktop-item nav-links-hover-product" to="#" onClick={() => setShow(!show)}>Products <span><FontAwesomeIcon icon={faCaretDown} /></span> </Link>
                            <input type="checkbox" id="showMega" />
                            {
                                show &&
                                <div className="mega-box">

                                    <div className="content">

                                        {/* 1st Picture */}
                                        <div className="row mycontent" style={{ marginLeft: "-10px", backgroundColor: "", width: "18%", height: "193px", padding: "20px" }}>
                                            <Link className='Nav-link' to='/refrigerators' onClick={() => setShow(false)} style={{ width: "80%", height: "100%", marginTop: "-70px", marginLeft: "20%" }}>
                                                <img src={Image1} style={{ width: "50%", height: "100%" }} alt="" />
                                                <p style={{ color: "#fff", marginTop: "-28px", marginLeft: "-35px", fontSize: "13px" }}>Refrigerators and Freezers</p>
                                                <div className='line'></div>
                                            </Link>

                                            {/* Sub Menu */}
                                            <div className="Mega-box">
                                                <div className="Content">

                                                    <div className="Row" style={{ marginLeft: "50px" }}>
                                                        <header style={{ color: "black", width: "50%", fontWeight: "500", fontSize: "1em" }}>Refrigerator</header>
                                                        <ul className="Mega-links">
                                                            <li><Link onClick={() => setShow(false)} to="/refrigerators">Double Door Refrigerator</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/refrigerators">Multi Door Refrigerator</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/refrigerators">No Frost Refrigerator</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/refrigerators">Single Door Refrigerator</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="Row">
                                                        <header style={{ color: "black", width: "50%", fontWeight: "500", fontSize: "1em" }}>Freezers</header>
                                                        <ul className="Mega-links">
                                                            <li><Link onClick={() => setShow(false)} to="/refrigerators">Single Door Freezer</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/refrigerators">Twin Door Freezer</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/refrigerators">Vertical Freezer</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/refrigerators">No Frost Vertical Freezer</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="Row">

                                                        <ul className="Mega-links">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>
                                                    <div className="Row">

                                                        <ul className="Mega-links">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row" style={{}}>
                                                        <img className='imgsub' style={{ width: "120%", height: "210px", marginLeft: "-100px", marginTop: "5px", backgroundSize: "cover" }} src={SubImage1} alt="" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        {/* 2nd Picture */}
                                        <div className="row mycontent" style={{ marginLeft: "-10px", backgroundColor: "", width: "18%", height: "193px", padding: "20px" }}>
                                            <Link className='Nav-link' to='/machines' onClick={() => setShow(false)} style={{ width: "80%", height: "100%", marginTop: "-70px", marginLeft: "20%" }}>
                                                <img src={Image2} style={{ width: "50%", height: "100%" }} alt="" />
                                                <p style={{ color: "#fff", marginTop: "-28px", marginLeft: "-35px", fontSize: "13px" }}>Washing Machines</p>
                                                <div className='line'></div>
                                            </Link>

                                            {/* Sub Menu */}
                                            <div className="Mega-box">
                                                <div className="Content">

                                                    <div className="Row" style={{ marginLeft: "50px" }}>
                                                        <header style={{ color: "black", width: "50%", fontWeight: "500", fontSize: "1em" }}>Automatic</header>
                                                        <ul className="Mega-links">
                                                            <li><Link onClick={() => setShow(false)} to="/machines">Top Load Washing Machines</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/machines">Front Load Washing Machines</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/machines">Washer Dryers</Link></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row">
                                                        <header style={{ color: "black", width: "50%", fontWeight: "500", fontSize: "1em" }}>Semi Automatic</header>
                                                        <ul className="Mega-links">
                                                            <li><Link onClick={() => setShow(false)} to="/machines">Twin Tub Washing Machines</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/machines">Single Tub Washers</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/machines">Spinner Dryers</Link></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row">

                                                        <ul className="Mega-links">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row">

                                                        <ul className="Mega-links">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row" style={{}}>
                                                        <img className='imgsub' style={{ width: "120%", height: "210px", marginLeft: "-100px", marginTop: "5px", backgroundSize: "cover" }} src={SubImage2} alt="" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        {/* 3rd Picture */}
                                        <div className="row mycontent" style={{ marginLeft: "-10px", backgroundColor: "", width: "18%", height: "193px", padding: "20px" }}>
                                            <Link className='Nav-link' to='/ac' onClick={() => setShow(false)} style={{ width: "80%", height: "100%", marginTop: "-70px", marginLeft: "20%" }}>
                                                <img src={Image3} style={{ width: "50%", height: "100%" }} alt="" />
                                                <p style={{ color: "#fff", marginTop: "-28px", marginLeft: "-12px", fontSize: "13px" }}>Air Conditioners</p>
                                                <div className="line"></div>
                                            </Link>

                                            {/* Sub Menu */}
                                            <div className="Mega-box">
                                                <div className="Content">

                                                    <div className="Row" style={{ marginLeft: "50px" }}>
                                                        <header style={{ color: "black", width: "50%", fontWeight: "500", fontSize: "1em" }}>Split AC</header>
                                                        <ul className="Mega-links">
                                                            <li><Link onClick={() => setShow(false)} to="ac">Inverter</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="ac">Non-Inverter</Link></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row">
                                                        <header style={{ color: "black", width: "50%", fontWeight: "500", fontSize: "1em" }}>Floor Standing AC</header>
                                                        <ul className="Mega-links">
                                                            <li><Link onClick={() => setShow(false)} to="ac">Inverter</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="ac">Non-Inverter</Link></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row">
                                                        <ul className="Mega-links">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row">

                                                        <ul className="Mega-links">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row" style={{}}>
                                                        <img className='imgsub' style={{ width: "120%", height: "210px", marginLeft: "-100px", marginTop: "5px", backgroundSize: "cover" }} src={SubImage3} alt="" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        {/* 4th Picture */}
                                        <div className="row mycontent" style={{ marginLeft: "-10px", backgroundColor: "", width: "18%", height: "193px", padding: "20px" }}>
                                            <Link className='Nav-link' to='/microwave' onClick={() => setShow(false)} style={{ width: "80%", height: "100%", marginTop: "-70px", marginLeft: "20%" }}>
                                                <img src={Image4} style={{ width: "50%", height: "100%" }} alt="" />
                                                <p style={{ color: "#fff", marginTop: "-28px", marginLeft: "-12px", fontSize: "13px" }}>Microwave Oven</p>
                                                <div className="line"></div>
                                            </Link>

                                            {/* Sub Menu */}
                                            <div className="Mega-box">
                                                <div className="Content">

                                                    <div className="Row">
                                                        <header style={{ color: "black", width: "50%", fontWeight: "500", fontSize: "1em" }}>Microwave Ovens</header>
                                                        <ul className="Mega-links">
                                                            <li><Link onClick={() => setShow(false)} to="/microwave">Heating Microwave Ovens</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/microwave">TGrilling Microwave Ovens</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/microwave">Baking Microwave Ovens</Link></li>
                                                            <li><Link onClick={() => setShow(false)} to="/microwave">Air Fryer Microwave Ovens</Link></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row" style={{ marginLeft: "50px" }}>
                                                        <header style={{ color: "black", width: "50%", fontWeight: "500", fontSize: "1em" }}>Mini Ovens</header>
                                                    </div>

                                                    <div className="Row">

                                                        <ul className="Mega-links">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>
                                                    <div className="Row">

                                                        <ul className="Mega-links">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>

                                                    <div className="Row" style={{}}>
                                                        <img className='imgsub' style={{ width: "120%", height: "210px", marginLeft: "-100px", marginTop: "5px", backgroundSize: "cover" }} src={SubImage4} alt="" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            }
                        </li>

                        <li className="nav-links-hover"><Link to="/user/wishlist" onClick={removehomebanner}>WishList</Link></li>
                        <li className="nav-links-hover"><Link to="/contact" onClick={removehomebanner}>Contact</Link></li>
                        <li className="nav-links-hover"><Link to="/account" onClick={removehomebanner}>Account</Link></li>
                        <li className="nav-links-hover"><Link to="#" onClick={Logout}>Logout</Link></li>
                        <li className="nav-links-hover"><Link to='/buy/cart' onClick={removehomebanner}><img className='cart-icon' src={Cart} width="32px" height="35px" alt="" style={{ marginTop: "-5px" , marginRight:"280px" }} /></Link></li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn"><i class="fas"> <faBars /> </i></label>
                </div>
            </nav>
                    <Searchbar/>
        </div>
    )
}

export default Navbar

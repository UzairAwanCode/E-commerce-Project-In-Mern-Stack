import React from 'react'
import Product5 from '../../assets/pics/dawlance/image1.png'
import Product6 from '../../assets/pics/dawlance/download.jpg'
import Product7 from '../../assets/pics/dawlance/image2.png'
import Product8 from '../../assets/pics/haier/download1.jpg'
import Product9 from '../../assets/pics/haier/download2.jpg'
import Product10 from '../../assets/pics/haier/download5.jpg'

import {AiFillStar} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Latestproducts = () => {
  return (
    <>
      <h1 className="title">Latest Products</h1>
        <div className="row">
            <div className="col-4">
            <Link to='/refrigerators'><img className='productsize' src={Product5} alt=""/></Link>
                <h4  style={{marginLeft:"40px"}}>Dawlance Fridge</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                </div> */}
                <p style={{marginLeft:"40px"}}>Rs 66,000</p>
            </div>
            <div className="col-4">
                <Link to='/refrigerators'><img className='productsize' src={Product6} alt=""/></Link>
                <h4 style={{marginLeft:"40px"}}>Dawlance Fridge</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                    <i className="fa"><FiStar/></i>
                </div> */}
                <p style={{marginLeft:"40px"}}>Rs 78,000</p>
            </div>
            <div className="col-4">
                <Link to='/refrigerators'><img className='productsize' src={Product7} alt=""/></Link>
                <h4 style={{marginLeft:"40px"}}>Dawlance Fridge</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                </div> */}
                <p style={{marginLeft:"40px"}}>Rs 87,000</p>
            </div>
            <div className="col-4">
                <Link to='/refrigerators'><img className='productsize' src={Product8} alt=""/></Link>
                <h4 style={{marginLeft:"40px"}}>Haier Fridge</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                </div> */}
                <p style={{marginLeft:"40px"}}>Rs 77,000</p>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Link to='/refrigerators'><img className='productsize' src={Product9} alt=""/></Link>
                <h4 style={{marginLeft:"40px"}}>Haier Fridge</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div> */}
                <p style={{marginLeft:"40px"}}>Rs 95,000</p>
            </div>
            <div className="col-4">
            <Link to='/refrigerators'><img className='productsize' src={Product10} alt=""/></Link>
                <h4 style={{marginLeft:"40px"}}>Haier Fridge</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                </div> */}
                <p style={{marginLeft:"40px"}}>Rs 55,000</p>
            </div>
            <div className="col-4">
            <Link to='/refrigerators'><img className='productsize' src={Product8} alt=""/></Link>
                <h4 style={{marginLeft:"60px"}}>Pel Fridge</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                    <i className="fa"><FiStar/></i>
                </div> */}
                <p style={{marginLeft:"60px"}}>Rs 45,000</p>
            </div>
            <div className="col-4">
                <Link to='/refrigerators'><img className='productsize' src={Product8} alt=""/></Link>
                <h4 style={{marginLeft:"60px"}}>Pel Fridge</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div> */}
                <p style={{marginLeft:"60px"}}>Rs 75,000</p>
            </div>
        </div>
    </>
  )
}

export default Latestproducts

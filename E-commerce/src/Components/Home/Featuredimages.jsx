import React from 'react'
import Category1 from '../../assets/pics/dawlance/2.png'
import Category2 from '../../assets/pics/haier/download6.jpg'
import Category3 from '../../assets/pics/pel/download3.jpg'
import Product1 from '../../assets/pics/dawlance/image1.png'
import Product2 from '../../assets/pics/haier/download7.jpg'
import Product3 from '../../assets/pics/haier/download8.jpg'
import Product4 from '../../assets/pics/pel/download3.jpg'
import Latestproducts from './Latestproducts'
import {AiFillStar} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Featuredimages = () => {
  return (
    <>
    <div className="categories">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <img src={Category1}alt=""/>
                </div>
                <div className="col-3">
                    <img src={Category2}alt=""/>
                </div>
                <div className="col-3">
                    <img src={Category3}alt=""/>
                </div>
            </div>
        </div>
    </div>
    <div className="small-container">
        <h1 className="title">Featured Products</h1>
        <div className="row">
            <div className="col-4">
                <Link to='/refrigerators'><img className='productsize' src={Product1}alt=""/></Link>
                <h4 style={{marginLeft:"30px"}}>Refrigrator</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div> */}
                <p style={{marginLeft:"30px"}}>Rs 65,000</p>
            </div>
            <div className="col-4">
            <Link to='/machines'><img className='productsize' src={Product2}alt=""/></Link>
                <h4>Washing Machine</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                    <i className="fa"><FiStar/></i>
                </div> */}
                <p>Rs 45,000</p>
            </div>
            <div className="col-4">
            <Link to='/machines'><img className='productsize' src={Product3}alt=""/></Link>
                <h4>Washing Machine</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                </div> */}
                <p>Rs 47,000</p>
            </div>
            <div className="col-4">
            <Link to='/refrigerators'><img className='productsize' src={Product4}alt=""/></Link>
                <h4>Pel Refrigrator</h4>
                {/* <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div> */}
                <p>Rs 65,000</p>
            </div>
        </div>
        <Latestproducts/>

    </div>
    </>
  )
}

export default Featuredimages

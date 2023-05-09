import React from 'react'
import Product1 from '../../assets/pics/dawlance/download.jpg'
import Product2 from '../../assets/pics/dawlance/3.png'
import Product3 from '../../assets/pics/dawlance/image3.png'
import Product4 from '../../assets/pics/dawlance/image2.png'
import Product5 from '../../assets/pics/haier/download1.jpg'
import Product6 from '../../assets/pics/haier/download2.jpg'
import Product7 from '../../assets/pics/haier/download5.jpg'
import Product8 from '../../assets/pics/haier/download6.jpg'
import Product9 from '../../assets/pics/pel/download1.jpg'
import Product10 from '../../assets/pics/pel/download4.jpg'
import Product11 from '../../assets/pics/pel/download5.jpg'
import Product12 from '../../assets/pics/pel/download6.jpg'
import {AiFillStar} from 'react-icons/ai'
import {FaStarHalf , FaStarHalfAlt} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Allproducts = () => {
  return (
    <div style={{marginTop: "30px"}}>
        <h1>All Products</h1>
        <div className="row">
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product1}alt=""/></Link>                
                <h4>Dawlance Fridge</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div>
                <div class="wishlist">
                    <p>Rs 65,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product2}alt=""/></Link>                
                <h4>Dawlance AC</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                </div>
                <div class="wishlist">
                    <p>Rs 105,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product3}alt=""/></Link>                
                <h4>Dawlance Fridge</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                </div>
                 <div class="wishlist">
                    <p>Rs 75,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product4}alt=""/></Link>                
                <h4>Dawlance Fridge</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                    <i className="fa"><FiStar/></i>
                </div>
                <div class="wishlist">
                    <p>Rs 85,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product5}alt=""/></Link>                
                <h4>Haier Refrigrator</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                    <i className="fa"><FiStar/></i>
                    <i className="fa"><FiStar/></i>
                </div>
                 <div class="wishlist">
                    <p>Rs 89,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product6}alt=""/></Link>                
                <h4>Haier Refrigrator</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div>
                <div class="wishlist">
                    <p>Rs 73,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product7}alt=""/></Link>                
                <h4>Washing Machine</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                </div>
                 <div class="wishlist">
                    <p>Rs 45,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product8}alt=""/></Link>                
                <h4>Washing Machine</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div>
                 <div class="wishlist">
                    <p>Rs 55,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product9}alt=""/></Link>                
                <h4>Pel Refrigratort</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                </div>
                 <div class="wishlist">
                    <p>Rs 75,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product10}alt=""/></Link>
                <h4>Pel MicroWave Oven</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FiStar/></i>
                </div>
                 <div class="wishlist">
                    <p>Rs 25,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product11}alt=""/></Link>
                <h4>Pel MicroWave Oven</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div>
                 <div class="wishlist">
                    <p>Rs 20,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
            <div className="col-4">
                <Link to='/productdetails'><img className='productsize' src={Product12}alt=""/></Link>
                <h4>Pel MicroWave Oven</h4>
                <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><AiFillStar/></i>
                    <i className="fa"><FaStarHalfAlt/></i>
                </div>
                 <div class="wishlist">
                    <p>Rs 35,000</p>
                    <Link className='add-wist-list' to='/wishlist'>Add to Wishlist</Link>
                </div>
            </div>
        </div>
        <div className="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
        </div>
    </div>
  )
}

export default Allproducts

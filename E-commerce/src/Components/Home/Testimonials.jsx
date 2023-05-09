import React from 'react'
import User1 from '../../assets/images/user-1.png'
import User2 from '../../assets/images/user-2.png'
import User3 from '../../assets/images/user-3.png'
import {AiFillStar} from 'react-icons/ai'
import {FaQuoteLeft, FaStarHalfAlt} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'



const Testimonials = () => {
  return (
    //Testimonials
    <div className="testimonial">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <i className="fa-head"><FaQuoteLeft/></i>
                    <p>My oven was not working well.I called the customer care service agent he just came for an inspection and charged 900 rs. for only one visit. also placed a new bulb in the oven. it just fuses within 10 days.I don't recommend it to anyone</p>
                    <div className="rating">
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><FiStar/></i>
                    </div>
 
                    <img src={User1} alt=" "/>
                    <h3>Hina Ali</h3>
                </div>
                <div className="col-3">
                    <i className="fa-head"><FaQuoteLeft/></i>
                    <p>Haier Bottom Mounted Refrigerator is very much attractive in this segment. We can use this Bmr in different modes. 10yrs compressor and fan motor warranty makes life easier. This is best for aged womens. Value for money.</p>
                    <div className="rating">
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><FiStar/></i>
                    </div>
                    <img src={User2} alt=""/>
                    <h3>Muaz Ali</h3>
                </div>
                <div className="col-3">
                    <i className="fa-head"><FaQuoteLeft/></i>
                    <p>Avoid these refrigerators. The relay switch is totally unreliable and when it breaks you have to buy a whole kit, which includes other parts, just to get the switch. It is a terrible business plan to extract further money from customers.</p>
                    <div className="rating">
                    <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><AiFillStar/></i>
                        <i className="fa"><FaStarHalfAlt/></i>
                    </div>
                    <img src={User3} alt=""/>
                    <h3>Sana Akhter</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials

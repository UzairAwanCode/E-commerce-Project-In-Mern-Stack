import React from 'react'
import { Link } from 'react-router-dom'

const Producttitle = (props) => {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  console.log(props.productId)
  return (
    // title
    <div className="small-container">
        <div className="row row-2">
            <Link to={`/product/reviews/${props.productId}`}> <h2>See Product Reviews</h2> </Link>
            {isLoggedIn=="true" ? <p style={{marginBottom:"-20px" ,marginTop:"10px"}}>Write Review</p> : <Link to='/account'><p>Login To Write Review</p></Link>}
        </div>
    </div>
  )
}

export default Producttitle

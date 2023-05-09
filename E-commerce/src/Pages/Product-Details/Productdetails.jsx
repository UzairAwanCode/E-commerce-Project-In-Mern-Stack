import React from 'react'
import { useState } from 'react'
import Producttitle from '../../Components/Product-Details/Producttitle'
import Relatedproducts from '../../Components/Product-Details/Relatedproducts'
import Singleproductdetails from '../../Components/Product-Details/Singleproductdetails'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
  const {id} = useParams()
  const [prodctId , setProductId] = useState(id)
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  
  return (
    <div style={{marginTop:"40px"}}>
      <Singleproductdetails/>
      <Producttitle productId = {prodctId}/>
      {isLoggedIn=="true" ? <Relatedproducts productId={prodctId}/> : ""}
    </div>
  )
}

export default Productdetails

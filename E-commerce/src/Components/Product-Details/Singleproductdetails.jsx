import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Gallery1 from '../../assets/pics/dawlance/3.png'
import Gallery2 from '../../assets/pics/dawlance/3a.png'
import Gallery3 from '../../assets/pics/dawlance/3.png'
import Gallery4 from '../../assets/pics/dawlance/3a.png'
import {BsHeart} from 'react-icons/bs'
import { addProductToCart, getSingleProduct } from '../../Services/api'
import {BsTextIndentLeft} from 'react-icons/bs'


const initialValue = {
    productTitle: '',
    price: '',
    category: '',
    productDesc: '',
    productImage: '',
    firstProductSubImage:'',
    secondProductSubImage:'',
    thirdProductSubImage:'',
    userID: '',
    productID: ''
  }

const Singleproductdetails = (props) => {
    const [product, setProduct] = useState(initialValue)
    const { productTitle, price, category, productDesc, productImage, firstProductSubImage, secondProductSubImage, userID, productID } = product
    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);
    const {id} = useParams()
    initialValue.productTitle = productTitle
    initialValue.price = price
    initialValue.category = category
    initialValue.productDesc = productDesc
    initialValue.productImage = productImage
    initialValue.firstProductSubImage = firstProductSubImage
    initialValue.secondProductSubImage = secondProductSubImage
    initialValue.userID = userData._id
    initialValue.productID = id
    useEffect(()=>{
        loadSingleData()
        sessionFunction()
        console.log(product)
    },[])


    // Check Session Function
    const sessionFunction = () => {
        fetch("http://localhost:8080/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                if (data.data.userType == "Admin") {
                    setAdmin(true);
                }

                setUserData(data.data);

                if (data.data == "token expired") {
                    alert("Token expired login again");
                    window.localStorage.clear();
                    window.location.href = "/account";
                }
            });
    }


    const loadSingleData = async()=>{
        const response = await getSingleProduct(id)
        setProduct(response.data)
    }

    const addToCart = async()=>{
        const response = await addProductToCart(initialValue)
        alert("Added Successfully")
    }
  return (
    // Single product details
    <div className="small-container">
        <div className="row">
            <div className="col-2">
                <img src={productImage} width="100%" id="ProductImg"alt=""/>
                <div className="small-img-row">
                    <div className="small-img-col">
                        <img src={productImage} width="100%" className="small-img" onClick={window['imagegallery']}alt=""/>
                    </div>
                    <div className="small-img-col">
                        <img src={firstProductSubImage} width="100%" className="small-img" onClick={window['imagegallery']}alt=""/>
                    </div>
                    <div className="small-img-col">
                        <img src={secondProductSubImage} width="100%" className="small-img" onClick={window['imagegallery']}alt=""/>
                    </div>
                </div>


            </div>
            <div className="col-2">
                <p>Home / {category}</p>
                <h1>{productTitle}</h1>
                <div className='favourite'>
                     <h2>Rs {price}</h2>
                </div>
                
                
                <Link to="#" className="btn" onClick={addToCart}>Add To Cart</Link> <br />
                <Link to="#" className="btn-1" onClick={addToCart}>BUY IT NOW</Link>
                <h3>Product Details <BsTextIndentLeft/></h3>
                <br/>
                <p>{productDesc}</p>
            </div>
        </div>
    </div>
  )
}

export default Singleproductdetails

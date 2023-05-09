import React from 'react'
import './Microwave.css'
import Product1 from '../../assets/pics/pel/download4.jpg'
import Product2 from '../../assets/pics/pel/download5.jpg'
import Product3 from '../../assets/pics/pel/download6.jpg'
import { AiFillStar } from 'react-icons/ai'
import { FaaStarHalf, FaStarHalfAlt } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addProductToWishList, getMicrowaveProducts, getSingleProduct } from '../../Services/api'
import { useEffect } from 'react'

const initialValue = {
    productTitle: '',
    price: '',
    category: '',
    productDesc: '',
    productImage: '',
    firstProductSubImage: '',
    secondProductSubImage: '',
    userID: '',
    productID: ''
}


const Microwave = () => {
    const [allmicrowave, setMicrowave] = useState([])
    const [wishlist, setWishList] = useState(initialValue)
    const { productTitle, price, category, productDesc, productImage, firstProductSubImage, secondProductSubImage, userID } = wishlist
    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);
    const isLoggedIn = window.localStorage.getItem("loggedIn")
    initialValue.productTitle = productTitle
    initialValue.price = price
    initialValue.category = category
    initialValue.productDesc = productDesc
    initialValue.productImage = productImage
    initialValue.firstProductSubImage = firstProductSubImage
    initialValue.secondProductSubImage = secondProductSubImage
    initialValue.userID = userData._id

    useEffect(() => {
        getProduct()
        setWishList(initialValue)
        if (isLoggedIn == "true") {
            sessionFunction()
        }
    }, [])


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
                console.log("Usama Mango")
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



    // Add Product to Wishlist
    const addToWishList = async (id) => {
        initialValue.productID = id
        if (isLoggedIn == "true") {
            const wishlistdata = await getSingleProduct(id)
            setWishList(wishlistdata.data)
            if(initialValue.productTitle == ''){
                console.log("Not in database")
            }
            else{
            addDatatodatabase()
            }
        }
        else {
            alert("Login First")
        }

    }

    const addDatatodatabase = async () => {
        
        alert("Added Successfuly")
        console.log(initialValue)
        const response = await addProductToWishList(initialValue)
    }


    const getProduct = async () => {
        const response = await getMicrowaveProducts()
        setMicrowave(response.data)
    }

    return (

        <>
            <div className="microwave-banner">
                <div class="microwave-banner-main-image">
                    <div class="microwave-header-banner-container">
                        <h1><span> Microwave</span></h1>
                    </div>
                </div>
            </div>

            <div className="microwave-main-container">

                <div className="microwave-main-section" >

                    {allmicrowave.map((microwave) =>
                        
                            <div className="microwave-mainbox">
                                <Link to={`/productdetails/${microwave._id}`}><img className='productsize' src={microwave.productImage} alt="" /></Link>
                                <h4>{microwave.productTitle}</h4>
                                <div class="wishlist">
                                    <p>{microwave.price}</p>
                                    <Link className='add-wist-list' onClick={() => addToWishList(microwave._id)} to='#'>Add to Wishlist</Link>
                                </div>
                            </div>
                            
                    )}

                </div>
            </div>

        </>
    )
}

export default Microwave

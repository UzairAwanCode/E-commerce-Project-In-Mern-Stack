import React from 'react'
import '../Airconditioner/Airconditioners.css'
import Product1 from '../../assets/pics/dawlance/3.png'
import Product2 from '../../assets/pics/dawlance/2.png'
import Product3 from '../../assets/pics/dawlance/3.png'
import Product4 from '../../assets/pics/dawlance/2.png'
import Product5 from '../../assets/pics/dawlance/3.png'
import { AiFillStar } from 'react-icons/ai'
import { FaStarHalf, FaStarHalfAlt } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addProductToWishList, getAirConditionerProducts, getSingleProduct} from '../../Services/api'
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

const Airconditioners = () => {

    const [allairconditioners , setAllAirconditioners] = useState([])
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


    useEffect(()=>{
        getProducts()
        if (isLoggedIn == "true") {
            sessionFunction()
        }
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


    // Get All Products
    const getProducts = async()=>{
        const response = await getAirConditionerProducts()
        setAllAirconditioners(response.data)
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
        const response = await addProductToWishList(initialValue)
    }

    return (
        <>
            <div className="airconditioner-banner">
                <div class="airconditioner-banner-main-image">
                    <div class="airconditioner-header-banner-container">
                        <h1><span> Air Conditioners</span></h1>
                    </div>
                </div>
            </div>

            <div className="airconditioner-main-container">

                <div className="airconditioner-main-section" >

                    {allairconditioners.map((airconditioner)=>
                    
                    <div className="airconditioner-mainbox">
                        <Link to={`/productdetails/${airconditioner._id}`}><img className='productsize' src={airconditioner.productImage} alt="" /></Link>
                        <h4>{airconditioner.productTitle}</h4>
                        <div class="wishlist">
                            <p>{airconditioner.price}</p>
                            <Link className='add-wist-list' onClick={() => addToWishList(airconditioner._id)} to='#'>Add to Wishlist</Link>
                        </div>
                    </div>
                    
                    )}
                </div>
            </div>

        </>
    )
}
export default Airconditioners

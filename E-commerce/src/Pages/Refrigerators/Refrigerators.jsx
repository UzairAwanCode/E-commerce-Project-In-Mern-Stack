import React, { useEffect, useState } from 'react'
import '../Refrigerators/Rafrigrator.css'
import { Link } from 'react-router-dom'
import { addProductToWishList, getProductsFromWishlist, getRefrigratorProducts, getSingleProduct } from '../../Services/api'


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


const Refrigerators = () => {
    
    const [allfridge, setAllFridge] = useState([])
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

    // Get Products from Database
    const getProduct = async () => {
        let response = await getRefrigratorProducts()
        setAllFridge(response.data)
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
        
            alert("Added In Wishlist")
            console.log(initialValue)
            const response = await addProductToWishList(initialValue)
        
    }

    console.log(initialValue.wishlistcategory)

    return (
        <>
            <div className="refrigerators-banner">
                <div class="refrigerators-banner-main-image">
                    <div class="refrigerators-header-banner-container">
                        <h1><span>Rafrigartors</span></h1>
                    </div>
                </div>
            </div>
            <div className="refrigerators-main-container">

                <div className="refrigerators-main-section" >

                    {allfridge.map((fridge) =>

                        <div className="refrigerators-mainbox" key={fridge._id}>
                            <Link to={`/productdetails/${fridge._id}`}><img className='productsize' src={fridge.productImage} alt="" /></Link>
                            <h4>{fridge.productTitle}</h4>
                            <div className="wishlist">
                                <p>{fridge.price}</p>
                                <Link className='add-wist-list' to='#' onClick={() => addToWishList(fridge._id)}>Add to Wishlist</Link>
                            </div>
                        </div>


                    )}


                </div>
            </div>
        </>
    )
}

export default Refrigerators

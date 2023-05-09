import React from 'react'
import '../Machines/Machines.css'
import Product1 from '../../assets/pics/haier/download5.jpg'
import Product2 from '../../assets/pics/haier/download6.jpg'
import Product3 from '../../assets/pics/haier/download7.jpg'
import Product4 from '../../assets/pics/haier/download8.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addProductToWishList, getSingleProduct, getWashingMachineProducts } from '../../Services/api'
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



const Machines = () => {
    const [allmachines , setAllMachines] = useState([])
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


    // Get Products from Database
    const getProducts = async()=>{
        const response = await getWashingMachineProducts()
        setAllMachines(response.data)
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


    return (
        <>
            <div className="machines-banner">
                <div class="machines-banner-main-image">
                    <div class="machines-header-banner-container">
                        <h1><span> Washing Machines</span></h1>
                    </div>
                </div>
            </div>

            <div className="machines-main-container">

                <div className="machines-main-section" >

                {allmachines.map((machine)=>
                    
                    <div className="machines-mainbox">
                        <Link component={Link} to={`/productdetails/${machine._id}`}><img className='productsize' src={machine.productImage} alt="" /></Link>
                        <h4>{machine.productTitle}</h4>
                        <div class="wishlist">
                            <p>{machine.price}</p>
                            <Link className='add-wist-list' onClick={() => addToWishList(machine._id)} to='#'>Add to Wishlist</Link>
                        </div>
                    </div>
                    
                    )}
                </div>
            </div>

        </>
    )
}
export default Machines

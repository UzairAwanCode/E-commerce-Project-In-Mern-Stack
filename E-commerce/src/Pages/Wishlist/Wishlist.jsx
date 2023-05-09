import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Buy1 from '../../assets/pics/pel/download1.jpg'
import Buy2 from '../../assets/pics/dawlance/3.png'
import Buy3 from '../../assets/pics/haier/download1.jpg'
import { addProductToCart, deleteWishlistProduct, getProductsFromWishlist, getSingleProductFromWishList } from '../../Services/api'
import { getSingleProduct } from '../../Services/api'


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

const Wishlist = () => {
    const [wishlistdata, setWishlistData] = useState([])
    const [addttocart, setAddToCart] = useState(initialValue) // For Cart
    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);
    const { productTitle, price, category, productDesc, productImage, firstProductSubImage, secondProductSubImage, userID, productID } = addttocart
    initialValue.productTitle = productTitle
    initialValue.price = price
    initialValue.category = category
    initialValue.productDesc = productDesc
    initialValue.productImage = productImage
    initialValue.firstProductSubImage = firstProductSubImage
    initialValue.secondProductSubImage = secondProductSubImage
    initialValue.userID = userData._id
    initialValue.productID = productID
    useEffect(() => {
        sessionFunction()
        getWishlistData()
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

    // Get Wishlist Products
    const getWishlistData = async () => {
        let wishlistresponse = await getProductsFromWishlist()
        setWishlistData(wishlistresponse.data)
    }

    // Delete Wishlist Products
    const deleteProduct = async (id) => {
        await deleteWishlistProduct(id)
        getWishlistData()
    }


    //  Function to add items in Cart
    const addToCartItems = async (id) => {
        const cartdata = await getSingleProductFromWishList(id)
        setAddToCart(cartdata.data)
        if(initialValue.productTitle == ''){
            console.log("Not in database")
        }
        else{
        addCartDatatodatabase()
        }
    }

    const addCartDatatodatabase = async () => {
            alert("Added To Cart")
        await addProductToCart(initialValue)
    }

    return (
        // WishList item details
        <div className="small-container">
            <div className="conatiner">
                <h1 className='title'>WishList</h1>
                <table style={{ marginBottom: "60px" }}>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Buy Now</th>
                    </tr>

                    {wishlistdata.map((mywishlist) => (
                        mywishlist.userID == userData._id?
                        <tr key={mywishlist._id}>
                            <td>
                                <div className="card-info">
                                    <Link to="#"><img src={mywishlist.productImage} alt="" /></Link>
                                    <div>
                                        <p>{mywishlist.productTitle}</p>
                                        <small>Price:Rs {mywishlist.price}</small>
                                        <br />
                                        <Link to="#" onClick={() => deleteProduct(mywishlist._id, mywishlist.category)}>Remove</Link>
                                    </div>
                                </div>
                            </td>
                            <td><p>{mywishlist.category}</p></td>
                            <td><p><Link to='#' onClick={() => addToCartItems(mywishlist._id)}>Add to Cart</Link></p></td>
                        </tr>
                        : ''
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Wishlist

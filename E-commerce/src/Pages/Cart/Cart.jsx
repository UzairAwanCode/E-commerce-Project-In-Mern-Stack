import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Buy1 from '../../assets/pics/pel/download1.jpg'
import Buy2 from '../../assets/pics/dawlance/3.png'
import Buy3 from '../../assets/pics/haier/download1.jpg'
import { deleteCartList, getCartItems, paybill } from '../../Services/api'
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import axios from 'axios'

const Cart = () => {
    const MySwal = withReactContent(Swal)
    const publishableKey = 'pk_test_51N2rbIJK8Q2A03kThM3CukmnKXr8UvU3eSAHx800AWSJlrYaYQPxZMyEDEHBXByPHpHscR9FdEd593McB0vHRQbc007kzGnYMo';
    const [showCartItems, setShowCartItems] = useState([])
    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);
    const [productQuantity, setProductQuantity] = useState()

    let subtotal = 0
    let total = 0
    let tax = 0

    useEffect(() => {
        getCartData()
        sessionFunction()
    }, [])

    // Get values from fields
    const onValueChange = (e) => {
        setProductQuantity({ ...productQuantity, [e.target.name]: e.target.value })
        console.log(productQuantity)
    }

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

    // Calculate Total Price
    {
        showCartItems.map((p) =>
        p.userID==userData._id?
            total = total + p.price
            : ""
        )
    }

    // Get Cart List
    const getCartData = async () => {
        let cartresponse = await getCartItems()
        setShowCartItems(cartresponse.data)
    }

    // Delete Cart List
    const deleteProduct = async (id) => {
        await deleteCartList(id)
        getCartData()
    }


    // Payment Gateway
    const payNow = async token => {
        try {
            const response = await axios({
                url: 'http://localhost:8080/payment',
                method: 'post',
                data: {
                    amount: subtotal,
                    token,
                    name: userData.Name,
                    email: userData.Email
                },
            });
            if (response.status === 200) {
                handleSuccess();
            }
        } catch (error) {
            handleFailure();
            console.log(error);
        }
    }

    const handleSuccess = () => {
        MySwal.fire({
            icon: 'success',
            title: 'Payment was successful',
            time: 1000,
        });
    };

    const handleFailure = () => {
        MySwal.fire({
            icon: 'error',
            title: 'Payment was not successful',
            time: 1000,
        });
    };


    return (
        // Cart item details
        <div className="small-container" style={{ marginBottom: "80px" }}>
            <h1 className='title'>Checkout</h1>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Subtotal</th>
                </tr>

                {showCartItems.map((cartitem) =>
                cartitem.userID == userData._id?
                    <tr key={cartitem._id}>
                        <td>
                            <div className="card-info">
                                <img src={cartitem.productImage} alt="" />
                                <div>
                                    <p>{cartitem.productTitle}</p>
                                    <small>Price:Rs {cartitem.price}</small>
                                    <br />
                                    <Link to="#" onClick={() => deleteProduct(cartitem._id)}>Remove</Link>
                                </div>
                            </div>
                        </td>
                        <td>{cartitem.category}</td>
                        <td>Rs {cartitem.price}</td>
                    </tr>
                    : ''
                )}

            </table>

            <div className="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>Rs {subtotal = tax + total}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>Rs {tax}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>Rs {total}</td>
                    </tr>
                </table>
            </div>

            <div className="cart-container total-price">
                <StripeCheckout style={{ width: "39%", marginTop: "20px", borderRadius: "0px", border: "none" }}
                    stripeKey={publishableKey}
                    label="Pay Now"
                    name="Pay With Master Card"
                    billingAddress
                    shippingAddress
                    amount='{subtotal}'
                    token={payNow}
                    currency='PKR'
                />
            </div>
        </div>
    )
}

export default Cart

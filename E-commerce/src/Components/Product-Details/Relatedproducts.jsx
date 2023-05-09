import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { FaStarHalf, FaStarHalfAlt, FaStar } from 'react-icons/fa'
import { addProductReviews } from '../../Services/api'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

}

const reviewProductData = {
    Name: '',
    Feedback: '',
    Stars: 0,
    ProductId: '',
    userID: '',
    productID: ''
}
const Relatedproducts = (props) => {
    const [review , setReview] = useState(reviewProductData)
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const isLoggedIn = window.localStorage.getItem("loggedIn")
    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);
    const stars = Array(5).fill(0)
    reviewProductData.Name = userData.Name

    useEffect(()=>{
        if(isLoggedIn == "true"){
            sessionFunction()
        }
    } , [])

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

    const handleClick = value => {
        setCurrentValue(hoverValue)
        reviewProductData.Stars = hoverValue
        reviewProductData.productID = props.productId
        reviewProductData.userID = userData._id
        console.log("Final Star Value on Click " + reviewProductData.Stars)
        console.log("Name  " + reviewProductData.Name)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
        // console.log("Star Values on Mouse Over " + hoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
        console.log("Star Values on Leave " + hoverValue)
    }

    const onValueChange = (e)=>{
        setReview({...review , [e.target.name]: e.target.value})
        console.log(review)
    }

    const sendReviews = async()=>{
        const response = await addProductReviews(review , props.productId)
        alert("Review Added Successfully")
    }
    return (
        // Related products
        <div className="small-container" style={{ marginBottom: "50px" }}>
            <div style={styles.container}>
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={24}
                                onClick={() => handleClick(currentValue)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                            />
                        )
                    })}
                </div>

                {isLoggedIn == "true" ? <textarea placeholder="What's your experience?" style={styles.textarea} onChange={(e)=> onValueChange(e)} name="Feedback" /> : null}
                {isLoggedIn == "true" ? <button type='button' style={styles.button} onClick={()=>sendReviews()}> Submit </button> : null}
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    input: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        marginTop: "20px",
        marginBottom: "10px",
        minHeight: 20,
        width: 400
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 200,
        width: 600
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
    }

};

export default Relatedproducts

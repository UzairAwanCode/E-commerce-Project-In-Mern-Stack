import React, { useEffect, useState } from 'react'
import './Account.css'
import { Link, useNavigate } from 'react-router-dom'
import Image1 from '../../assets/images/us.webp'
import { registerUser, userData } from '../../Services/api'
import Account from './Account'
import Home from '../Home/Home'


const LoginAlready = () => {
    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
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

    }, []);

    const Logout = ()=>{
        window.localStorage.clear()
        window.location.href = '/account'
    }
    return (
        <div className="account-page">
            <div className="container">
                <div className="row">
                    <div className="col-2 bannerimage">
                        <img src={Image1} width="120%" alt="" />
                    </div>
                    <div className="col-2 accountform">
                        <div className="form-container">
                            <div className="form-btn">
                                <h3>Login Status</h3>
                                admin ? <Account /> : <Home userData={userData} />;
                            </div>
                            <form>
                                <h4>Already Login</h4>
                                <p>{userData.Name}</p>
                                <button type="button" onClick={Logout} style={{ width: "50%", backgroundColor: "red" }}>Logout</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginAlready

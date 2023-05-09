import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


const detail = {
    Email: "admin@gmail.com",
    Password: "admin"
}
const Login = () => {
    const [adminEmail, setAdminEmail] = useState("")
    const [adminPassword , setAdminPassword] = useState("")
    const [token , setToken] = useState(detail)
    const Email = "admin@gmail.com"
    const Password = "admin"

    // Get Values from fields For Login

    // Send data to api For SignUp
    const loginUser = () => {
        console.log(adminEmail)
        console.log(adminPassword)
        if (adminEmail != Email || adminPassword != Password) {
            alert("Invalid Email/Password")
        }


        if (adminEmail == Email || adminPassword == Password) {
            alert("Login Successfull")
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("loggedIn", true);
            window.location.href = "/";
        }
    }
    return (
        
        <div>
            <h1>Admin Login</h1>
            <div className="MainAdminContainer">
            <div className="AdminBox">
                <div className="AdminContainer">
                    
                    <div className="AdminInput-field">
                        <input type="email" className="AdminInput" placeholder="Email"  onChange={(e) => setAdminEmail(e.target.value)} name='Email'/>
                        <i className='AdminBx AdminBx-user' ></i>
                    </div>
                    <div className="AdminInput-field">
                        <input type="Password" className="AdminInput" placeholder="Password"  onChange={(e) => setAdminPassword(e.target.value)} name='Password'/>
                        <i className='AdminBx AdminBx-lock-alt'></i>
                    </div>
                    <div className="AdminInput-field">
                        <input type="button" className="AdminSubmit" value="Login" onClick={() => loginUser()} id="" />
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

    )
}

export default Login

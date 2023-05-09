import React, { useState } from 'react'
import './Account.css'
import { Link, useNavigate } from 'react-router-dom'
import Image1 from '../../assets/images/us.webp'
import { registerUser } from '../../Services/api'

const registraionData = {
    Name: '',
    Email: '',
    Password: ''
}

const userLogin = {
    Email: '',
    Password: '',
    Name: '',
}

const Account = () => {
    const [userInfo , setUserInfo] = useState(registraionData)
    const [loginInfo , setLoginInfo] = useState(userLogin)
    let navigate = useNavigate()

    // Get Values from fields For SignUp
    const onValueChange = (e)=>{
        setUserInfo({...userInfo , [e.target.name]: e.target.value})
    }

    
    // Send data to api For SignUp
    const addUserInfomation = async()=>{
        console.log(userInfo)
        const response = await registerUser(userInfo)
        alert("Check Your Email")
    }


    // Get Values from fields For Login
    const onValueLoginChange = (e)=>{
        setLoginInfo({...loginInfo , [e.target.name]: e.target.value})
    }

    // Send data to api For SignUp
    const loginUser = async()=>{
        // console.log(loginInfo)
        const response = await registerUser(loginInfo)
        const data = response.data
        console.log(response)
        console.log(data)
        if(response.data.error == "Invalid Email/Password")
        {
            alert("Invalid Email/Password")
        }

        if(response.data.error == "User Not Exist"){
            alert("User Not Exist")
        }

        if(response.data.status == "Ok"){
            alert("Login Successfull")
            window.localStorage.setItem("token", response.data.data);
            window.localStorage.setItem("loggedIn", true);
            window.location.href = "/";
        }
    }


  return (
    // Account page
    <div className="account-page">
        <div className="container">
            <div className="row">
                <div className="col-2 bannerimage">
                    <img src={Image1} width="120%"alt=""/>
                </div>
                <div className="col-2 accountform">
                    <div className="form-container">
                        <div className="form-btn">
                            <span onClick={window['login']}>Login</span>
                            <span onClick={window['register']}>Register</span>
                            <hr id="Indicator"/>
                        </div>
                        <form id="LoginForm">
                            <input type="email" placeholder="Email" className='input-text' onChange={(e)=>onValueLoginChange(e)} name='Email'/>
                            <input type="password" placeholder="Password" className='input-text' onChange={(e)=>onValueLoginChange(e)} name='Password'/>
                            <button type="button" className="btn" onClick={()=>loginUser()}>Login</button>
                            <Link to="/forgot-password">Forget Password?</Link>
                        </form>
                        <form id="RegForm">
                            <input type="text" className='input-text' placeholder="Name"  onChange={(e)=>onValueChange(e)} name='Name'/>
                            <input type="email"  className='input-text' placeholder="Email" onChange={(e)=>onValueChange(e)} name='Email'/>
                            <input type="password"  className='input-text' placeholder="Password" onChange={(e)=>onValueChange(e)} name='Password'/>
                            <button type="button" className="btn" onClick={()=>addUserInfomation()}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account

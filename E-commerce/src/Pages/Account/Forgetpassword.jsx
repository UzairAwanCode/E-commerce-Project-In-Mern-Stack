
import React, { useState } from 'react'
import './Account.css'
import { Link, useNavigate } from 'react-router-dom'
import Image1 from '../../assets/images/us.webp'
import { sendUserEmail } from '../../Services/api'

const userEmail = {
    Email: '',
}

const Forgetpassword = () => {

    const [userInfo , setUserInfo] = useState(userEmail)
    // Get Values from fields For Getting User Email
    const onValueChange = (e)=>{
        setUserInfo({...userInfo , [e.target.name]: e.target.value})
    }

    
    // Send data to api For SignUp
    const getUserInfo = async()=>{
        const response = await sendUserEmail(userInfo)
        // console.log(response.data.status)
        alert("Check Your Email")
    }

  return (
    <div className="account-page">
        <div className="container">
            <div className="row">
                <div className="col-2 bannerimage">
                    <img src={Image1} width="120%"alt=""/>
                </div>
                <div className="col-2 accountform">
                    <div className="form-container">
                        <div className="form-btn">
                            <span onClick={window['register']}>Forget Password</span>
                            <hr id="Indicator"/>
                        </div>

                        <form id="RegForm">
                            <input type="email"  className='input-text' placeholder="Email" onChange= {(e)=>onValueChange(e)} name='Email'/>
                            <button type="button" className="btn" onClick={getUserInfo}>Send Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgetpassword

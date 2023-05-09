import React, { useState } from 'react'
import {FaBars, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt} from 'react-icons/fa'
import {FiLogIn , FiLogOut} from 'react-icons/fi'
import {HiOutlineInformationCircle} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'


const Sidebar = ({children}) => {
    const[isOpen , setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path: "/",
            name: "dahboard",
            icon: <FaTh/>
        },
        {
            path: "/product",
            name: "Add Product",
            icon: <FaShoppingBag/>
        },
        {
            path: "/productlist",
            name: "Product List",
            icon: <FaThList/>
        },
        {
            path: "/userinformation",
            name: "User Information",
            icon: <HiOutlineInformationCircle/>
        },
        {
            path: "/analytics",
            name: "Pending Approvals",
            icon: <FaRegChartBar/>
        },

        {
            path: "/adminlogin",
            name: "Admin Login",
            icon: <FiLogIn/>
        },

        {
            path: "/adminlogout",
            name: "Logout",
            icon: <FiLogOut/>
        },
        
    ]
  return (
    <div className='Container'>
      <div  style={{width: isOpen? "300px" : "50px"}}  className="sidebar">
        <div className="top_section">
            <h1  style={{display: isOpen? "block" : "none"}} className="logo">Admin Panel</h1>
            <div style={{marginLeft: isOpen? "50px" : "0px"}} className="bars">
                 {/*  Toogle bar */}
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item , index)=>(
                <NavLink to={item.path} key={index} className="Link" activeclassName="active" style={{textDecoration: "none"}}>
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar

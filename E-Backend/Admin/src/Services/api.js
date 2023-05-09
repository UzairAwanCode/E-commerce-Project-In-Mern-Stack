import React from 'react'
import axios from 'axios'
const usersURL = "http://localhost:8080"


// Add Product
export const addProduct = async(data, image)=>{
  try{
    return await axios.post(`${usersURL}/product`, data)
  }
  catch(error){
    console.log('Error While callig api', error)
  }
}


// Get All Prodcuts from database
export const getAllProducts = async()=>{
  try{
    return await axios.get(`${usersURL}/productlist`)
  }
  catch(error){
    console.log('Error While Getting Product from Database' , error)
  }
}


// Get/Retrieve Single product from database with the help of product id
export const getSingleProduct = async(id)=>{
  try{
    id = id || ''
    return await axios.get(`${usersURL}/${id}`)
  }
  catch(error){
    console.log('Error While Retreving Product Details')
  }
}


// Edit Product
export const editProduct = async(id , singleproduct)=>{
  try{
    console.log(singleproduct)
    return await axios.put(`${usersURL}/${id}`, singleproduct)
  }
  catch(error){
    console.log('Error While Changing Product Details')
  }
}


// Delete Product
export const deleteProduct = async(id)=>{
  return await axios.delete(`${usersURL}/${id}`)
}


export const getAllProductsFromWishlist = async()=>{
  try{
      return await axios.get(`${usersURL}/comment`)
  }
  catch{
      console.log('Error while retreving data from wishlist database')
  }
}

// Get Approval
export const getApprovalValues = async()=>{
  try{
    return await axios.get(`${usersURL}/analytics`)
  }
  catch(error){
    console.log("Error While getting Approval Values")
  }
}

// Send Email For Approval
export const sendEmail = async(data)=>{
  try{
    return await axios.post(`${usersURL}/analytics`, data)
  }
  catch(error){
    console.log('Error While callig Email Verification Function', error)
  }
}

// Getting userInformation from database
export const getUserInformationData = async()=>{
  try{
    return await axios.get(`${usersURL}/userinformation`)
  }
  catch(error){
    console.log("Error While getting User Information")
  }
}
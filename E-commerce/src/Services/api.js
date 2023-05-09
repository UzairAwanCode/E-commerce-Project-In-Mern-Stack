import axios from 'axios'
const usersURL = "http://localhost:8080"


// Get All products
export const getAllProducts = async()=>{
    try{
        return await axios.get(`${usersURL}/search`)
    }
    catch(error){
        console.log('Error While Getting Product from Database' , error)
    }
}

// Get Refrigartors products
export const getRefrigratorProducts = async()=>{
    try{
        return await axios.get(`${usersURL}/refrigerators`)
    }
    catch(error){
        console.log('Error While Getting Product from Database' , error)
    }
}

// Get Washingmachine products
export const getWashingMachineProducts = async()=>{
    try{
        return await axios.get(`${usersURL}/machines`)
    }
    catch(error){
        console.log('Error While Getting Product from Database' , error)
    }
}

// Get Air Conditioner products
export const getAirConditionerProducts = async()=>{
    try{
        return await axios.get(`${usersURL}/ac`)
    }
    catch(error){
        console.log('Error While Getting Product from Database' , error)
    }
}

// Get Microwave products
export const getMicrowaveProducts = async()=>{
    try{
        return await axios.get(`${usersURL}/microwave`)
    }
    catch(error){
        console.log('Error While Getting Product from Database' , error)
    }
}


//////////////////////////////// WishList Functions ////////////////////////////

// Get/Retrieve Single product from database using product id
export const getSingleProduct = async(id)=>{
    try{
        id = id || ''
        return await axios.get(`${usersURL}/${id}`)
    }
    catch(error){
        console.log('Error While Retreving Product Details',error)
    }
}


// Add product to wishlost
export const addProductToWishList = async(wishlistdata)=>{
    try{
        return await axios.post(`${usersURL}/refrigerators` , wishlistdata)
    }
    catch(error){
        console.log('Error While Adding Product To Wishlist' , error)
    }
}

//  Get Product from wishlist database
export const getProductsFromWishlist = async()=>{
    try{
        return await axios.get(`${usersURL}/user/wishlist`)
    }
    catch(error)
    {
        console.log('Error while retreving data from wishlist database')
    }
}

// Delete Wishlist Products
export const deleteWishlistProduct = async(id)=>{
    return await axios.delete(`${usersURL}/user/${id}`)
  }



//////////////////////////////// Cart Functions ////////////////////////////

export const getSingleProductFromWishList = async(id)=>{
    try{
        id = id || ''
        return await axios.get(`${usersURL}/user/${id}`)
    }
    catch(error){
        console.log('Error While Retreving Product Details',error)
    }
}


export const addProductToCart = async(wishlistdata)=>{
    try{
        return await axios.post(`${usersURL}/user/wishlist` , wishlistdata)
    }
    catch(error){
        console.log('Error While Adding Product To Cart' , error)
    }
}


export const getCartItems = async()=>{
    
    try{
        return await axios.get(`${usersURL}/buy/cart`)
    }
    catch(error)
    {
        console.log('Error while retreving data from Cart database')
    }
}

export const deleteCartList = async(id)=>{
    return await axios.delete(`${usersURL}/buy/${id}`)
  }

export const paybill = async(data)=>{
    try {
        return await axios.post(`${usersURL}/buy/cart` , data)
      } catch (error) {
        console.log(error);
      } 
}

//////////////////////////////// Login/Signup Functions ////////////////////////////
export const registerUser = async(data)=>{
    try{
        return await axios.post(`${usersURL}/account`, data)
    }
    catch(error){
        console.log('Error While Adding User',error)
    }
}

export const userData = async(data)=>{
    try{
        return await axios.post(`${usersURL}/login`, data)
    }
    catch(error){
        console.log('Error While Retrieving Token',error)
    }
}

export const sendUserEmail = async(data)=>{
    console.log(data)
    try{
        return await axios.post(`${usersURL}/forgot-password`, data)
    }
    catch(error){
        console.log('Error While Send Email',error)
    }
}

//////////////////////////////// Product Reviews Functions ////////////////////////////
export const addProductReviews = async(data,id)=>{
    try{
        id = id || ''
        return await axios.post(`${usersURL}/${id}` , data)
    }
    catch(error){
        console.log('Error While Adding Product Review',error)
    }
}

export const getUserReviews = async(id)=>{
    try{
        id = id || ''
        return await axios.get(`${usersURL}/product/reviews/${id}`)
    }
    catch(error){
        console.log('Error While Retreving Product Reviews',error)
    }
}


////////////////////////////// Pending Approval ////////////////////////////
export const sendUserPaymentDetailes = async()=>{
    try{
        return await axios.get(`${usersURL}/refrigerators`)
    }
    catch(error){
        console.log('Error While Getting Product from Database' , error)
    }
}
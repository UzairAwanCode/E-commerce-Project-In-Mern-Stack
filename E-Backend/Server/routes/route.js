import express from 'express'
import { addProduct, addProductToCart, addProductToWishList, deleteCartListItem, deleteProduct, deleteWishlistProduct, editProduct, forgetPassword, getAirConditionerProducts, getAllProducts, getAllProductsFromWishlist, getApprovalValues, getCartItems, getMicrowaveProducts, getProductById, getRefrigratorProducts, getSearchProducts, getSingleProductFromWishList, getUserInformationData, getUserReviewsData, getWashingMachineProducts, paybill, registerUser, resetPassword, resetPasswordPost, reviews, sendMail, userData } from '../controller/user-controller.js'

const router = express.Router()


// Admin Functions
router.get('/search' , getSearchProducts)
router.post('/product', addProduct)
router.get('/productlist' , getAllProducts)
router.get('/comment' , getAllProductsFromWishlist)
router.get('/refrigerators' , getRefrigratorProducts)
router.get('/machines', getWashingMachineProducts)
router.get('/ac' , getAirConditionerProducts)
router.get('/microwave' , getMicrowaveProducts)
router.get('/analytics' , getApprovalValues)
router.post('/analytics' , sendMail)
router.get('/userinformation' , getUserInformationData)
router.get('/:id', getProductById) //This function also used in Product Page Functions
router.put('/:id' , editProduct)
router.delete('/:id' , deleteProduct)


// Wislist Page Functions
router.post('/refrigerators', addProductToWishList)
router.get('/user/wishlist' , getAllProductsFromWishlist)
router.delete('/user/:id' , deleteWishlistProduct)

// Cart Page Functions
router.get('/buy/cart' , getCartItems)
router.post('/user/wishlist' , addProductToCart)
router.get('/user/:id' , getSingleProductFromWishList)
router.delete('/buy/:id' , deleteCartListItem)
router.post('/payment' , paybill)

// SingUp/Login Functions
router.post('/account' , registerUser)
router.post('/login' , userData)
router.post('/forgot-password' , forgetPassword)
router.get('/reset-password/:id/:token' , resetPassword)
router.post('/reset-password/:id/:token' , resetPasswordPost)

// Product Review Function
router.post('/:id' , reviews)
router.get('/product/reviews/:id' , getUserReviewsData)

// Get User Data


export default router
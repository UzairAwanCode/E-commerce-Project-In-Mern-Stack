import express from 'express'
import { addProduct, addProductToCart, addProductToWishList, deleteCartListItem, deleteProduct, deleteWishlistProduct, editProduct, getAirConditionerProducts, getAllProducts, getAllProductsFromWishlist, getCartItems, getMicrowaveProducts, getProductById, getRefrigratorProducts, getSingleProductFromWishList, getWashingMachineProducts } from '../controller/user-controller.js'
// import mainrouter from './mainroute.js'

const app = express()
const MachineRoutes = express.Router()


MachineRoutes.get('/', getWashingMachineProducts)


export default MachineRoutes
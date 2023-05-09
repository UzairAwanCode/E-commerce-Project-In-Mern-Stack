import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    productTitle: String,
    price: Number,
    category: String,
    productDesc: String,
    productImage: String,
    firstProductSubImage: String,
    secondProductSubImage: String,
    userID: String
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'product');

const wishlist = mongoose.Schema({
    productTitle: String,
    price: Number,
    category: String,
    productDesc: String,
    productImage: String,
    firstProductSubImage: String,
    secondProductSubImage: String,
    userID: String,
    productID: String
})

const cartItems = mongoose.Schema({
    productTitle: String,
    price: Number,
    category: String,
    productDesc: String,
    productImage: String,
    firstProductSubImage: String,
    secondProductSubImage: String,
    userID: String,
    productID: String

})

const UserReviews = mongoose.Schema(
    {
        Name: String,
        Feedback: String,
        Stars: Number,
        productID: String,
        userID: String
    }
)

const pending = mongoose.Schema(
    {
        name: String,
        amount: Number,
        email: String
    }
)

export const postProduct = mongoose.model('Product', userSchema)
export const postWishlist = mongoose.model('Whishlist', wishlist)
export const postCartItems = mongoose.model('CartItems', cartItems)
export const postProductReviews = mongoose.model('ProductReview', UserReviews)
export const pendongApproval = mongoose.model('Pending', pending)
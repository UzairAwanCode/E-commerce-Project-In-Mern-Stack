import { request, response } from 'express'
import { postProduct, postWishlist, postCartItems, postProductReviews, pendongApproval } from '../schema/user-schema.js'
import dotenv from 'dotenv'
import stripe from 'stripe'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import createUserAccount from '../schema/wishlistschema.js'
import nodemailer from 'nodemailer'

dotenv.config()

const Stripe = (stripe)(process.env.SECERET_KEY)
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


// Add Product in database
export const addProduct = async (request, response) => {
    const products = request.body
    const newProduct = new postProduct(products)

    try {
        await newProduct.save()
        response.status(201).json(newProduct);
    }
    catch (error) {
        response.status(409).json({ messaage: error.messaage })
    }
}

// Get All products from database
export const getAllProducts = async (request, response) => {
    try {
        const products = await postProduct.find({})
        response.status(201).json(products)
    }
    catch (error) {
        response.status(404).json({ messaage: error.messaage })
    }
}

// Get product by using id for editing product
export const getProductById = async (request, response) => {
    try {
        const singleproduct = await postProduct.findById(request.params.id)
        response.status(200).json(singleproduct)
    }
    catch (error) {
        response.status(408).json({ messaage: error.messaage })
    }
}

// Edit products from admin panel
export const editProduct = async (request, response) => {
    let product = request.body
    const editProduct = new postProduct(product)
    try {
        await postProduct.updateOne({ _id: request.params.id }, editProduct)
        await postWishlist.updateOne({ productID: request.params.id },{$set: {price: product.price , productImage : product.productImage , firstProductSubImage: product.firstProductSubImage , secondProductSubImage: product.secondProductSubImage}}, editProduct)
        await postCartItems.updateOne({ productID: request.params.id },{$set: {price: product.price, productImage : product.productImage , firstProductSubImage: product.firstProductSubImage , secondProductSubImage: product.secondProductSubImage}}, editProduct)
        response.status(201).json(editProduct)
    }
    catch (error) {
        response.json({ error: "Error" })
    }
}

// Delete products
export const deleteProduct = async (request, response) => {
    const alldata = request.params.id
    try {

        await pendongApproval.deleteOne({_id : request.params.id})
        await postProduct.deleteOne({ _id: request.params.id })
        await postWishlist.deleteOne({ productID: request.params.id })
        await postCartItems.deleteOne({ productID: request.params.id })
        await postProductReviews.deleteOne({ productID: request.params.id })
        await createUserAccount.deleteOne({_id : request.params.id})
        await postWishlist.deleteOne({ userID: request.params.id })
        await postCartItems.deleteOne({ userID: request.params.id })
        response.status(201).json('Product Deleted Successfully')
    }
    catch (error) {
        response.status(409).json({ messaage: error.messaage })
    }
}

// Delete Wishlist Product
export const deleteWishlistProduct = async (request, response) => {
    try {
        await postWishlist.deleteOne({ _id: request.params.id })
        response.status(201).json('Product Deleted Successfully')
    }
    catch (error) {
        response.status(409).json({ messaage: error.messaage })
    }
}

// Get Rerigrator Products
export const getRefrigratorProducts = async (request, response) => {
    try {
        const products = await postProduct.find({ "category": "Refrigerators and Freezers" })
        response.status(201).json(products)
    }
    catch (error) {
        response.status(404).json({ messaage: error.messaage })
    }
}


// Get Washing Machine Products
export const getWashingMachineProducts = async (request, response) => {
    try {
        const products = await postProduct.find({ "category": "Washing Machines" })
        response.status(201).json(products)
    }
    catch (error) {
        response.status(404).json({ messaage: error.messaage })
    }
}

// Get Air Conditioner Products
export const getAirConditionerProducts = async (request, response) => {
    try {
        const products = await postProduct.find({ "category": "Air Conditioners" })
        response.status(201).json(products)
    }
    catch (error) {
        response.status(404).json({ messaage: error.messaage })
    }
}

// Get Air Conditioner Products
export const getMicrowaveProducts = async (request, response) => {
    try {
        const products = await postProduct.find({ "category": "Microwave Oven" })
        response.status(201).json(products)
    }
    catch (error) {
        response.status(404).json({ messaage: error.messaage })
    }
}

// Add product to Wishlist
export const addProductToWishList = async (request, response) => {
    const wishlist = request.body
    const wishlistproduct = new postWishlist(wishlist)
    try {
        // console.log(wishlist)
        await wishlistproduct.save()
        response.send({ status: "Add Successfully To Wishlist" })
    }
    catch (error) {
        response.send({ status: "Error" })
    }
}

// Get All products from wishlist database
export const getAllProductsFromWishlist = async (request, response) => {
    try {
        const wishlistproducts = await postWishlist.find({})
        response.status(201).json(wishlistproducts)
    }
    catch (error) {
        response.status(404).json({ messaage: error.messaage })
    }
}

///////////////////////////// Cart Page Functions///////////////////////////////

export const getSingleProductFromWishList = async (request, response) => {
    try {
        const singleproductfromwishlist = await postWishlist.findById(request.params.id)
        response.status(200).json(singleproductfromwishlist)
    }
    catch (error) {
        response.status(408).json({ messaage: error.messaage })
    }
}

export const addProductToCart = async (request, response) => {
    const cartItem = request.body
    const addToCart = new postCartItems(cartItem)
    try {
        await addToCart.save()
        response.send({ status: "Add Successfully" })
    }
    catch (error) {
        response.send({ status: "Error" })
    }
}

export const getCartItems = async (request, response) => {
    try {
        const cartItems = await postCartItems.find({})
        response.status(201).json(cartItems)
    }
    catch (error) {
        response.status(404).json({ messaage: error.messaage })
    }
}

export const deleteCartListItem = async (request, response) => {
    try {
        await postCartItems.deleteOne({ _id: request.params.id })
        response.status(201).json('Product Deleted Successfully')
    }
    catch (error) {
        response.status(409).json({ messaage: error.messaage })
    }
}

export const paybill = async (request, response) => {
    let status, error
    const { token, amount, name, email } = request.body

    try {
        // Save Data in Database
        await pendongApproval.create({
            name,
            amount,
            email
        })
        await Stripe.charges.create({
            source: token.id,
            amount,
            currency: 'usd',
        })
        status = "Data Enter Successfully"
        // response.json({ status: "Ok" });
    }
    catch (error) {
        status = 'Fail'
    }
    response.json({ error, status })

}

///////////////////////////// SignUp/Login Functions///////////////////////////////

export const registerUser = async (request, response) => {
    const { Name, Email, Password } = request.body
    const encryptedPassword = await bcrypt.hash(Password, 10)
    if (Name != '') {
        try {
            // Check User Already Exist
            const oldUser = await createUserAccount.findOne({ Email })

            if (oldUser) {
                return response.json({ error: "User Already Exist" })
            }

            // Save Data in Database
            await createUserAccount.create({
                Name,
                Email,
                Password: encryptedPassword,
            })

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'ecommercefyp02@gmail.com',
                    pass: 'zzeehmmhlsyhrwwh'
                }
            });
        
            var mailOptions = {
                from: 'ecommercefyp02@gmail.com',
                to: Email,
                subject: 'Registration Verification',
                text: 'Your Account Created Successfully'
            };
        
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            response.send({ status: "Ok" });
        }
        catch (error) {
            response.send({ status: "error" })
        }
    }
    else {
        const user = await createUserAccount.findOne({ Email })
        if (!user) {
            return response.json({ error: "User Not Exist" })
        }

        if (await bcrypt.compare(Password, user.Password)) {
            const token = jwt.sign({ Email: user.Email }, JWT_SECRET, { expiresIn: "120m" })
            if (response.status(201)) {
                return response.json({ status: "Ok", data: token })
            }
            else {
                return response.json({ error: "Error" })
            }
        }
        response.json({ error: "Invalid Email/Password" })
    }
}

export const userData = async (request, response) => {
    const { token } = request.body
    try {
        const user = jwt.verify(token, JWT_SECRET, (err, res) => {
            if (err) {
                return "token expired";
            }
            return res;
        })

        if (user == "token expired") {
            return response.send({ status: "error", data: "token expired" });
        }

        const useremail = user.Email
        createUserAccount.findOne({ Email: useremail })
            .then((data) => {
                response.send({ status: "Ok", data: data })
            })
            .catch((error) => {
                response.send({ status: "error", data: error })
            })
    }
    catch (error) {

    }
}

export const forgetPassword = async (request, res) => {
    const { Email } = request.body
    try {
        const oldUser = await createUserAccount.findOne({ Email })
        if (!oldUser) {
            return res.json({ status: "User Not Found" })
        }

        const secert = JWT_SECRET + oldUser.Password
        const token = jwt.sign({ Email: oldUser.Email, id: oldUser._id }, secert, { expiresIn: "5m" })
        const link = `http://localhost:8080/reset-password/${oldUser._id}/${token}`

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ecommercefyp02@gmail.com',
                pass: 'zzeehmmhlsyhrwwh'
            }
        });

        var mailOptions = {
            from: 'ecommercefyp02@gmail.com',
            to: Email,
            subject: 'Password Reset',
            text: link
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        return res.json({ status: link })
    }
    catch (error) { }

}

export const resetPassword = async (request, response) => {
    const { id, token } = request.params
    const oldUser = await createUserAccount.findOne({ _id: id })
    if (!oldUser) {
        return response.json({ status: "User Not Found" })
    }

    const secert = JWT_SECRET + oldUser.Password
    try {
        const verify = jwt.verify(token, secert)
        response.render("index", { email: verify.Email, status: "Not Verified" })
        // response.send("Verified")
    }
    catch (error) {
        // response.send("Not Verified")
    }
}

export const resetPasswordPost = async (request, response) => {
    const { id, token } = request.params
    const { password , confirm } = request.body
   if(password == confirm){
    const oldUser = await createUserAccount.findOne({ _id: id })
    if (!oldUser) {
        return response.json({ status: "User Not Found" })
    }
    
    const secert = JWT_SECRET + oldUser.Password
    try {
        const verify = jwt.verify(token, secert)
        const encryptedPassword = await bcrypt.hash(password, 10)
        await createUserAccount.updateOne({ _id: id }, { $set: { Password: encryptedPassword } })
        // response.json({status:"Password Updated"})
        response.render("index", { email: verify.Email, status: "Verified" })
    }
    catch (error) {
        response.json({ status: "Something Went Wrong" })
    }
   }
   else{
    response.render("index", { email: verify.Email, status: "Not Maching" })
   }
}


///////////////////////////// Product Reviews Functions///////////////////////////////
export const reviews = async (request, response) => {
    const reviewData = request.body
    const pr = new postProductReviews(reviewData)

    try {
        await pr.save()
        response.send({ status: "Product reviews saved successfully" })
    }
    catch (error) {
        response.send({ status: "Product Review Not Saved" })
    }
}

export const getUserReviewsData = async (request, response) => {
    const pid = request.params.id
    try {
        const products = await postProductReviews.find({ "productID": pid })
        response.status(201).json(products)
    }
    catch (error) {
        response.send({ messaage: error.messaage })
    }
}


//////////////////////////////// Search Products ////////////////////////////
export const getSearchProducts = async (request, response) => {
    try {
        const products = await postProduct.find({})
        response.status(201).json(products)

    }
    catch (error) {
        response.status(404).json({ messaage: error.messaage })
    }
}


//////////////////////////////// Apprval Values ////////////////////////////
export const getApprovalValues = async(request , response)=>{
    try{
        const data = await pendongApproval.find({})
        response.status(201).json(data)
    }
    catch(error){
        response.status(404).json({ messaage: error.messaage })
    }
}


export const sendMail = async(request , response)=>{
    const { email } = request.body
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ecommercefyp02@gmail.com',
            pass: 'zzeehmmhlsyhrwwh'
        }
    });

    var mailOptions = {
        from: 'ecommercefyp02@gmail.com',
        to: email,
        subject: 'Payment Verification',
        text: 'Thankyou For Shopping from our Website'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    return response.json({ status: "Successfull" })
}


//////////////////////////////// Get All Users ////////////////////////////
export const getUserInformationData = async(request , response)=>{
    try{
        const data = await createUserAccount.find({})
        response.status(201).json(data)
    }
    catch(error){
        response.status(404).json({ messaage: error.messaage })
    }
}
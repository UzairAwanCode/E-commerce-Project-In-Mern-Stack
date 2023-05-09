import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../Services/api'
import '../Style/Product.css'


const initialValue = {
  productTitle: '',
  price: '',
  category: '',
  productDesc: '',
  productImage: '',
  firstProductSubImage:'',
  secondProductSubImage:'',
  thirdProductSubImage:''
}
const Product = () => {
  const [product, setProduct] = useState(initialValue);
  const [file, setFile] = useState(null)
  const [firstgalleryimage , setFirstGalleryImage] = useState(null)
  const [secondgalleryimage , setSecondGalleryImage] = useState(null)
  const [thirdgalleryimage, , setThirdGalleryImage] = useState(null)
  const { productTitle, price, category, productDesc } = product
  let navigate = useNavigate()

  // Get values from fields
  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
    console.log(product)
  }


  // Get Image From image field
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onChangeGalleryFirstImage = (e)=>{
    setFirstGalleryImage(e.target.files[0])
  }

  const onChangeGallerySecondImage = (e)=>{
    setSecondGalleryImage(e.target.files[0]);
  }




  // Send data to api
  const addProductDetails = async () => {
    let b64file = await toBase64(file);
    let firstGalleryImageString = await convertFirstGalleryImage(firstgalleryimage)
    let secondGalleryImageString = await convertSecondGalleryImage(secondgalleryimage)
    // let thirdGalleryImageString = await convertThirdGalleryImage(thirdgalleryimage)
    product.productImage = b64file
    product.firstProductSubImage = firstGalleryImageString
    product.secondProductSubImage = secondGalleryImageString
    // product.thirdProductSubImage = thirdGalleryImageString
    console.log("File After Encoding " + product.productImage)
    // console.log("File After Encoding " + product.thirdProductSubImage)
    await addProduct(product);
    navigate('/productlist')
  }


  const toBase64 = (file) => 
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // convert First Gallery Image toBase64
  const convertFirstGalleryImage = (firstgalleryimage) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(firstgalleryimage)
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  // convert Second Gallery Image toBase64
  const convertSecondGalleryImage = (secondgalleryimage) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(secondgalleryimage)
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  

  return (
    <div>
      <h1>Add Product</h1>
      <div className="form">

        <div className="form-floating mb-3" style={{ width: "500px" }}>
          <input type="text" onChange={(e) => onValueChange(e)} name='productTitle' className="form-control" id="floatingInput" placeholder="Product Title" />
          <label htmlFor="floatingInput">Product Title</label>
        </div>

        <div className="row row-space">
          <div className="form-floating mb-3" style={{ width: "200px" }}>
            <input type="text" onChange={(e) => onValueChange(e)} name='price' className="form-control" id="floatingInput" placeholder="Product Price" />
            <label htmlFor="floatingInput">Product Price</label>
          </div>

          <div className="form-floating mb-3" style={{ width: "200px" }}>
            <select className="form-select" onChange={(e) => onValueChange(e)} name='category' id="floatingSelect" aria-label="Floating label select example">
              <option defaultValue="Select Category">Select Category</option>
              <option value="Refrigerators and Freezers">Refrigerators and Freezers</option>
              <option value="Washing Machines">Washing Machines</option>
              <option value="Air Conditioners">Air Conditioners</option>
              <option value="Microwave Oven">Microwave Oven</option>
            </select>
          </div>

          <div className="form-floating mb-3" style={{ width: "200px" }}>
              <input type="file" onChange={onChange} />
          </div>
        </div>

        <div className="row row-space" style={{ marginBottom: "30px" }}>

          <label htmlFor="">Gallery Image</label>
          <div className="form-floating mb-3" style={{ width: "200px", marginTop: "20px", marginRight: "10px" }}>
            <input type="file" onChange={onChangeGalleryFirstImage} />
          </div>

          <div className="form-floating mb-3" style={{ width: "200px", marginTop: "20px", marginRight: "10px" }}>
            <input type="file" onChange={onChangeGallerySecondImage} />
          </div>

          {/* <div className="form-floating mb-3" style={{ width: "200px", marginTop: "20px", marginRight: "10px" }}>
            <input type="file" onChange={onChangeGalleryThirdImage} />
          </div> */}

        </div>

        <div className="form-floating mb-3" style={{ width: "500px" }}>
          <textarea className="form-control" onChange={(e) => onValueChange(e)} name='productDesc' placeholder="Product Description" id="productdesc" style={{ height: "100px" }}></textarea>
          <label htmlFor="productdesc">Product Description</label>
        </div>

        <button type="button" onClick={() => addProductDetails()} className="btn btn-outline-primary">Add Product</button>
      </div>
    </div>
  )
}

export default Product

import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {editProduct, getSingleProduct } from '../Services/api'
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

const Editproduct = () => {
  const [product, setProduct] = useState(initialValue);
  const [file, setFile] = useState(null)
  const [firstgalleryimage , setFirstGalleryImage] = useState(null)
  const [secondgalleryimage , setSecondGalleryImage] = useState(null)
  const {productTitle , price, category, productDesc, productImage , firstProductSubImage, secondProductSubImage , thirdProductSubImage} = product
  let navigate = useNavigate()
  const { id } = useParams()

  useEffect(()=>{
    loadProrductData()
  },[])

  const loadProrductData = async()=>{
    const response = await getSingleProduct(id)
    setProduct(response.data)
    console.log(product)
  }
  
  // Send data to api
  const editProductDetails = async()=>{
    let b64file = await toBase64(file);
    let firstGalleryImageString = await convertFirstGalleryImage(firstgalleryimage)
    let secondGalleryImageString = await convertSecondGalleryImage(secondgalleryimage)
    product.productImage = b64file
    product.firstProductSubImage = firstGalleryImageString
    product.secondProductSubImage = secondGalleryImageString
    console.log("File After Encoding " + product.productImage)
    const response = await editProduct(id, product);
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

    const onChange = (e) => {
      setFile(e.target.files[0]);
    };

    const onChangeGalleryFirstImage = (e)=>{
    setFirstGalleryImage(e.target.files[0])
  }

  const onChangeGallerySecondImage = (e)=>{
    setSecondGalleryImage(e.target.files[0]);
  }
  // Get values from fields
  const onValueChange = (e)=>{
    setProduct({...product, [e.target.name]: e.target.value})
    console.log(product)
  }




  return (
    <div>
      <h1>Edit Product</h1>
      <div className="form">
        
        <div className="form-floating mb-3" style={{ width: "500px" }}>
          <input type="text" onChange={(e)=>onValueChange(e)} name='productTitle' value={productTitle} className="form-control" id="floatingInput" placeholder="Product Title" />
          <label htmlFor="floatingInput">Product Title</label>
        </div>

        <div className="row row-space">
          <div className="form-floating mb-3" style={{ width: "200px" }}>
            <input type="text" onChange={(e)=>onValueChange(e)} name='price' value={price} className="form-control" id="floatingInput" placeholder="Product Price" />
            <label htmlFor="floatingInput">Product Price</label>
          </div>

          <div className="form-floating mb-3" style={{ width: "200px" }}>
            <select className="form-select" onChange={(e)=>onValueChange(e)} name='category' value={category} id="floatingSelect" aria-label="Floating label select example">
            <option defaultValue="Select Category">Select Category</option>
              <option value="Refrigerators and Freezers">Refrigerators and Freezers</option>
              <option value="Washing Machines">Washing Machines</option>
              <option value="Air Conditioners">Air Conditioners</option>
              <option value="Microwave Oven">Microwave Oven</option>
            </select>
          </div>

          <div className="form-floating mb-3" style={{ width: "200px", marginTop: "30px" }}>
              <input type="file" onChange={onChange}/>
          </div>

          <div className="row row-space" style={{ marginBottom: "30px" }}>

          <label htmlFor="">Gallery Image</label>
          <div className="form-floating mb-3" style={{ width: "200px", marginTop: "20px", marginRight: "10px" }}>
            <input type="file" onChange={onChangeGalleryFirstImage} />
          </div>

          <div className="form-floating mb-3" style={{ width: "200px", marginTop: "20px", marginRight: "10px" }}>
            <input type="file" onChange={onChangeGallerySecondImage} />
          </div>

          

        </div>

        </div>

        <div className="form-floating mb-3" style={{ width: "500px" }}>
          <textarea className="form-control" onChange={(e)=>onValueChange(e)} name='productDesc' value={productDesc} placeholder="Product Description" id="productdesc" style={{ height: "100px" }}></textarea>
          <label htmlFor="productdesc">Product Description</label>
        </div>

        <button type="button" onClick={()=>editProductDetails()} className="btn btn-outline-primary">Edit Product</button>
      </div>
    </div>
  )
}

export default Editproduct

import React, { useEffect, useState } from 'react'
import { deleteProduct, getAllProducts } from '../Services/api'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setPoducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const deleteAllProduct = async (id) => {
    await deleteProduct(id)
    getProducts()
  }

  const getProducts = async () => {
    let response = await getAllProducts()
    setPoducts(response.data)
  }
  return (
    <div>
      <h1 className='my-3'>All Products</h1>
      <table className="table" style={{ marginTop: "40px" }}>
        <thead className="thead-dark" style={{backgroundColor: "black" , color: "#fff"}}>
          <tr>
            <th scope="col">#</th>
            <th scope="col" style={{ width: "150px" }}>Product Name</th>
            <th scope="col" style={{ width: "150px" }}>Price</th>
            <th scope="col" style={{ width: "150px" }}>Category</th>
            <th scope="col" style={{ width: "350px" }}>Product Details</th>
            <th scope="col" >Product Image</th>
            <th scope="col" style={{ width: "170px" }} >Product Sub Images</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <th scope="row">#</th>
              <td>{product.productTitle}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.productDesc}</td>
              <td  style={{width: "150px"}}><img src={product.productImage} alt="" width="80%" /></td>
              <td  style={{width: "150px"}}><img src={product.firstProductSubImage} alt="" width="50%" /><img src={product.secondProductSubImage} alt="" width="50%" /><img src={product.thirdProductSubImage} alt="" width="50%" /></td>
              <td>
                <Link type="button" className="btn btn-primary" style={{marginRight: "10px"}} component={Link} to={`/edit/${product._id}`}>Edit</Link>
                <button type="button" className="btn btn-danger" onClick={() => deleteAllProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ProductList
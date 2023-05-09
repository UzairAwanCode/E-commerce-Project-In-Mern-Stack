import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteProduct, getApprovalValues, sendEmail } from '../Services/api'

const userEmail = {
  email: '',
}
const Analytics = () => {
  const [approve, setApprove] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    let response = await getApprovalValues()
    setApprove(response.data)
    console.log(approve)
    
  }

  const sendEmailToUser = async(data)=>{
    userEmail.email = data
    let response = await sendEmail(userEmail)
    console.log(response.data.status)
    if(response.data.status == "Successfull"){
      alert("Message Send Successfully")
    }
  }

  const deleteuser = async (id) => {
    await deleteProduct(id)
    getProducts()
  }
  return (
    <div>
      <h1 className='my-3'>Pending Approvals</h1>
      <table className="table" style={{ marginTop: "40px", width: "50%" }}>
        <thead className="thead-dark" style={{ backgroundColor: "black", color: "#fff" }}>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Amount Payed</th>
            <th> Take Action</th>
          </tr>
        </thead>
        <tbody>
        {approve.map((product) => (
          <tr key={product._id}>
            <th scope="row">#</th>
            <td>{product.name}</td>
            <td>{product.email}</td>
            <td>Rs {product.amount}</td>
            <td style={{ width: "38%" }}>
              <Link to="#" className="btn btn-primary" style={{ marginRight: "10px" }} onClick={()=>sendEmailToUser(product.email)}>Send Email Verification</Link>
              <button type="button" className="btn btn-danger" onClick={() => deleteuser(product._id)}>Delete</button>
            </td>
          </tr>
           ))}
        </tbody>
      </table>

    </div>
  )
}

export default Analytics

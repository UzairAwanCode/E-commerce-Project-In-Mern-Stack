import React, { useEffect, useState } from 'react'
import { deleteProduct, getApprovalValues, getUserInformationData } from '../Services/api'


const userEmail = {
    Success: '',
}

const UserInformation = () => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        getProducts()
      }, [])
    
      const getProducts = async () => {
        let response = await getUserInformationData()
        setUserInfo(response.data)
        console.log(userInfo)
      }

      const deleteuser = async (id) => {
        await deleteProduct(id)
        getProducts()
      }

    return (
        <div>
            <h1 className='my-3'>User Information</h1>
            <table className="table" style={{ marginTop: "40px", width: "50%" }}>
                <thead className="thead-dark" style={{ backgroundColor: "black", color: "#fff" }}>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th> Take Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((product) => (
                        <tr key={product._id}>
                            <th scope="row">#</th>
                            <td>{product.Name}</td>
                            <td>{product.Email}</td>
                            <td style={{ width: "38%" }}>
                                <button type="button" className="btn btn-danger" onClick={() => deleteuser(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default UserInformation

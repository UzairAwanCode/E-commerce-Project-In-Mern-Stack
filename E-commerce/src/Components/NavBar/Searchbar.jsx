import React, { useEffect, useState } from 'react'
import './Searchbar.css'
import { FiSearch } from 'react-icons/fi'
import { getAllProducts, getSearchProducts } from '../../Services/api'
import { Link } from 'react-router-dom'

const Searchbar = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        getallProducts()
    }, [])

    const getallProducts = async () => {
        // let response = await getSearchProducts()
        let response = await getAllProducts()
        setProducts(response.data)

    }

    const searchbytitle = () => {
        setSearch('')
        getAllProducts()
    }
    return (
        <div className="searchbody" style={{}}>
            <div class="searchcontainer" >
                <input type="text" placeholder="Search..." className="input" onChange={(e) => setSearch(e.target.value)} />
                <Link to="#" className="bTn" onClick={() => searchbytitle()}>
                    <i className="fas" style={{}}> <FiSearch /></i>
                </Link>
            </div>


            <div className="main-search-container">
                {
                    products.map((fridge) =>
                        search == fridge.productTitle ?
                            <div className="search-mainbox" key={fridge._id}>
                                <div>
                                <Link to={`/productdetails/${fridge._id}`} onClick={() => searchbytitle()}><img className='searchproductsize' style={{width:"70px", height:"70px" , background: "none" , marginTop:"8px"}} src={fridge.productImage} alt="" /></Link>
                                </div>
                                <h4 style={{marginLeft: "60px" , marginTop: "-50px" , width: "200px" , fontSize: "20px"}}>{fridge.productTitle}</h4>
                            </div>
                            : ''
                    )
                }
            </div>
        </div>
    )
}

export default Searchbar

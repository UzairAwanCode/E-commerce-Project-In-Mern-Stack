import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Allproducts from './Allproducts'
import Dawlance from '../Refrigerators/Refrigerators'
import Pel from '../Microwave/Microwave'
import Haier from '../Machines/Machines'
import Home from '../Home/Home'

const Product = () => {
    // const [category, setCategory] = useState("select category")
    // const [dawlance, setDawlance] = useState(false)
    // const [pel, setPel] = useState(false)
    // const [haier, setHaier] = useState(false)
    // const [allproducts, setAllProducts] = useState(true)
    // useEffect(() => {
    //     category === 'Dawlance' ? setDawlance(true) : setDawlance(false)
    //     category === 'Pel' ? setPel(true) : setPel(false)
    //     category === 'Haier' ? setHaier(true) : setHaier(false)
    //     category === 'All' ? setAllProducts(true) : setAllProducts(false)
    // }, [category])

    // const handleonchange = (e) => {
    //     setCategory(e.target.value)
    // }

    // const renderResult = () => {
    //     let result;
    //     category === "select category" ? (result = "All ") :
    //         (result = category);
    //     return result
    // }
    return (
        <div className="small-container">
            <div>
                <Home/>
            </div>
            {/* {category === 'select category' ?  : allproducts && <Allproducts />}
            {dawlance && <Dawlance />}
            {pel && <Pel />}
            {haier && <Haier />} */}

        </div>
    )
}

export default Product

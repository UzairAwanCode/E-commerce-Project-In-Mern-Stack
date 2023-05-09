import React from 'react'
import Banner from '../../Components/Home/Banner'
import Brands from '../../Components/Home/Brands'
import Featuredimages from '../../Components/Home/Featuredimages'
import Headerbanner from '../../Components/Home/Headerbanner'
import Testimonials from '../../Components/Home/Testimonials'
import Searchbar from '../../Components/NavBar/Searchbar'

const Home = () => {
  return (
    <div>
     
      <Headerbanner/>
      <Featuredimages/>
      <Banner/>
      <Testimonials/>
      <Brands/>
    </div>
  )
}

export default Home

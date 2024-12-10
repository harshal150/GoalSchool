import React from 'react'
import Footer from '../component/Footer'
import Facilities from '../component/facilities/facilities'
import Navbar from "../component/Navbar";
import FacilitiesHeader from '../component/facilities/FacilitiesHeader';

const FacilitiesPage = () => {
  return (
    <div>
    <Navbar/>
    <FacilitiesHeader/>
   <Facilities/>
   <Footer/>
    </div>
  )
}

export default FacilitiesPage

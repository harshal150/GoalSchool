import React from 'react'
import FacultyHeader from '../component/faculty/FacultyHeader'
import Navbar from '../component/Navbar'
import Footer from "../component/Footer";
import KindergartenFaculty from '../component/faculty/KinderGartenFaculty';
import SeniorFaculty from '../component/faculty/SeniorFaculty';
const FacultyPage = () => {
  return (
    <div>
    <Navbar/>
      <FacultyHeader/>
      <KindergartenFaculty/>
      <SeniorFaculty/>
      <Footer/>
    </div>
  )
}

export default FacultyPage

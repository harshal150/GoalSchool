import React from 'react'
import AlumniHeader from '../component/alumni/Alumni'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import MentorAndGuidance from '../component/alumni/MentorAndGuidance'
import SuccessStories from '../component/alumni/SuccessStories'

const AlumniPage = () => {
  return (
    <div>
    <Navbar/>
      <AlumniHeader/>
      <MentorAndGuidance/>
      <SuccessStories/>
      <Footer/>
    </div>
  )
}

export default AlumniPage

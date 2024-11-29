import React from 'react'
import AboutHeroSection from '../component/about/AboutHeroSection'
import Navbar from '../component/Navbar'
import ManagmentTeam from '../component/about/ManagmentTeam'
import Faculty from '../component/about/Faculty'
import VisionMission from '../component/about/VisionMission'
import KidsGallery from '../component/KidsGallery'

const About = () => {
  return (
    <div>
    <Navbar/>
     <AboutHeroSection/>
     {/* <Faculty/> */}
     <VisionMission/>
     <ManagmentTeam/>
     <Faculty/>
     <KidsGallery/>
    </div>
  )
}

export default About

import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../components/Pages/Plans/Plans'
import Course from '../components/Pages/Courses/Course'
import Aboutus from '../components/Pages/Aboutus/Aboutus'
import Contactus from '../components/Pages/Contactus/Contactus'
import Support from '../components/Pages/Support/Support'

function LayoutRoutes() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Plans/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/aboutUs' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/support' element={<Support/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default LayoutRoutes

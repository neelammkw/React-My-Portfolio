import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Service from './pages/Service'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/skills' element={<Skills/>} />
  <Route path='/service' element={<Service/>} />
    </Routes>
    <Footer/>
    </>
  )
}
export default App
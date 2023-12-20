import React, { useEffect, useState } from 'react'
import './style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import {useLocation} from 'react-router-dom'

const Navbar = () => {
  const [progress,setProgress] = useState(100);
  let location = useLocation();
  useEffect(()=>{
    setProgress(100)
  },[location])
  return (
    <>
    <ToastContainer/>
      <header id="navbar">
        <nav>
          <Link to="/">My-Portfolio</Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/service">Service</Link></li>
          </ul>
        </nav>
      </header>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

    </>
  )
}

export default Navbar
import React from 'react'
import Header from './Header'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

 function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
 <div className="container">
  <a href="#" className="navbar-brand">SHAMIMA</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:'#fff'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a href="#header-section" className="nav-link ">Home </a>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link" >about me</a>
      </li>
      <li className="nav-item">
        <a href="#service-section" className="nav-link" >services</a>
      </li>
      <li className="nav-item">
        <a href="#skill-section" className="nav-link" >my skill</a>
      </li>
      <li className="nav-item">
        <a href="#contact-section" className="nav-link" >contact</a>
      </li>
    
      
    </ul>
    
  </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;
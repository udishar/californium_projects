import React, { useRef } from 'react';
import {FaBars , FaTimes, FaUtensils, FaHouseUser,FaInfoCircle} from 'react-icons/fa';
import{RiLoginCircleFill , RiRegisteredFill} from 'react-icons/ri'
import{CgProfile} from 'react-icons/cg'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    const navRef=useRef();
      
    const ShowNavBar=() => {
        navRef.current.classList.toggle('responsive_nav')
    }

 return (
    <>
    <header>
    <h3><FaUtensils/></h3>
   
   <nav ref={navRef}>

        <Link to="/Home"><FaHouseUser/> Home</Link>
        <Link to ='/#'><FaInfoCircle/> About Us</Link>
        <Link to='/Login'><RiLoginCircleFill/> Login</Link>
        <Link to ='/Register'><RiRegisteredFill/> Register</Link>
        <Link ><CgProfile/></Link>
        <button className='nav-btn nav-close-btn' onClick={ShowNavBar}>
            <FaTimes/>
        </button>
    </nav>
    <button className='nav-btn' onClick={ShowNavBar}>
        <FaBars/>
    </button>
    </header>
    
    </>
  )
}

export default Navbar;

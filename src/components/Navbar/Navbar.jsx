import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
// import {GoThreeBars} from 'react-icons/go'
import {FaInstagram,FaTwitter,FaFacebookF,FaBars,FaTimes} from 'react-icons/fa'
// import {} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './nav.css';

const Navbar = () => {
    const [DisplayMenu,SetDisplayMenu] =useState(false);
  return (
    <nav>
        <div className="container navbar">
            <div className="search">
               <FiSearch id='searchIcon'/>
               <input type="text" placeholder='Search'/>
            </div>
            <div className="middle">
                <h1>B-DESIGN</h1>
            </div>
            <div className="socials">
            <div className="navSociols">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
        
            </div>
            <ul className={`nav_links ${DisplayMenu ? 'display-nav' : 'hide-nav'}`}>
             
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/SignUp">SignUp</Link></li>

          
            </ul>
            <button className='btns' onClick={()=>SetDisplayMenu(prev => !prev)}>
          { DisplayMenu ? <FaTimes /> :  <FaBars /> }
        </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
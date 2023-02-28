import React from 'react'
import './footer.css'
import {FaInstagram,FaTwitter,FaFacebookF} from 'react-icons/fa'
const Footer = () => {
  return (
    <section id='footer'>
        <h2>Get In Touch</h2>
        <div className="container footer">
            <div className="footerSociols">
                <span><FaFacebookF /></span>
                <span><FaTwitter /></span>
                <span><FaInstagram /></span>
            </div>
            <div className="footerContent">
                <p>Copyright ©2023 All rights reserved | <b>Blandine Munezero</b></p>
                <p>Terms & Conditions/ Privacy Policy</p>
            </div>
        </div>
    </section>
  )
}

export default Footer
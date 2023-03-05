import React from 'react';
import {Route,Link } from 'react-router-dom';
import "./Footer.css"
function Footer() {
  return (
    <div>
    <footer className="footer" >
    <div>
      <p>Saintgits College of Engineering</p>
      <p>Kottukulam Hills, Pathamuttam P. O, Kerala 686532</p>
    </div>
    <ul className="list">
        
        <li>
            <Link to="/aboutus"  className="anc">About us</Link>
        </li>
        <li>
            <Link to="/Refund" className="anc">Refund policy</Link>
        </li>
    
        <li>
            <Link to="/Privacy" className="anc"> Privacy policy</Link>
        </li>
        <li>
            <Link to="/Terms"  className="anc">Terms of service</Link>
        </li>
        <li>
        
            <Link to="/Contact" className="anc" >Contact us</Link>
           
        </li>
    </ul>
      
     <p>
    <p>Powered by</p> <Link to="/developers" className="copy">NK23 Website Team</Link>
     </p>
 
  </footer>
    </div>
  )
}

export default Footer
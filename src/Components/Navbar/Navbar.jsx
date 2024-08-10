import React, { useEffect, useState } from "react";
import "./Navbar.css";


const Navbar = () => {

 const [sticky, setSticky] = useState(false);

 useEffect(() => {
  window.addEventListener('scroll', ()=>{
    window.scrollY > 270 ? setSticky(true) : setSticky(false);
  })
 },[])
 


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''} `}>
      <h3>WW Consultants</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Our Projects </li>
        <li>Our Experts </li>
        <li><button className="btn">Contact</button></li>
      </ul>
    </nav>
  ) 
};

export default Navbar;
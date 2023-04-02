import React,{ useState } from 'react'
import '../styles/Navbar.css'
import Logo from '../Assets/cube.png'
import { HashLink } from 'react-router-hash-link'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    
  return (
    
    <div className = "navbar" id={openLinks ? "open" : "close"}>
      <div className = "nav" onClick = {toggleNavbar}>
         <div className = "hidden" onClick = {toggleNavbar}>
            <HashLink to="#" smooth> RUBIKS </HashLink>
            <HashLink to="#details" smooth> How? </HashLink>
            <HashLink to="#cad" smooth> Hardware </HashLink>
            <HashLink to="#code" smooth> Software </HashLink>
            <HashLink to="#media" smooth> Success! </HashLink>
         </div>
        <div className="centerSide">
            <HashLink to='/'>
            <button onClick = {toggleNavbar}> 
                <img src={Logo}/>
            </button> 
            </HashLink>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <img src="/Images/biaLogo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
    
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/lifestyle">Lifestyle</Link>
        </li>
      </ul>
      <button>
        <b>ORDER NOW</b>
      </button>
    </nav>
  )
}

export default Navbar

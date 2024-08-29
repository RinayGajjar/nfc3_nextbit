import React from 'react'
import '../stylesheets/Navbar.css'
import Image from 'next/image'

const navbar = () => {
  return (
    <div className='navbar-main'>
        <div><Image src="src\app\comp\assets\logo.png" alt=''/></div>
        <div className='navtags'>
            <p id='navp'>Home</p>
            <p id='navp'>About Us</p>
            <p id='navp'>Dashboard</p>
            <p id='navp'>Contact Us</p>
        </div>
        <button id='login-btn'><strong>Login/Sign Up</strong></button>
    </div>
  )
}

export default navbar
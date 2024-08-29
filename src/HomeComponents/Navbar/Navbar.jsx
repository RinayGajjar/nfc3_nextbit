import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/navlogo.jpg'

const Navbar = () => {
    return (
        <div className='navbarmain'>
            <div id='navlogo'><img src={navlogo} alt="" /></div>
            <div className='navtags'>
                <p id='navp'>Home</p>
                <p id='navp'>About Us</p>
                <p id='navp'>Volunteer Dashboard</p>
                <p id='navp'>Donor Dashboard</p>
                <p id='navp'>Contact Us</p>
            </div>
            <div className='navbarbtns'>
                <button id='navlogin'><strong>Login</strong></button>
                <button id='navsign'><strong>Sign Up</strong></button>
            </div>
        </div>
    )
}

export default Navbar
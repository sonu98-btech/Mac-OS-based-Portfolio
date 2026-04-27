import React from 'react'
import './navbar.css'
import DateTime from './DateTime'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <img src="/nav-icon/apple.svg" alt="Apple logo" />
            <p>Sonu Kumar</p>
            <p>File</p>
            <p>Window</p>
            <p>Terminal</p>
        </div>
        <div className="right">
            <img src="/nav-icon/wifi.svg" alt="Wi-Fi status" />
            <DateTime />
        </div>

    </div>
  )
}

export default Navbar
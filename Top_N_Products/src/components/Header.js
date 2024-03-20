import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <h1>Products</h1>
        <div className='navbar'>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Logout</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
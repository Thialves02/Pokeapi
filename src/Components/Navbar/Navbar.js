import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/logo.png'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <img src={logo}/>
            <form>
                <input type='text' placeholder='Pesquisar'/>
            </form>
        </div>
    )
}

import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div className='d-f align-center'>
                <div><img src="/images/logo.svg" alt="Logo" /></div>
                <div className="header-call">Call Us - (+22) 123 456 7890</div>
            </div>
            <div className="d-f align-center">
                <nav>
                    <ul className="header-nav d-f">
                        <li className="header-nav-item"><Link to="/">Home</Link></li>
                        <li className="header-nav-item nav-item-drop">
                            Pages
                            <ul className="drop-list">
                               <li><Link to="/team">Team</Link></li>
                               <li><Link to="/blog">Blog</Link></li>
                            </ul>    
                        </li>
                        <li className="header-nav-item"><Link to="/about">About</Link></li>
                        <li className="header-nav-item"><Link to="/services">Services</Link></li>
                        <li className="header-nav-item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="header-social d-f">
                    <div><img src="/images/header-social1.png" alt="header-social1" /></div>
                    <div><img src="/images/header-social2.png" alt="header-social2" /></div>
                    <div><img src="/images/header-social3.png" alt="header-social3" /></div>
                </div>
                <a href="" className="header-reservation">Reservation</a>
            </div>
        </header>
    )
}

export default Header
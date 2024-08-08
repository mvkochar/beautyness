import React from 'react'
import './Header.css'

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
                        <li className="header-nav-item"><a href="">Home</a></li>
                        <li className="header-nav-item nav-item-drop">Pages</li>
                        <li className="header-nav-item"><a href="">About</a></li>
                        <li className="header-nav-item"><a href="">Services</a></li>
                        <li className="header-nav-item"><a href="">Contact</a></li>
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
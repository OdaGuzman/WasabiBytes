import React from 'react'
import menu from '../public/assets/menu.svg'

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav flex overflow-hidden;" >
        <div className="header__logo">
          <h4 data-aos="fade-down">WASABI <span>B Y T E S  </span> </h4>
          <div className="header__logo-overlay"></div>
        </div>

        <ul className="header__menu" data-aos="fade-down">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#food">Food</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <img src="assets/search.svg" alt="search" />
          </li>
        </ul>

        <ul className="header__menu-mobile" data-aos="fade-down">
          <li>
            <img src={menu} alt="menu" />
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Header
import React from 'react'

const Footer = () => {
  return (
    <div className="footer flex-between">
      <h3 className="footer__logo">
        <span>WASABI    </span> B Y T E S 
      </h3>

      <h2 className="footer__nav">Seasoned with ❤️ by Oda 🧙🏽</h2>

      <ul className="footer__social">
        <li className="flex-center">
          <img src="assets/facebook.svg" alt="facebook" />
        </li>
        <li className="flex-center">
          <img src="assets/instagram.svg" alt="instagram" />
        </li>
        <li className="flex-center">
          <img src="assets/twitter.svg" alt="twitter" />
        </li>
      </ul>
    </div>
  )
}

export default Footer
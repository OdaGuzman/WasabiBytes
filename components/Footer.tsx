import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex w-full flex-wrap gap-44 overflow-hidden px-10 py-5 bg-white font-jakarta">

      <h3 className="text-secondary-color text-2xl font-600 cursor-pointer">
        <span className="text-primary-color">WASABI    </span> B Y T E S
      </h3>

      <ul className="flex gap-24 list-none">
        <li className=""><a href="#menu">M E N U</a></li>
        <li><a href="#about">A B O U T</a></li>
        <li><a href="#login">L O G I N</a></li>
      </ul>

      <ul className="footer__social gap-8 flex justify-center items-center">
        <li>
          <Image
            src="assets/facebook.svg"
            alt="facebook"
            className='object-contain'
            width={45}
            height={45} />
        </li>
        <li className="flex-center">
          <img src="assets/instagram.svg" alt="instagram" className='w-[45%] h-[45%] object-contain' />
        </li>
        <li className="flex-center">
          <img src="assets/twitter.svg" alt="twitter" className='w-[45%] h-[45%] object-contain' />
        </li>

      </ul>

      <h2 className="text-center font-jakarta">Seasoned with ❤️ by Oda 🧙🏽</h2>

    </div>

  )
}
export default Footer
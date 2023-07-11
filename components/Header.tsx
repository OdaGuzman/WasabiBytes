import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (

    <div className="flex overflow-hidden font-jakarta" >
      <div className="flex-1 flex relative p-5 bg-[color:var(--primary-color)]">
        <h4 className="font-bold text-2xl uppercase text-white opacity-80">WASABI <span>B Y T E S  </span> </h4>
        <div className="absolute w-full z-[-1] inset-0;"></div>
      </div>

      <ul className="flex-[1.236] flex items-center justify-end gap-8 p-5 list-none">
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <Image
            src="/assets/user-nav.png"
            alt="User Log In"
            title="User Log In"
            width={35}
            height={60}
          />
        </li>
      </ul>
    </div>


  )
}

export default Header
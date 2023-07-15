import Image from 'next/image'

const Header = () => {
  return (

    <div className="flex overflow-hidden font-jakarta-600" >
      <div className="flex-1 relative p-5 bg-primary-color">
        <h4 className="font-bold text-2xl uppercase text-white opacity-80">WASABI <span>B Y T E S  </span> </h4>
        <div className="absolute w-full z-[-1] inset-0;"></div>
      </div>

      <ul className="flex-[1.236] flex items-center justify-end gap-8 p-5 list-none font-medium text-secondary-color text-base uppercase leading-5 cursor-pointer">
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <Image
            src="/assets/usernav.png"
            alt="User Log In"
            title="User Log In"
            width={40}
            height={40}
          />
        </li>
      </ul>
    </div>


  )
}

export default Header
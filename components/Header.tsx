import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (

    <div className="flex overflow-hidden font-jakarta-600" >
      <div className="flex-1 relative p-5 bg-primary-color">
        <h3 className="text-secondary-color text-md lg:text-2xl font-600">
          <a href="/">
            <span className="text-white">WASABI    </span> B Y T E S
          </a>
        </h3>
        <div className="absolute w-full z-[-1] inset-0;"></div>
      </div>

      <ul className="flex-[1.236] flex items-center justify-end gap-8 p-5 list-none font-medium text-secondary-color text-base uppercase leading-5">
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li className="cursor-pointer">
          <a href="/cart">
            <Image
              src="/assets/cart3.png"
<<<<<<< HEAD
              alt="Cart"
              title="Cart"
=======
              alt="User Log In"
              title="User Log In"
>>>>>>> 4ce42cbd61598fd443f3e2c5d6d523f72e1b1f50
              width={40}
              height={40}
            />
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="/signup">
            <Image
              src="/assets/userhat.png"
              alt="User Log In"
              title="User Log In"
              width={40}
              height={40}
            />
          </a>
        </li>
      </ul>
    </div >


  )
}

export default Header
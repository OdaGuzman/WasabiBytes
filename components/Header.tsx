import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

  const { user } = useUser()
  return (

    <div className="flex overflow-hidden font-jakarta-600" >
      <div className="flex-1 relative p-5 bg-primary-color">
        <h4 className="font-bold text-2xl uppercase text-white opacity-80">
          <a href="/">
            WASABI <span>B Y T E S  </span>
          </a>
        </h4>
        <div className="absolute w-full z-[-1] inset-0;"></div>
      </div>

      <ul className="flex-[1.236] flex items-center justify-end gap-8 p-5 list-none font-medium text-secondary-color text-base uppercase leading-5">
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        {/* <li>
         <a href="../app/about/page.tsx">About</a>
       </li> */}
        <li className="cursor-pointer">
          <a href="/cart">
            <Image
              src="/assets/cart3.png"
              alt="User Log In"
              title="User Log In"
              width={40}
              height={40}
            />
          </a>
        </li>
        {user ?
          <li>
            <Link href="/api/auth/logout" >
              <p>Logout</p>
            </Link>
          </li>
          :
          <li>
            <Link href="/api/auth/login">
              <Image
                src="/assets/userhat.png"
                alt="User Log In"
                title="User Log In"
                width={40}
                height={40}
              />
            </Link>
          </li>
        }

      </ul>
    </div >
  )
}

export default Header
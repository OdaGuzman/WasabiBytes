import Header from './Header'
import Footer from '../../../components/Footer'
import React from 'react'
import Image from 'next/image'


const Menu = () => {
  return (
    <div>
      <Header />

      <div className="relative flex h-screen">
        {/* Background */}
        <div className="flex absolute inset-0 bg-primary-color">

          {/* Image */}
          <div className="flex items-center justify-center w-1/2">
            <Image
              src="/assets/signup1.png"
              alt="Image"
              className=""
              width={550}
              height={250} />
          </div>

          {/* Form */}
          <div className="flex items-center justify-center w-1/2 bg-opacity-50" >
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-4xl text-center font-playfair">Sign Up / Login</h2>
              <form>
                {/* Add your form fields here */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Menu
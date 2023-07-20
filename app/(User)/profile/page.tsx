import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import React from 'react'
import Image from 'next/image'
const Menu = () => {
  return (
    <div>
      <Header />

      <div className="flex h-screen bg-red-500">
        {/* Image */}
        <div className="flex items-center justify-center w-1/2">
          <Image
            src="/path/to/image.jpg"
            alt="Image"
            width={96}
            height={96} />
        </div>

        {/* Form */}
        <div className="flex items-center justify-center w-1/2">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-4xl text-center font-playfair">Sign Up / Login</h2>
            <form>
              {/* Add your form fields here */}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Menu
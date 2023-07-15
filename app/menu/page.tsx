import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const page = () => {
  return (
    <div>
      <Header />

      <h2 className="font-500 text-6xl leading-[123px] text-primary-color text-center font-playfair">Menu</h2>

      
      {/* Sushi Rolls Section*/}
      <h3 className="text-3xl leading-[123px] text-secondary-color text-center font-playfair">Sushi Rolls</h3>

      
      {/* Ramen Section*/}
      <h3 className="text-3xl leading-[123px] text-secondary-color text-center font-playfair">Ramen</h3>

      
      {/* Beverages Section*/}
      <h3 className="text-3xl leading-[123px] text-secondary-color text-center font-playfair">Beverages</h3>

      
      {/* Desserts Section*/}
      <h3 className="text-3xl leading-[123px] text-secondary-color text-center font-playfair">Desserts</h3>


      
      <Footer />
    </div>
  )
}

export default page

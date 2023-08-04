'use client'
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react';
import Image from 'next/image';

const Cart: React.FC = () => {

  const cartItems = [
    {
      id: 1,
      name: 'Sushi Roll 1',
      description: 'Delicious sushi roll with fresh ingredients.',
      quantity: 2,
      price: 12.99,
    }
    ,
    {
      id: 2,
      name: 'Sushi Roll 2',
      description: 'Another tasty sushi roll to try.',
      quantity: 1,
      price: 8.99,
    },
  ];

  const [promoCode, setPromoCode] = useState('');

  const [deliveryOption, setDeliveryOption] = useState('homeDelivery');

  const handleApplyPromoCode = () => {
    console.log('Promo code:', promoCode);
    setPromoCode('');
  };

  // Function to handle changing the delivery option
  const handleDeliveryOptionChange = (option: string) => {
    setDeliveryOption(option);
  };

  // Calculate subtotal, taxes, and total
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const taxes = subtotal * 0.1; // Replace with the actual tax rate
  const total = subtotal + taxes;

  return (
    <>
      <Header />
      <div className="bg-creamson text-primary-color p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-xl font-bold my-4">Order</h2>
            {/* {cartItems.map((item) => (
              // ... (your existing code for the cart items)
            ))} */}
            <div className="text-xl font-bold mb-4">Total: ${subtotal.toFixed(2)}</div>
          </div>

          {/* Right Column */}
          <div className="blue-border p-4">
            {/* Delivery Option */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Delivery Option</h2>
              {/* ... (your existing code for the delivery options) */}
            </div>

            {/* Promo Code */}
            <div>
              <h2 className="text-xl font-bold mb-4">Promo Code</h2>
              <div className="flex items-center">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color focus:border-b-4"
                  placeholder="Enter promo code"
                />
                <button
                  onClick={handleApplyPromoCode}
                  className="px-4 py-2 ml-4 bg-creamson text-primary-color rounded-full"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="mt-8 flex items-center flex-col">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {/* ... (your existing code for the order summary) */}
            <button style={{ width: '200px' }} className="mb-10 bg-primary-color text-creamson px-4 py-2 rounded-full">
              Confirm Order
            </button>


          </div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
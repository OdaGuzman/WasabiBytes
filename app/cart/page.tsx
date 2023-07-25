'use client'
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react';
import Image from 'next/image';

const Cart: React.FC = () => {
  // Sample data for the cart items
  const cartItems = [
    {
      id: 1,
      name: 'Sushi Roll 1',
      description: 'Delicious sushi roll with fresh ingredients.',
      quantity: 2,
      price: 12.99,
      // image: '/sushi-roll-1.jpg', // Replace with the actual image URL
    },
    {
      id: 2,
      name: 'Sushi Roll 2',
      description: 'Another tasty sushi roll to try.',
      quantity: 1,
      price: 8.99,
      // image: '/sushi-roll-2.jpg', // Replace with the actual image URL
    },
    // Add more cart items as needed
  ];

  // State for the promotional code input
  const [promoCode, setPromoCode] = useState('');

  // State for delivery option (home delivery or pick up)
  const [deliveryOption, setDeliveryOption] = useState('homeDelivery');

  // Function to handle applying the promo code
  const handleApplyPromoCode = () => {
    // Add your logic here to apply the promo code
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
        <div className="flex items-center justify-center w-full md:w-1/2">
          <Image
            src="/assets/cart1.png"
            className="object-cover"
            alt="Image"
            width={300}
            height={300}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div>
            <h2 className="text-xl font-bold mb-4">Order</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <div className="w-16 h-16 mr-4">
                  {/* <Image src={item.image} alt={item.name} layout="responsive" /> */}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="flex items-center ml-auto">
                  <button className="px-2 py-1 border rounded-full bg-creamson text-primary-color mr-2">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="px-2 py-1 border rounded-full bg-creamson text-primary-color ml-2">
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="text-xl font-bold mb-4">Total: ${subtotal.toFixed(2)}</div>
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

        {/* Delivery Option */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Delivery Option</h2>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="homeDelivery"
              name="deliveryOption"
              value="homeDelivery"
              checked={deliveryOption === 'homeDelivery'}
              onChange={() => handleDeliveryOptionChange('homeDelivery')}
              className="mr-2"
            />
            <label htmlFor="homeDelivery" className="font-semibold">
              Home Delivery
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pickUp"
              name="deliveryOption"
              value="pickUp"
              checked={deliveryOption === 'pickUp'}
              onChange={() => handleDeliveryOptionChange('pickUp')}
              className="mr-2"
            />
            <label htmlFor="pickUp" className="font-semibold">
              Pick Up
            </label>
          </div>

          {/* Order Summary */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes (10%)</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-primary-color text-creamson px-4 py-2 rounded-full">
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

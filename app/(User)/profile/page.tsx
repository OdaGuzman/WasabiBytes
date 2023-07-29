'use client'
import React, { useState } from 'react';
import Header from '../signup/Header';
import Footer from '../../../components/Footer'
import Image from 'next/image';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-up form submission logic here
    console.log(formData);
    // You can use the formData object to send data to your backend or perform any other actions.
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row h-screen">
        <div className="flex items-center flex-col justify-center md:w-1/2 bg-creamson frosted">

          {/* Image */}
          <div className="flex items-center flex-col justify-center md:w-1/2 bg-creamson glass">

            {/* Profile Picture */}
            <div className="rounded-full overflow-hidden my-4">
              <Image
                src="/assets/userp.png"
                className="object-cover w-full h-full"
                alt="Profile Picture"
                width={65}
                height={36}
              />
            </div>

            {/* User's Name */}
            <p className="text-3xl font-semibold mb-2 text-primary-color font-playfair hover:text-blue-800  transition-colors duration-400 mt-4">
              John Doe
            </p>

            {/* Divs for Different Sections */}
            <div className="w-1/2 rounded-lg p-4 my-2">


              {/* Personal Information */}
              <p className="text-md font-semibold mb-2 text-primary-color font-playfair hover:text-blue-800 transition-colors duration-400">
                Personal Information
              </p>
              {/* Add your personal information content here */}
            </div>
            <div className="w-1/2 rounded-lg p-4 my-2">
              {/* Login and Password */}
              <p className="text-md font-semibold mb-2 text-primary-color font-playfair hover:text-blue-800  transition-colors duration-400">

                Login and Password
              </p>
              {/* Add your login and password content here */}
            </div>

            <div className="w-1/2 rounded-lg p-4 my-2">
              {/* Order History */}
              <p className="text-md font-semibold mb-2 text-primary-color font-playfair hover:text-blue-800 transition-colors duration-400">

                Order History
              </p>
              {/* Add your order history content here */}
            </div>

            <div className="w-1/2 rounded-lg p-4 my-2">
              {/* Log Out */}
              <p className="text-md font-semibold mb-2 text-primary-color font-playfair hover:text-blue-800  transition-colors duration-400">
                Log Out
              </p>
              {/* Add your log out content here */}
            </div>
          </div>
        </div>

        {/* Form */}


        {/* Image */}
        <div className="flex items-center flex-col justify-center md:w-1/2 bg-creamson glass m-10">
          <h2 className="flex items-center text-center lg:text-4xl font-bold text-primary-color font-jakarta pb-10">Personal Information</h2>
          <form onSubmit={handleSubmit} className="w-3/4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-2 font-semibold text-gray-500">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Enter your first name'
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color focus:border-b-4"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2 font-semibold text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder='Enter your last name'
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color focus:border-b-4"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-500">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder='sushilover@wasabi-bytes.com'
                name="email"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color focus:border-b-4"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-semibold text-gray-500">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder='236-XXX-XXXX'
                name="phone"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color focus:border-b-4"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2 font-semibold text-gray-500">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder='123 Downtown'
                name="address"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color focus:border-b-4"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="flex items-center px-10 py-3 text-white bg-primary-color rounded-full hover:bg-opacity-80 focus:outline-none justify-center"
              >
                Save
              </button>
              <button
                type="submit"
                className="flex items-center px-10 py-3 text-white bg-primary-color rounded-full border-black hover:bg-opacity-90 focus:outline-none justify-center"
              >

                Discard
              </button>
            </div>
          </form>
        </div>
      </div >
      <Footer />
    </>
  );
};

export default SignUpForm;
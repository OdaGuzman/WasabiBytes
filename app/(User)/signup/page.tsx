'use client'
import React, { useState } from 'react';
import Header from '../signup/Header';
import Footer from './Footer'
import Image from 'next/image';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row md:items-center h-screen">
        {/* Image */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <Image
            src="/assets/signup2.png"
            className="object-cover w-full h-full"
            alt="Image"
            width={600}
            height={600}
          />
        </div>

        {/* Form */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <h2 className="flex items-center text-center lg:text-4xl font-bold text-primary-color font-jakarta pb-10">Create your account</h2>
          <form onSubmit={handleSubmit} className="w-3/4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-2 font-semibold">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Enter your first name'
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2 font-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder='Enter your last name'
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder='Enter your email address'
                name="email"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">
                E-mail
              </label>
              <input
                type="phone"
                id="phone"
                placeholder='Enter your phone number'
                name="phone"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-color"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>


            <div className="flex justify-between items-center">
              <a
                href="#"
                aria-current="page"
                className="px-4 py-2 border-b text-white bg-primary-color rounded-full hover:bg-opacity-80"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="px-4 py-2 text-md font-medium border-t border-b text-white bg-primary-color rounded-full hover:bg-opacity-80"
              >
                Log In
              </a>
            </div>


            {/* <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                className="button flex flex-col items-center px-10 py-3 text-white bg-primary-color rounded-full hover:bg-opacity-80 focus:outline-none justify-center mb-4"
              >
                Sign Up
              </button>

              <button
                type="submit"
                className="button flex items-center px-10 py-3 text-white bg-primary-color rounded-full hover:bg-opacity-80 focus:outline-none justify-center"
              >
                Log in
              </button>
            </div> */}

          </form>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default SignUpForm;

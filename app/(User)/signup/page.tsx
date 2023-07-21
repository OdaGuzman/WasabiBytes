'use client'
import React, { useState } from 'react';
import Header from '../signup/Header';
import Image from 'next/image';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
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
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Hero Banner Image */}
        <div className="w-full h-screen mb-6 md:w-1/2 md:mx-auto">
          <Image
            src="/assets/signup2.png"
            className="object-cover w-full h-full"
            alt="Image"
            layout="fill"
          />
        </div>
      </div>

      {/* Form */}
      <h2 className="flex items-center text-center lg:text-4xl font-bold text-primary-color font-jakarta pb-10">Create your account</h2>
      <form onSubmit={handleSubmit} className="w-1/2">
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 font-semibold">
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

        {/* Add the rest of the form fields similarly */}
        <button
          type="submit"
          className="flex w-full px-4 py-2 text-white bg-primary-color rounded-full hover:bg-opacity-80 focus:outline-none"
        >
          Sign Up
        </button>
      </form>

    </>
  );
};

export default SignUpForm;

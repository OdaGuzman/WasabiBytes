'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform any necessary validation or submission logic
    setSubmitted(true);
  };

  return (
    <div className="subscription overflow-hidden p-16 flex-center flex-col bg-[url('../public/assets/subscribe\_bg.png')] bg-primary-color bg-center bg-no-repeat bg-contain" id="services">
      <h2 className="font-600 text-7xl leading-[123px] text-white text-center font-playfair">
        Get offers straight <br />
        to your inbox
      </h2>
      <p className="font-400 text-lg leading-9 text-white font-jakarta">
        {submitted ? 'Thank you for subscribing!' : 'Sign up for Wasabi Bytes newsletter'}
      </p>

      <div className="min-w-full md:min-w-0 md:w-[480px] gap-5 md:gap-2.5 border-none md:border md:border-solid mt-10 p-0 md:pl-4 md:pr-3.5 md:py-3.5 font-500 rounded-[20px] md:rounded-[46px] border-[rgba(255,255,255,0.5)]">
        <form className="flex flex-col md:flex-row justify-center md:justify-between items-baseline" onSubmit={handleSubmit}>
          {!submitted && (
            <>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleInputChange}
                  className="placeholder-white placeholder-opacity-50 min-h-[50px] min-w-full md:min-w-0 border border-solid border-[rgba(255,255,255,0.5)] md:border-none mb-2 px-5 py-2.5 md:p-2 flex-1 rounded-[30px] md:rounded outline-none opacity-50 bg-transparent font-jakarta text-white font-400 text-base"
                />
       
              <button
                type="submit"
                className="bg-secondary-color bg-opacity-80 font-jakarta text-white text-center opacity-100 text-sm rounded-full p-4 md:p-5 min-w-full md:min-w-[180px] md:text-base outline-none font-600"
              >
                Get Started
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-white font-jakarta">
      <div className="flex w-full flex-wrap justify-between overflow-hidden px-10 py-5">
        <h3 className="text-secondary-color text-2xl font-600 cursor-pointer">
          <span className="text-primary-color">WASABI    </span> B Y T E S
        </h3>

        <ul className="flex gap-24 list-none pt-2">
          <li><a href="#menu">M E N U</a></li>
          <li><a href="#about">A B O U T</a></li>
          <li><a href="#login">L O G I N</a></li>
        </ul>

        <ul className="gap-8 flex justify-center items-center">
          <li className="flex-center bg-black rounded-full h-8 w-8">
            <Image
              src="/assets/facebook.svg"
              alt="facebook"
              className="object-contain w-4 h-4"
              width={30}
              height={30}
            />
          </li>
          <li className="flex-center bg-black rounded-full h-8 w-8">
            <Image
              src="/assets/instagram.svg"
              alt="instagram"
              className="object-contain w-4 h-4"
              width={45}
              height={45}
            />
          </li>

          <li className="flex-center bg-black rounded-full h-8 w-8">
            <Image
              src="/assets/twitter.svg"
              alt="twitter"
              className="object-contain w-4 h-4"
              width={45}
              height={45}
            />
          </li>
        </ul>
      </div>
      <h2 className="flex justify-center items-center text-center text-l py-3">
        Seasoned by
        <span className="inline-block">
          <a
            href="https://www.linkedin.com/in/oda-guzman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-color font-500 ml-1 mr-1"
          >
            Oda
          </a>
        </span>
        with ❤️ 👩🏽‍🍳
      </h2>
    </div>
  );
};

export default Footer;

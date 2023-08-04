import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-primary-color font-jakarta">
      <div className="flex flex-col lg:flex-row w-full flex-wrap justify-between overflow-hidden px-10 py-5">
        <h3 className="text-secondary-color text-md lg:text-2xl font-600">
          <a href="/">
            <span className="text-white">WASABI    </span> B Y T E S
          </a>
        </h3>


        <h2 className="flex justify-center text-white items-center text-center text-l py-3">
          Seasoned by
          <span className="inline-block">
            <a
              href="https://www.linkedin.com/in/oda-guzman/"
              target="_blank"
              className=" text-blue-800 font-500 ml-1 mr-1"
            >
              Oda
            </a>
          </span>
          <span className="text-white">with ❤️ 👩🏽‍🍳 </span>
        </h2>
        <ul className="lg:gap-8 flex lg:justify-center items-center pt-4 lg:pt-0 w-full lg:w-auto justify-between ml-1 lg:ml-0 pr-4 lg:pr-0">
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

    </div >
  );
};

export default Footer;

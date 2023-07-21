import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex min-h-[720px] overflow-hidden flex-col lg:flex-row" id="about-us">
      <div className="flex-1 flex flex-col md:flex-row lg:flex-col justify-center relative bg-white">
        <div className="border-r-7 border-b-none border-solid border-r-creamson bg-[url('/assets/aboutbg1.png')] flex-1 flex items-center bg-center bg-no-repeat bg-contain p-8 sm:px-16 sm:py-8">
          <Image
            src="/assets/sushi-3.png"
            alt="sushi"
            width={225}
            height={200}
          />
        </div>

        <div className="flex items-center absolute min-h-[64px] text-white font-medium text-lg px-8 py-3 rounded-[32px_0_0_32px] border-0 right-0 bg-black outline-0 font-jakarta">
          私たちに関しては
          {/* <Image
            src="/assets/arrow-up-right.svg"
            className="object-contain ml-8"
            alt="learn more"
            width={142}
            height={40}
          /> */}
        </div>

        <div className="bg-[url('/assets/aboutbg2.png')]  flex-1 flex items-center bg-center bg-no-repeat bg-contain px-16 py-8">
          <Image
            src="/assets/sushi-2.png"
            alt="sushi"
            width={225}
            height={200} />
        </div>
      </div>

      <div className="flex-1 flex justify-center flex-col p-16">
        <p className="font-jakarta text-xl opacity-80 text-primary-color">About Us</p>
        <h3 className="mt-4 text-secondary-color text-[64px] font-playfair font-600">Our mission is to bring true Japanese flavours to you.</h3>
        <p className="font-jakarta text-lg leading-9 tracking-[-0.01em] opacity-80 mx-0 my-8 font-300">We will continue to provide the experience of Omotenashi, the Japanese mindset of
          hospitality, with our shopping and dining for our customers.
        </p>
      </div>
    </div>
  )
}

export default About
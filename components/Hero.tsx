import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex min-h-[calc(100vh_-_74px)] overflow-hidden">
      <div className="flex-1 flex flex-col relative z-[5]">
        <Image
          src="/assets/sushi-1.png"
          alt="sushi"
          className="max-w-[120%] h-full object-contain"
          width={692}
          height={893} />
        <h2 className="absolute font-bold text-[120px] leading-[138px] text-white p-5 bottom-0 font-playfair">
          日 <br />
          本 <br />
          食
        </h2>

        <div className="absolute w-full bg-primary-color z-[-1] inset-0"></div>
      </div>

      <div className="flex-[1.22] flex justify-between flex-col">
        <div className="p-8 mx-7">
          <h1 className="text-7xl font-600 leading-[99px] font-playfair my-8 pb-6">Feel the taste of Japanese food</h1>
          <p className="mx-0 my-8 font-jakarta pb-6">Embark on a tantalizing culinary journey without leaving the comfort of your home. Immerse yourself in the rich flavors and traditions of Japan as you savor the most popular and authentic Japanese cuisine.</p>

          <div className="flex flex-wrap justify-center gap-9 mr-0 mt-[41px] mb-0">
            <button className="min-w-[212px] text-white text-lg leading-[23px] p-5 rounded-[36px] border-[none] outline-none bg-black font-jakarta">Order Now</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 px-16 py-8 bg-white">
          <div className="flex-1 gap-2.5 flex-center">
            <h4 className="text-[62px] font-normal font-playfair">24<span>k+</span></h4>
            <p className='text-base font-normal text-secondary-color opacity-50 font-jakarta'>Happy Customers</p>
          </div>

          <div className="flex-1 flex items-center gap-2.5 min-w-[200px] pl-5 border-l-[rgba(2,2,2,0.1)] border-l border-solid">
            <Image
              src="/assets/herouser.png"
              alt="user"
              width={42}
              height={42}
              className="w-[42px] h-[42px] object-contain"
            />
            <p className="text-xs font-normal leading-8 text-secondary-color opacity-80 font-jakarta">Loved the ramen menu. Best quality in town.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import Image from 'next/image'
const Popular = () => {
  return (
    <div className="popular-foods flex flex-col bg-primary-color bg-[url('/assets/popular_bg.png')] bg-center bg-no-repeat bg-contain overflow-hidden p-16" id="menu">

      <h2 className="text-[56px] font-semibold leading-[78px] text-white text-center  font-playfair">Popular Dishes / 人気</h2>

      <div className="max-w-full overflow-x-auto flex justify-center gap-6 mt-12 hide-scrollbar ">
        <button className="flex flex-row items-center gap-2.5 border text-base font-[300px] leading-[25px] text-white rounded-[46px] border-solid border-[rgba(255,255,255,0.2)] hover:text-primary-color bg-opacity-5 bg-white font-jakarta justify-center px-5 active:bg-creamson hover:bg-creamson">
          <Image
            src="/assets/sushi-9.png"
            alt="sushi"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          Sushi
        </button>
        <button className="flex flex-row items-center gap-2.5 border text-base font-[300px] leading-[25px] text-white rounded-[46px] border-solid border-[rgba(255,255,255,0.2)] hover:text-primary-color bg-opacity-5 bg-white font-jakarta justify-center px-5 py-2 active:bg-creamson hover:bg-creamson">
          <Image
            src="/assets/sushi-8.png"
            alt="ramen"
            width={36}
            height={36}
            className="w-9 h-9 object-contain" />
          Ramen
        </button>
        <button className="flex flex-row items-center gap-2.5 border text-base font-[300px] leading-[25px] text-white rounded-[46px] border-solid border-[rgba(255,255,255,0.2)] hover:text-primary-color bg-opacity-5 bg-white font-jakarta justify-center px-5 active:bg-creamson hover:bg-creamson">
          <Image
            src="/assets/sake.png"
            alt="sake"
            width={36}
            height={36}
            className="w-9 h-9 object-contain" />
          Beverages
        </button>
        <button className="flex flex-row items-center gap-2.5 border text-base font-[300px] leading-[25px] text-white rounded-[46px] border-solid border-[rgba(255,255,255,0.2)] hover:text-primary-color bg-opacity-5 bg-white font-jakarta justify-center px-5 active:bg-creamson hover:bg-creamson ">
          <Image
            src="/assets/desserts.png"
            alt="desserts"
            width={36}
            height={36}
            className="w-9 h-9 object-contain" />
          Desserts
        </button>
      </div>

      <div className="flex justify-center items-end flex-wrap gap-14 mt-16 font-playfair">
        <article className="min-w-[260px] h-fit flex items-center flex-col border px-[38px] py-[28px] rounded-[36px] border-solid border-[rgba(255,255,255,0.2)] hover:bg-creamson  group group-hover:text-primary-color">

          <Image
            className="object-contain hover:scale-105 transform duration-300"
            src="/assets/sushicombo3.png"
            alt="sushi"
            width={214}
            height={133} />
          <h3 className="font-600 text-3xl leading-8 text-white text-center mt-[30px] group-hover:text-primary-color">Sushi Combo</h3>

          <div className="w-full mt-8 flex-between">
            <div className="flex items-center gap-2">
              <Image
                src="assets/star.svg"
                alt="star"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <p className="text-xl font-light text-white text-jakarta group-hover:text-primary-color" >4.8</p>
            </div>

            <p className="text-xl font-medium text-white text-jakarta  group-hover:text-primary-color">$14.00</p>
          </div>
        </article>

        <article className="min-w-[260px] h-fit flex items-center flex-col border px-[38px] py-[28px] rounded-[36px] border-solid border-[rgba(255,255,255,0.2)] hover:bg-creamson group group-hover:text-primary-color">

          <Image
            className="object-contain hover:scale-105 transform duration-300"
            src="/assets/ramen.png"
            alt="ramen"
            width={214}
            height={133} />
          <h3 className="font-600 text-3xl leading-8 text-white text-center mt-[30px] group-hover:text-primary-color">Kagoshima Ramen</h3>

          <div className="w-full mt-8 flex-between">
            <div className="flex items-center gap-2">
              <Image
                src="assets/star.svg"
                alt="star"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <p className="text-xl font-light text-white text-jakarta group-hover:text-primary-color" >4.9</p>
            </div>

            <p className="text-xl font-medium text-white text-jakarta group-hover:text-primary-color">$17.00</p>
          </div>
        </article>

        <article className="min-w-[260px] h-fit flex items-center flex-col border px-[38px] py-[28px] rounded-[36px] border-solid border-[rgba(255,255,255,0.2)] hover:bg-creamson  group group-hover:text-primary-color">

          <Image
            className="object-contain hover:scale-105 transform duration-300"
            src="/assets/beverage0.png"
            alt="sake"
            width={214}
            height={133} />
          <h3 className="font-600 text-3xl leading-8 text-white text-center mt-[30px] group-hover:text-primary-color">Sake</h3>

          <div className="w-full mt-8 flex-between">
            <div className="flex items-center gap-2">
              <Image
                src="assets/star.svg"
                alt="star"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <p className="text-xl font-light text-white text-jakarta group-hover:text-primary-color" >4.7</p>
            </div>

            <p className="text-xl font-medium text-white text-jakarta  group-hover:text-primary-color">$13.00</p>
          </div>
        </article>
      </div>

      <a href="/menu" className="w-fit font-medium text-lg leading-[23px] text-white cursor-pointer mt-20 mb-0 mx-auto px-[30px] py-5 rounded-[64px] border-[none] outline-none bg-secondary-color flex items-center">
        Explore Our Menu
        <Image
          src="assets/arrow-right.svg"
          alt="arrow-right"
          className="flex items-center w-3.5 h-3.5 object-contain ml-[21px]"
          width={14}
          height={14} />
      </a>
    </div>
  )
}

export default Popular
import React from 'react'
import Image from 'next/image'
const Trending = () => {
  return (
    <div className="relative flex flex-col overflow-hidden" id="food">
      <div className="w-full lg:min-h-[640px] flex flex-col lg:flex-row">
        <div className="flex-1 flex justify-center flex-col p-8 md:px-16 lg:py-8">
          <p className="text-lg font-normal text-primary-color opacity-80 tracking-[-0.01em] font-jakarta">What&apos;s Trending / トレンド</p>

          <h3 className="text-[64px] font-semibold text-secondary-color mt-4 font-playfair">Japanese Sushi
          </h3>
          <p className="sushi__description">Feel the taste of the most delicious Sushi here.
          </p>

          <ul className="flex-wrap gap-5 list-none flex-between">
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 bg-primary-color rounded-full flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Maki Sushi</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 bg-primary-color rounded-full flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p>Oshizushi</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 bg-primary-color rounded-full flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Uramaki Sushi</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 bg-primary-color rounded-full flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Nigiri Sushi</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 bg-primary-color rounded-full flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Temaki Sushi</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 bg-primary-color rounded-full flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Inari Sushi</p>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex flex-1 relative bg-white bg-no-repeat lg:bg-contain bg-center px-16 py-8 flex-center md:w-full lg:w-fit md:bg-cover">
          <Image
            src="/assets/sushi-5.png"
            alt="sushi-5"
            width={254}
            height={260} />

          <div className="hidden lg:block absolute z-1 left-[-2.5px] top-[12%]">
            <Image
              src="assets/arrow-vertical.svg" alt="arrow vertical"
              className="object-contain w-auto h-full"
              width={423}
              height={6}
            />
          </div>

          <div className="hidden lg:block absolute z-1 bottom-[-6.5px] right-[12%]">
            <Image
              src="assets/arrow-horizontal.svg" alt="arrow vertical"
              className="object-contain w-full h-auto"
              width={423}
              height={6}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex absolute z-[1] w-40 h-40 bg-secondary-color cursor-pointer justify-center items-center rounded-[100%] left-[44%] top-[44%]">
        <p className="text-lg font-500 font-jakarta uppercase text-white">Discover</p>
      </div>
      <div className="w-full lg:min-h-[640px] flex flex-col lg:flex-row">
        <div className="flex-1 relative bg-white bg-no-repeat bg-contain bg-center px-16 py-8 flex-center">
          <Image
            src="/assets/sushi-4.png"
            alt="sushi-a"
            width={254}
            height={260} />

          <div className="hidden lg:block absolute z-1 top-[-10.5px] left-[12%]">
            <Image
              src="assets/arrow-horizontal.svg" alt="arrow horizontal"
              className="object-contain w-auto h-full"
              width={423}
              height={6}
            />
          </div>

          <div className="hidden lg:block absolute z-1 right-[-2.5px] bottom-[12%]">
            <Image
              src="assets/arrow-vertical.svg" alt="arrow vertical"
              className="object-contain w-full h-auto"
              width={423}
              height={6}
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center flex-col p-8 lg:px-16 lg:py-8">
          <p className="text-lg font-normal text-primary-color opacity-80 tracking-[-0.01em] font-jakarta">What&apos;s Trending / トレンド</p>

          <h3 className="text-[64px] font-semibold text-secondary-color mt-4 font-playfair">Japanese Drinks
          </h3>
          <p className="sushi__description">Feel the taste of the most delicious Japanese drinks here.
          </p>

          <ul className="flex-wrap gap-5 list-none flex-between">
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className=" w-6 h-6 rounded-full bg-primary-color flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Oruncha</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 rounded-full bg-primary-color flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">
                Sakura Tea</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 rounded-full bg-primary-color flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Aojiru</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 rounded-full bg-primary-color flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Ofukucha</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 rounded-full bg-primary-color flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Kombu-cha</p>
            </li>
            <li className="flex-1 flex items-center flex-row gap-3 min-w-[210px]">
              <div className="w-6 h-6 rounded-full bg-primary-color flex-center">
                <Image
                  src="assets/check.svg"
                  alt="check"
                  className="object-contain"
                  width={12}
                  height={14} />
              </div>
              <p className="font-jakarta flex-1 text-base text-secondary-color font-500">Mugicha</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Trending
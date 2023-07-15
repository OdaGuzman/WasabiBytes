import React from 'react'
import Image from 'next/image'
const Popular = () => {
  return (
    <div className="popular-foods flex flex-col bg-primary-color bg-center bg-no-repeat bg-contain overflow-hidden p-16" id="menu">
      <h2 className="popular-foods__title" data-aos="flip-up">Popular Dishes / 人気</h2>

      <div className="popular-foods__filters sushi__hide-scrollbar">
        <button className="popular-foods__filter-btn active">
          All
        </button>
        <button className="popular-foods__filter-btn">
          <img
            src="/assets/sushi-9.png"
            alt="sushi-9" />
          Sushi
        </button>
        <button className="popular-foods__filter-btn">
          <img
            src="/assets/sushi-8.png"
            alt="sushi-8" />
          Ramen
        </button>
        <button className="popular-foods__filter-btn">
          <img
            src="/assets/sushi-7.png"
            alt="sushi-7" />
          Udon
        </button>
        <button className="popular-foods__filter-btn">
          <img
            src="/assets/sushi-6.png"
            alt="sushi-6" />
          Danggo
        </button>
      </div>

      <div className="popular-foods__catalogue" data-aos="fade-up">
        <article className="popular-foods__card">
          <img
            className="popular-foods__card-image" src="assets/sushi-12.png"
            alt="sushi-12" />
          <h4 className="popular-foods__card-title">Chezu Sushi</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img
                src="assets/star.svg"
                alt="star" />
              <p>4.9</p>
            </div>

            <p className="popular-foods__card-price">$21.00</p>
          </div>
        </article>

        <article className="popular-foods__card active-card">
          <img
            className="popular-foods__card-image" src="assets/sushi-11.png"
            alt="sushi-11" />
          <h4 className="popular-foods__card-title">Original Sushi</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img
                src="assets/star.svg"
                alt="star" />
              <p>5.0</p>
            </div>

            <p className="popular-foods__card-price">$19.00</p>
          </div>
        </article>

        <article className="popular-foods__card">
          <img
            className="popular-foods__card-image" src="assets/sushi-10.png"
            alt="sushi-10" />
          <h4 className="popular-foods__card-title">Ramen Legendo</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img
                src="assets/star.svg"
                alt="star" />
              <p>4.7</p>
            </div>

            <p className="popular-foods__card-price">$13.00</p>
          </div>
        </article>
      </div>

      <button className="popular-foods__btn">
        Explore Food
        <img
          src="assets/arrow-right.svg" alt="arrow-right" />
      </button>
    </div>
  )
}

export default Popular
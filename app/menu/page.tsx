import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// Define the prop types for the MenuItem component
interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
//bg-blue-500 hover:bg-blue-600 text-white font-bold  rounded mt-2
const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:justify-start text-center lg:text-left">
      {/* For website version */}
      <div className="lg:w-40 lg:h-40 lg:order-1">
        <img src={imageUrl} alt={name} className="w-full h-full" />
      </div>
      <div className="lg:order-2">
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-md md:text-sm py-4">{description}</p>
        <p className="font-bold text-primary-color text-md pb-2">${price}</p>
        <button className="text-white text-sm leading-[23px] px-4 py-2 mt-2 rounded-[36px] bg-black font-jakarta">
          Add to Cart
        </button>
      </div>
    </div>


  );
};
const Page = () => {
  return (
    <div>
      <Header />

      <h2 className="font-500 text-6xl leading-[123px] text-primary-color text-center font-playfair">Menu</h2>

      {/* Sushi Rolls Section*/}
      <div className="container mx-auto mt-8">
        <h3 className="text-4xl leading-[123px] text-secondary-color text-center font-playfair">
          Sushi Combos 🍱
        </h3>
        <div className="mx-5 lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:text-lg">
          <MenuItem
            name="Tokyo Sunset Roll"
            description="Delight yourself in the artful harmony of succulent salmon, tuna, sweet mango, and creamy avocado, all rolled in a tapestry of sushi rice and nori."
            price={12.49}
            imageUrl="/assets/sushicombo0.png"
          />
          <MenuItem
            name="Samurai Roll"
            description="This bold and hearty combo features a fusion of tender teriyaki chicken, savory beef bulgogi, and a sprinkle of fiery sriracha mayo, all wrapped in a warrior-worthy embrace of sushi rice and nori."
            price={12.99}
            imageUrl="/assets/sushicombo1.png"
          />
          <MenuItem
            name="Harmony Roll"
            description="This sushi symphony blends delicate flavors of buttery yellowtail, sweet eel, and velvety cream cheese, skillfully rolled in a harmonious medley of sushi rice and nori."
            price={14.99}
            imageUrl="/assets/sushicombo3.png"
          />
          <MenuItem
            name="Midnight Moon Roll"
            description="This combo showcases the brilliance of luscious tuna, creamy crab, and the mystery of black caviar, all nestled in a galaxy of sushi rice and nori."
            price={9.99}
            imageUrl="/assets/sushicombo4.png"
          />
        </div>
      </div>

      {/* Ramen Section*/}
      <div className="container">
        <h3 className="text-4xl mt-16 leading-[123px] text-secondary-color text-center font-playfair">
          Ramen 🍜
        </h3>
        <div className="mx-5 lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:text-lg">
          <MenuItem
            name="Protein Powerhouse"
            description=" Dive into a rich and aromatic broth infused with bold spices that tantalize your taste buds. Succulent shrimp and velvety tofu, with soft-boiled eggs. "
            price={24.99}
            imageUrl="/assets/ramen0.png"
          />
          <MenuItem
            name="Twin Delight"
            description="Our savory noodle soup features succulent shrimps, farm-fresh eggs, crunchy celery, and toothsome noodles, all simmered in a delectable broth."
            price={16.99}
            imageUrl="/assets/ramen1.png"
          />
          <MenuItem
            name="Hearty Bacon"
            description="Dive into a delightful noodle soup that marries soft-boiled eggs, colorful vegetables, crispy bacon, and tender noodles."
            price={18.99}
            imageUrl="/assets/ramen2.png"
          />
          <MenuItem
            name="Sunny Fusion"
            description="Taste the magic of a sunny-side-up egg perched gracefully on a bed of savory vegetables, mushrooms, and bacon, all mingling harmoniously with egg noodles."
            price={15.99}
            imageUrl="/assets/ramen3.png"
          />
        </div>
      </div>

      {/* Beverages Section*/}
      <div className="container">
        <h3 className="text-4xl mt-16 leading-[123px] text-secondary-color text-center font-playfair">
          Beverages 🍶
        </h3>
        <div className="mx-5 lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:text-lg">
          <MenuItem
            name="Sake Serenade"
            description="Crafted with utmost care and tradition, this Japanese rice wine exudes elegance and complexity. Savor its smooth and delicate notes."
            price={10.99}
            imageUrl="/assets/beverage0.png"
          />
          <MenuItem
            name="Berry Medley Black Tea"
            description="Delight in the symphony of flavors with our Berry Medley Black Tea. This vibrant blend infuses the boldness of black tea with the sweetness of luscious berries."
            price={12.99}
            imageUrl="/assets/beverage1.png"
          />
          <MenuItem
            name="Choco-Mocha Elixir"
            description="This exquisite blend offers the perfect balance of robust coffee flavor and velvety chocolate."
            price={12.99}
            imageUrl="/assets/beverage2.png"
          />
          <MenuItem
            name="Zen Garden Green Tea"
            description="This time-honored classic features the finest green tea leaves, artfully brewed to perfection."
            price={12.99}
            imageUrl="/assets/beverage3.png"
          />
        </div>
      </div>

      {/* Desserts Section*/}
      <div className="container">
        <h3 className="text-4xl mt-16 leading-[123px] text-secondary-color text-center font-playfair">
          Desserts 🍡
        </h3>
        <div className="mx-5 my-7 mb-10 lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:text-lg">
          <MenuItem
            name="Lime Lava Cake"
            description=" Experience a tangy twist on the classic lava cake! Our sumptuous dessert features a moist and decadent chocolate cake with a zesty lime surprise hidden within."
            price={10.99}
            imageUrl="/assets/desserts0.png"
          />
          <MenuItem
            name="Rainbow Mochi Bliss "
            description="Indulge in a burst of colors and flavors with our delightful assortment of colorful mochi! Each soft, chewy morsel is a work of art, enveloping various delectable fillings like fruity jams, velvety chocolate, and luscious cream."
            price={12.99}
            imageUrl="/assets/desserts1.png"
          />
          <MenuItem
            name="Bun Haven"
            description="Step into a world of sweetness with our delightful sweet buns! Soft and fluffy, these pillowy treats come in an array of delectable flavors, from velvety custard and fruity preserves to rich chocolate hazelnut."
            price={12.99}
            imageUrl="/assets/desserts2.png"
          />
          <MenuItem
            name="Choco Haven"
            description="Elevate your sweet bun experience with our luscious chocolate-covered delights! Sink your teeth into the heavenly combination of fluffy sweet buns smothered in rich, velvety chocolate."
            price={12.99}
            imageUrl="/assets/desserts5.png"
          />
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Page;

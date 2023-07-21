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
    <div className="flex flex-row lg:flex-col items-center">
      <img src={imageUrl} alt={name} className="w-40 h-40" />
      <h4 className="text-sm lg:text-xl font-bold">{name}</h4>
      <p>{description}</p>
      <p className="font-bold">${price}</p>
      <button className="text-white text-lg leading-[23px] px-4 py-2 mt-2 rounded-[36px] border-[none] outline-none bg-black font-jakarta
      ">
        Add to Cart
      </button>
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
        <h3 className="text-3xl leading-[123px] text-secondary-color text-center font-playfair">
          Sushi Rolls
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <MenuItem
            name="Sushi Roll 1"
            description="Delicious sushi roll with fresh ingredients."
            price={10.99}
            imageUrl="IMAGE_URL_FOR_SUSHI_ROLL_1"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
        </div>
      </div>

      {/* Ramen Section*/}
      <div className="container mx-auto mt-8">
        <h3 className="text-3xl leading-[123px] text-secondary-color text-center font-playfair">
          Ramen
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
        </div>
      </div>

      {/* Beverages Section*/}
      <div className="container mx-auto mt-8">
        <h3 className="text-3xl leading-[123px] text-secondary-color text-center font-playfair">
          Beverages
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="/assets/desserts.png"
          />
          {/* Add two more beverages */}
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default Page;

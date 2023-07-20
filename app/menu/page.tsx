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

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
  return (
    <div className="flex flex-col items-center">
      <img src="IMAGE_URL_HERE" alt={name} className="w-40 h-40" />
      <h4 className="text-xl font-bold">{name}</h4>
      <p>{description}</p>
      <p className="font-bold">${price}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded mt-2">
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
            imageUrl="../../public/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="../../public/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="../../public/assets/desserts.png"
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
            imageUrl="../../public/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="../../public/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="../../public/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="../../public/assets/desserts.png"
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
            imageUrl="../../public/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="../../public/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="../../public/assets/desserts.png"
          />
          <MenuItem
            name="Sushi Roll 2"
            description="Mouthwatering sushi roll with premium fish."
            price={12.99}
            imageUrl="../../public/assets/desserts.png"
          />
          {/* Add two more beverages */}
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default Page;

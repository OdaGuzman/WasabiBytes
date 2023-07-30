'use client'
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { gql, useQuery } from '@apollo/client'
import type { Item } from '@prisma/client'
// Define the prop types for the MenuItem component
interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}


const AllItemsByCategory = gql`
query itemsByCategory($category: String!) {
 itemsByCategory(category: $category) {
   id
   name
   description
   price
   imageSrc
 }
}
`;


const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:justify-start text-center lg:text-left">
      {/* For website version */}
      <div className="lg:w-40 lg:h-40 lg:mr-4 lg:order-1">
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
const Page = async () => {


  const { data: sushiData } = await useQuery(AllItemsByCategory, { variables: { category: 'Sushi' } });


  // const { data: ramenData} = await useQuery(AllItemsByCategory, { variables: { category: 'Ramen' } });




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
          {
            sushiData?.itemsByCategory.map((item: {
              name: string;
              description: string;
              price: number;
              imageSrc: string;
              id: number;
            }) =>
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageSrc}
              />
            )}


        </div>
      </div>


      {/* Ramen Section*/}
      <div className="container">
        <h3 className="text-4xl mt-16 leading-[123px] text-secondary-color text-center font-playfair">
          Ramen 🍜
        </h3>
        <div className="mx-5 lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:text-lg">
          TODO: THE SAME PERO CON “RAMEN”
        </div>
      </div>


      {/* Beverages Section*/}
      <div className="container">
        <h3 className="text-4xl mt-16 leading-[123px] text-secondary-color text-center font-playfair">
          Beverages 🍶
        </h3>
        <div className="mx-5 lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:text-lg">
          TODO: THE SAME PERO CON “Beverages”
        </div>
      </div>


      {/* Desserts Section*/}
      <div className="container">
        <h3 className="text-4xl mt-16 leading-[123px] text-secondary-color text-center font-playfair">
          Desserts 🍡
        </h3>
        <div className="mx-5 my-7 lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:text-lg">
          TODO: THE SAME PERO CON “DESSERTS”
        </div>
      </div>




      <Footer />
    </div>
  );
};


export default Page;



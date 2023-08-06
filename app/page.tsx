'use client'
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Subscribe from "../components/Subscribe"
import Trending from "../components/Trending";
import Loading from "../app/Loading"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page(){
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // Simulating an asynchronous task
  //   const delay = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 25000);

  //   return () => {
  //     clearTimeout(delay);
  //   };
  // }, []);

  if (isLoading) {
    return <Loading />;
  } else{
    return (
      <>
        <Header />
        <Hero />
        <About />
        <Popular />
        <Trending />
        <Subscribe />
        <Footer />
      </>
    )
  }
}
import React from 'react';
import Image from 'next/image';

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-color text-white">
      <h1 className="text-4xl font-bold mb-4">Loading...</h1>
      <Image
        src="/assets/loading.gif"
        alt="Sushi Chef"
        width={500}
        height={500}
      />
      <p className="text-xl mt-4">Please wait while we prepare your sushi!</p>
    </div>
  );
};

export default LoadingPage;

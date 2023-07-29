'use client'
import React from 'react';
import Link from 'next/link';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary-color text-white">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-xl">We apologize for the inconvenience.</p>
      <p className="text-lg mt-4">
        Please{' '}
        <Link href="/">
          <a className="underline">go back to the homepage</a>
        </Link>{' '}
        or try again later.
      </p>
    </div>
  );
};

export default ErrorPage;

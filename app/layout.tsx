'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apollo'


const inter = Inter({ subsets: ['latin'] })


// export const metadata = {
//   title: 'Wasabi Bytes',
//   description: 'Experience the essence of Japanese culinary excellence. Stack used: Next.js, Tailwind, TypeScript, JWT, Passport, MySQL. Seasoned by Oda Guzmán with ❤️.',
// }


export function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  )
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloClientProvider>
          {children}
        </ApolloClientProvider>
      </body>
    </html>
  )
}

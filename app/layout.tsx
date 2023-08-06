import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wasabi Bytes',
  description: 'Experience the essence of Japanese culinary excellence. Stack used: Next.js, Tailwind, TypeScript, JWT, Passport, MySQL. Seasoned by Oda Guzmán with ❤️.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

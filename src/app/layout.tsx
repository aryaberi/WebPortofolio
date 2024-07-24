import type { Metadata } from 'next'
import './globals.css'
import Navbar from "../app/component/navbar";
import Footer from './component/footer';



export const metadata: Metadata = {
  title: 'My Portofolio',
  description: '',
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`typhography-1`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

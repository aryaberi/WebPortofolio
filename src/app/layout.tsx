import type { Metadata } from 'next'
import './globals.css'
import Navbar from "../app/component/navbar";
import Footer from './component/footer';



export const metadata: Metadata = {
  metadataBase:  new URL(`${process.env.PUBLIC_URL}`),
  title: 'My Portofolio',
  description: 'this is my web Portofolio, authored by Arya Beri Argya Rasidi',
  keywords: 'Arya Beri Argya Rasidi, Web Portopolio, Web Developer',
  openGraph: {
    title: 'Home | My Portofolio',
    description: 'this is my web Portofolio, authored by Arya Beri Argya Rasidi',
    url: `${process.env.PUBLIC_URL}`,
    images: [
      {
        url: '/profilPicture.png',
        width: 1200,
        height: 630,
        alt: 'SEO Image for Home Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | My Portofolio',
    description: 'this is my web Portofolio, authored by Arya Beri Argya Rasidi',
    images: ['/profilPicture.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
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

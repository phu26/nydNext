import { Inter } from 'next/font/google'
import './globals.css'
import './vendor.css'
import './animate.js'
import Script from 'next/script'
import NavbarPage from './components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
         <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>
      <body className={inter.className}>
        <div className='h-24'> <NavbarPage/> </div>
        <div className='h-24'> {children} </div>
    
        </body>
    
    </html>
  )
}
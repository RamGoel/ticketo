"use client"
import Header from '@components/header/Header'
import '@styles/globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from '@redux/provider'
import { appName } from '@utils/strings'
const poppy = Poppins({ weight: "500", subsets: ['latin'] })


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link
        rel="icon"
        href="/lg (2).png"
      />
      <title>{appName}</title>
      <body className={poppy.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}



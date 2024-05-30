import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Nav from './auth/nav'
import QueryWrapper from './auth/queryWrapper'

const roboto = Roboto({
   subsets: ['latin'],
   weight: ["400","700"],
   variable: "--font-roboto",
  })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-gray-200`}>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  )
}
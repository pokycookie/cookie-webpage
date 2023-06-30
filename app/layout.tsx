import '@/styles/globals.scss'
import { Inter } from 'next/font/google'
import Header from './components/layout/header'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cookie',
  description: "Cookie's webpage",
}

interface ILayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: ILayout) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

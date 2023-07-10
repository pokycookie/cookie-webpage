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
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

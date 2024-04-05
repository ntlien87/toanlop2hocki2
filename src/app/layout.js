import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cung Nhau Hoc Toan',
  description: 'Đề thi toán lớp 2 kì 2',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-screen-lg min-h-screen bg-slate-100">
          <div className="px-4 py-8 md:px-8 w-full min-h-screen flex flex-col items-center ">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

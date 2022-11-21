import './globals.css'
import clsx from 'clsx'

import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import P9Window from '../components/P9Window'
import CC0Notice from '../components/CC0Notice'

import localFont from '@next/font/local'

const fontBPtypewrite = localFont({
  src: './fonts/BPtypewrite/BPtypewrite.woff',
  variable: '--font-bp-typewrite'
})

const fontBPtypewriteUnderscored = localFont({
  src: './fonts/BPtypewrite/BPtypewriteUnderscored.woff',
  variable: '--font-bp-typewrite-underscored'
})

const fontFT88 = localFont({
  src: './fonts/FT88/FT88-Regular.woff2',
  variable: '--font-ft88'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(
      'h-screen bg-art-11 bg-cover bg-fixed bg-center bg-no-repeat overflow-auto md:overflow-hidden',
      fontBPtypewriteUnderscored.variable,
      fontBPtypewrite.variable,
      fontFT88.variable
    )}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="grid gap-y-[10px] grid-rows-[minmax(0,auto)_minmax(0,1fr)_minmax(0,auto)] md:grid-rows-[10px_minmax(0,1fr)_10px] grid-cols-1 p-[10px] md:p-[20px] min-h-full md:h-full overflow-hidden">
        <header className="col-span-full max-w-full z-0 hover:z-20">
          <P9Window>
            <Navbar />
          </P9Window>
        </header>
        <main className="contents">
          {children}
        </main>
        <footer className="flex row-start-3 items-end col-span-full max-w-full z-0 hover:z-10">
          <P9Window style={{width: "332px"}} className="ml-auto">
            <CC0Notice />
          </P9Window>
        </footer>
      </body>
    </html>
  )
}

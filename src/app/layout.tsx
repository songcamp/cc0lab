// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import './globals.css'
import clsx from 'clsx'

import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
import P9Window from '@/components/P9Window'
import CC0Notice from '@/components/CC0Notice'

import localFont from 'next/font/local'
import { P9Frame } from '@/components/P9Frame'
import Link from 'next/link'

export { metadata } from './metadata'

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
      <body className={clsx(
        'p-[10px] h-full overflow-hidden',
        'grid gap-y-[10px] grid-rows-[10px_minmax(0,1fr)_10px] grid-cols-1',
        'md:p-[20px]'
      )}>
        <header className="col-span-full max-w-full z-0 hover:z-20">
          <div className="flex items-start justify-between">
            <P9Window>
              <Navbar />
            </P9Window>
            <P9Frame className="grid place-content-center aspect-square w-[30px] h-[30px]">
              <Link href="/about" className="font-display w-fit">?</Link>
            </P9Frame>
          </div>
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

import './globals.css'
import localFont from '@next/font/local'

const fontBPtypewrite = localFont({
  src: './fonts/BPtypewrite.woff',
  variable: '--font-bp-typewrite'
})

const fontFT88 = localFont({
  src: './fonts/FT88-Regular.woff2',
  variable: '--font-ft88'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontBPtypewrite.variable} ${fontFT88.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}

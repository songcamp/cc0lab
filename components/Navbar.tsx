// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="inline-flex flex-wrap justify-between p-1 font-display">
      <h1 className="text-[32px] leading-none pr-4 pb-4">
        <Link href="/">CC0lab</Link>
      </h1>
      
      <ol className="space-y-1 leading-none p-1 pr-4">
        <li><Link href="/about">about</Link></li>
        <li><Link href="https://rarible.com/cc0mixtape-common/items">cloaks</Link></li>
        <li><Link href="/mixtape">mixtape</Link></li>
      </ol>
    </nav>
  )
}

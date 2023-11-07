// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2023 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import P9Window from '@/components/P9Window'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <P9Window className="row-start-2 justify-self-center self-center max-h-full z-10">
      <div className="font-display text-[16px] p-[10px]">
        <h2>Page Not Found</h2>
        <Link className="braces" href="/">Return Home</Link>
      </div>
    </P9Window>
  )
}
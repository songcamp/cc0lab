// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import Link from 'next/link'
import P9Window from '../../components/P9Window'
import Providers from './providers'
import DropsMinter from '../../components/DropsMinter'
import DropsDescription from '../../components/DropsDescription'

export default function Page() {
  return (
    <div className="grid gap-[10px] md:gap-[20px] auto-cols-[minmax(0,auto)] auto-rows-[minmax(0,auto)] row-start-2 justify-self-center justify-items-center items-center h-full z-10 pointer-events-none">
      <Providers>
        <P9Window className="w-[480px] max-w-full max-h-full pointer-events-auto">
          <DropsMinter />            
        </P9Window>
        
        <P9Window className="w-full md:w-auto md:col-start-2 max-h-full pointer-events-auto">
          <div className="bg-green font-display text-[20px] p-[10px]">
            <p className="max-w-[20em]">We did it! Check out the <Link className="braces" href="remix">STEMS</Link> and join the <span className="font-displayUnderscored">remix cooperation</span>.
            </p>
          </div>
          <DropsDescription />
        </P9Window>
  
      </Providers>
    </div>
  )
}

// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import P9Window from '../../components/P9Window'
import LabelledValue from '../../components/LabelledValue'

export default function About() {
  return (
    <P9Window className="row-start-2 justify-self-center self-center max-h-full z-10">
      <div className="flex flex-col gap-[1.5em] font-display text-[16px] p-[10px] max-w-[40em] min-h-[26.667em]">
        <p>We are CC0lab – a group of musicians, devs, artists, and rabble-rousers focused on bringing open-source music to the Web3 multiverse. Born from the Headless Chaos project, we’re now aiming our Chaotic creative energy towards creating fully public domain musical works to be used by any and everyone in their web3 journeys.</p>
        <p>By minting one of our NFTs, you can become part of the CC0lab journey. Your support will allow us to continue creating new works, pushing forward the radical CC0 open-source ethos. But that’s just the beginning. We’re planning plenty of utility for the CC0lab NFTs, including eligibility to participate in future remix competitions and virtual CC0lab minicamps.</p>
        <ul className="inline-flex flex-wrap leading-[2] mt-auto">
          <span>Find us on:&nbsp;</span>
          <li><a className="braces" rel="noreferrer noopener" href="https://discord.gg/aWx4nmBPwN">Discord</a></li>
        </ul>
      </div>
    </P9Window>

  )
}

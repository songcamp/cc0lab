// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import P9Window from '@/components/P9Window'

import React from 'react';

type HoverLinkProps = {
  href: string;
  children: React.ReactNode;
}

function HoverLink({href, children}: HoverLinkProps) {
  return (
    <a 
      className="braces hover:bg-black hover:text-white"
      rel="noreferrer noopener"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}

export default function About() {
  return (
    <div className="row-start-2 justify-self-center self-center grid portrait:grid-rows-[minmax(0,1fr)_auto] landscape:grid-rows-1 landscape:grid-cols-[minmax(0,1fr)_auto] gap-[10px] max-h-full px-[5px] z-10">
      <P9Window>
        <div className="flex flex-col gap-[1.5em] font-display text-[14px] md:text-[16px] p-[10px] max-w-[40em] min-h-[26.667em]">
          <p>We are CC0lab – a group of musicians, devs, artists, and rabble-rousers focused on bringing open-source music to the Web3 multiverse. Born from the Headless Chaos project, we’re now aiming our Chaotic creative energy towards creating fully public domain musical works to be used by any and everyone in their web3 journeys.</p>
          <p>By minting one of our NFTs, you can become part of the CC0lab journey. Your support will allow us to continue creating new works, pushing forward the radical CC0 open-source ethos. But that’s just the beginning. We’re planning plenty of utility for the CC0lab NFTs, including eligibility to participate in future remix competitions and virtual CC0lab minicamps.</p>
        </div>
      </P9Window>
      <P9Window>
        <div className="font-display text-[14px] lg:text-[16px] p-[10px]">
          <ul className="flex landscape:flex-col flex-wrap leading-[2] space-x-1 mt-auto">
            <div><span className="font-displayUnderscored">Find us on</span>:</div>
            <li><HoverLink href="https://discord.gg/aWx4nmBPwN">Discord</HoverLink></li>
            <li><HoverLink href="https://twitter.com/CC0lab_">Twitter</HoverLink></li>
          </ul>
          <ul className="flex landscape:flex-col flex-wrap leading-[2] space-x-1 mt-auto">
            <div><span className="font-displayUnderscored">Mixtape</span>:</div>
            <li><HoverLink href="https://zora.co/collect/eth:0x72529ca1ca1be6657cfc9f9f12c614e2fbd8d761">Vol. 1</HoverLink></li>
            <li><HoverLink href="https://zora.co/collect/zora:0x392c21e1e46c24ec74dad3bb6bcc36198189ddc9/1">Vol. 1 Remix</HoverLink></li>
          </ul>
          <ul className="flex landscape:flex-col flex-wrap leading-[2] space-x-1 mt-auto">
            <div><span className="font-displayUnderscored">Stems</span>:</div>
            <li><HoverLink href="https://arweave.net/3cTE8Ga6z94d4gK8iODiFrAthLJuyzUFOeNflf6xELI">Vol. 1</HoverLink></li>
          </ul>
          <ul className="flex landscape:flex-col flex-wrap leading-[2] space-x-1 mt-auto">
            <div><span className="font-displayUnderscored">Collab</span>:</div>
            <li><HoverLink href="https://rarible.com/cc0mixtape-common/items">Cloaks</HoverLink></li>
          </ul>
        </div>
      </P9Window>
    </div>

  )
}

// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import { Metadata } from 'next'

const title = 'CC0lab'

const description = 'We are CC0lab—a group of musicians, devs, artists, and rabble-rousers bringing open-source music to the Web3 multiverse. Born from the Headless Chaos project, we’re now aiming our Chaotic creative energy towards creating fully public domain musical works to be used by any and everyone in their web3 journeys.'


export const metadata: Metadata = {
  title: title,
  description,
  openGraph: {
    type: 'website',
    url: '.',
    title,
    description,
    images: [{
      url: 'og.png',
      width: 1200,
      height: 630
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CC0lab_',
  },
}
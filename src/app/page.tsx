// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import { getTokens } from '@/lib/reservoir'
import { Mixtapes } from './mixtapes'

async function getMixtapeToken() {
  return (await getTokens({
    base: 'https://api.reservoir.tools',
    params: {
      tokens: ['0x72529ca1ca1be6657cfc9f9f12c614e2fbd8d761:1']
    },
  })).tokens?.[0].token
}

async function getRemixToken() {
  return (await getTokens({
    base: 'https://api-zora.reservoir.tools',
    params: {
      tokens: ['0x392c21e1e46c24ec74dad3bb6bcc36198189ddc9:1']
    },
  })).tokens?.[0].token
}

async function getData() {
  return Promise.all([
    getRemixToken(),
    getMixtapeToken()
  ])
}

type Tokens = Awaited<ReturnType<typeof getData>>

export default async function Home() {
  const data: Tokens = await getData()
  return <Mixtapes tokens={
    data.filter((x): x is NonNullable<typeof x> => x !== undefined)
  }/>
}
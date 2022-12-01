// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

'use client';

import {
  useAccount,
  useDisconnect
} from 'wagmi'

import Button from './Button'

export default function DisconnectButton() {
  const { isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  if (!isConnected) return null

  return (
    <Button className="bg-gray" onClick={() => disconnect()}>Disconnect</Button>
  )
}

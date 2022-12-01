// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

'use client';

import React from 'react'
import { ConnectButton as RkConnectButton } from '@rainbow-me/rainbowkit';

import Button from './Button'

export default function ConnectButton() {
  return (
    <RkConnectButton.Custom>
      {(props) => {
        const { account, chain, mounted, openAccountModal } = props
        const connected = mounted && account && chain
        if (!connected) return null
        return (
          <Button onClick={openAccountModal}>
            {account.displayName}
          </Button>
        )
      }}
    </RkConnectButton.Custom>
  )
}

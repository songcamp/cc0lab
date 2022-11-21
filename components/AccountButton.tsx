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

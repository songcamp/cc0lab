'use client';

import React from 'react'
import { ConnectButton as RkConnectButton } from '@rainbow-me/rainbowkit';

import Button from './Button'

// get RkConnectButton.Custom props
type RkConnectButtonRendererProps = React.ComponentProps<typeof RkConnectButton.Custom>

// make all props optional
export type ConnectButtonProps = {
  [Property in keyof RkConnectButtonRendererProps]?: RkConnectButtonRendererProps[Property]
}

export default function ConnectButton({children}: ConnectButtonProps) {
  return (
    <RkConnectButton.Custom>
      {(props) => {
        const { account, chain, mounted, openAccountModal, openChainModal, openConnectModal } = props
        const connected = mounted && account && chain
        if (!connected) {
          return <Button onClick={openConnectModal}>CC0nect</Button>
        }
        if (chain?.unsupported) {
          return <Button className="bg-red text-white" onClick={openChainModal}>Wrong Network</Button>
        }
        if (!children) {
          return <Button onClick={openAccountModal}>{account.displayName}</Button>
        }
        return <>{children(props)}</>
      }}
    </RkConnectButton.Custom>
  )
}

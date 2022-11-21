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

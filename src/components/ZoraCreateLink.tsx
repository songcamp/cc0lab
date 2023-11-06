// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import { useDropsContractProvider } from '@zora-drops-utils'

export type ZoraCreateLinkProps = {
  className?: string
  children?: React.ReactNode
}

export default function ZoraCreateLink({
  children = 'View on Zora Create', 
  ...props
}: ZoraCreateLinkProps) {
  const { collectionAddress, networkId } = useDropsContractProvider()
  return (
    <a
      {...props}
      rel="noreferrer noopener"
      href={`https://${
        networkId === '5' ? 'testnet.' : ''
      }create.zora.co/collections/${collectionAddress}`}>
      {children}
    </a>
  )
}

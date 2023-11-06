// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import { useDropsContractProvider } from '@zora-drops-utils'

export type FutureTapeLinkProps = {
  className?: string,
  children?: React.ReactNode,
}

export default function FutureTapeLink({
  children = 'Listen on Future Tape', 
  ...props
}: FutureTapeLinkProps) {
  const { collectionAddress, networkId } = useDropsContractProvider()
  
  if (networkId === '1') {
    const href = `https://futuretape.xyz/token/${collectionAddress}`
    return (
      <a {...props} rel="noreferrer noopener" href={href}>{children}</a>
    )
  }

  return <></>
}

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

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

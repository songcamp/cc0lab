export type PresentMaterialLinkProps = {
  className?: string,
  children?: React.ReactNode,
}

export default function PresentMaterialLink({
  children = 'View on Present Material Record Store', 
  ...props
}: PresentMaterialLinkProps) {
  const href = `https://presentmaterial.xyz`
  return (
    <a {...props} rel="noreferrer noopener" href={href}>{children}</a>
  )
}


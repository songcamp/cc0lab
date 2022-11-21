export type SpinampLinkProps = {
  className?: string,
  children?: React.ReactNode,
  slug: string,
}

export default function SpinampLink({
  children = 'Listen on Spinamp',
  slug,
  ...props
}: SpinampLinkProps) {
  const href = `https://app.spinamp.xyz/track/${slug}`
  return (
    <a {...props} rel="noreferrer noopener" href={href}>{children}</a>
  )
}


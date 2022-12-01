// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

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


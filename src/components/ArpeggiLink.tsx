// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

export type ArpeggiLinkProps = {
  className?: string,
  children?: React.ReactNode,
  slug: string,
}

export default function ArpeggiLink({
  children = 'Remix on Arpeggi',
  slug,
  ...props
}: ArpeggiLinkProps) {
  const href = `https://arpeggi.io/profile/${slug}`
  return (
    <a {...props} rel="noreferrer noopener" href={href}>{children}</a>
  )
}


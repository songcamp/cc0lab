// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

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


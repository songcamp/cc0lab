// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2023 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import clsx from 'clsx'

export type P9FrameProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode,
  className?: string,
}

export function P9Frame({
  children,
  className,
}: P9FrameProps) {
  return (
    <div className={clsx('border-4 border-black p-px bg-white box-border', className)}>
        {children}
    </div>
  )
}

// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import clsx from 'clsx'
import P9Scrollbar from './P9Scrollbar'

export type P9WindowProps = {
  children: React.ReactNode,
  className?: string,
  style?: any,
  showScrollbar?: boolean
}

export default function P9Window({
  children,
  className,
  showScrollbar,
  style={}
}: P9WindowProps) {
  return (
    <div className={clsx('inline-flex border-4 border-black p-px bg-white box-border max-w-full', className)}
         style={style}>
      {showScrollbar && <P9Scrollbar />}
      <div className="grow overflow-auto">
        {children}
      </div>
    </div>
  )
}

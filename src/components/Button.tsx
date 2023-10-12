// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import clsx from 'clsx'

export type ButtonProps = React.ComponentPropsWithoutRef<"button">

const baseClasses = [
]

export default function Button({className, ...props}: ButtonProps) {
  return <button className={clsx('btn', className)} {...props} />
}

import React, { useId } from 'react'

import clsx from 'clsx'

export type LabelledValueProps = {
  children: [React.ReactElement, React.ReactElement]
} & React.ComponentPropsWithoutRef<'div'>

export default function LabelledValue({children, ...props}: LabelledValueProps) {
  const [label, value] = children
  const labelId = useId()
  return (
    <div {...props}>
      <div id={labelId}>{label}</div>
      <div aria-labelledby={labelId}>{value}</div>
    </div>
  )
}

export function FlatLabelledValue({className, children, ...props}: LabelledValueProps) {
  const [label, value] = children
  return (
    <LabelledValue className={clsx(className, "flex gap-[10px] justify-between font-display text-[16px] leading-none")} {...props}>
      <div className="font-body text-[10px]">{label}</div>
      <div className="font-display text-[20px]">{value}</div>
    </LabelledValue>
  )
}

export function StackedLabelledValue({className, children, ...props}: LabelledValueProps) {
  const [label, value] = children
  return (
    <LabelledValue className={clsx(className, "flex flex-col gap-[10px] leading-none")} {...props}>
      <div className="font-body text-[10px]">{label}</div>
      <div className="font-display text-[20px]">{value}</div>
    </LabelledValue>
  )
}

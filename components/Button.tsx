import clsx from 'clsx'

export type ButtonProps = React.ComponentPropsWithoutRef<"button">

const baseClasses = [
]

export default function Button({className, ...props}: ButtonProps) {
  return <button className={clsx('btn', className)} {...props} />
}

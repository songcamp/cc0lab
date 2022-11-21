'use client'

import React, { useRef } from 'react'

import { useDropsContractProvider } from '@zora-drops-utils'

export default function MintQuantity({ ...props }) {
  const { mintQuantity, purchaseLimit, balance, setMintQuantity, saleStatus } = useDropsContractProvider()
  const inputRef = useRef(null)

  const minValue = 1
  const maxValue = React.useMemo(() => {
    try {
      let max = purchaseLimit?.maxAmount ?? 0
      if (balance?.walletLimit && balance?.walletBalance) {
        max = Math.max(0, max - balance?.walletBalance)
      }
      return max
    } catch (err) {
      console.error(err)
      return minValue
    }
  }, [purchaseLimit, purchaseLimit?.maxAmount, balance, balance?.walletBalance])

  const updateMintQuantity = (value: number) => {
    const input = inputRef?.current
    if (input) {
      Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set?.call(input, value)
      window.HTMLInputElement.prototype.dispatchEvent.call(input, new Event('change', {bubbles: true}))
    }
  }
  
  const inc = React.useCallback(() => {
    const oldVal = mintQuantity?.queryValue ?? 1
    const newVal = Math.min(maxValue, oldVal + 1)

    updateMintQuantity(newVal)
  }, [
    maxValue,
    inputRef,
    mintQuantity,
    mintQuantity?.queryValue,
  ])

  const dec = React.useCallback(() => {
    updateMintQuantity(
      Math.max(
        minValue, 
        (mintQuantity?.queryValue ?? 1) - 1
      )
    )
  }, [
    minValue,
    inputRef,
    mintQuantity,
    mintQuantity?.queryValue,
  ])

  const handleChange = function (evt: any) {
    const target = evt.target
    // ensure valid input value
    if (target.value === '') {
      // allow balnk
    } else if (!target.validity.valid || target.value < minValue) {
      target.value = minValue
    } else if (target.value > maxValue) {
      // target.value = maxValue
    }

    // trigger state update
    setMintQuantity?.(evt)
  }

  // N.B. No hooks below this line :p
  if (saleStatus?.isSoldOut || saleStatus?.saleIsFinished) return null

  return (
    <div {...props}>
      <input 
        ref={inputRef}
        type="text"
        inputMode="numeric"
        pattern="\d*"
        name="mint-quantity"
        size={3}
        value={mintQuantity?.name}
        onChange={handleChange}
        className="px-[4px] focus:outline focus:outline-1 focus:outline-black"
      />
      &nbsp;
      <span className="inline-block">
        <button className="hover:bg-checkered hover:pixelated active:opacity-0" onClick={inc}>[+]</button>
        <button className="hover:bg-checkered hover:pixelated active:opacity-0" onClick={dec}>[-]</button>
      </span>
    </div>
  )
}

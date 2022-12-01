// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

'use client';

import React from 'react'
import { DropsComponents } from '@zora-drops-utils'

// import AccountButton from './AccountButton'
import ConnectButton from './ConnectButton'
import DisconnectButton from './DisconnectButton'
import ZoraCreateLink from './ZoraCreateLink'
import PresentMaterialLink from './PresentMaterialLink'
import FutureTapeLink from './FutureTapeLink'
import SpinampLink from './SpinampLink'
import MintButton from './MintButton'
import MintQuantity from './MintQuantity'
import LabelledValue, { StackedLabelledValue } from './LabelledValue'

const {
  MetadataCreator,
  MetadataName,
  TotalPrice,
  Thumbnail,
  TxFeedback,
  AudioRenderer,
} = DropsComponents

export function DropsMinterMedia() {
  return (
    <div className="p-[40px] bg-black">
      <div className="relative">
        <Thumbnail />
        <AudioRenderer className="absolute bottom-0 w-full" controls />
      </div>
    </div>
  )
}

export function DropsLinks() {
  return (
    <div className="flex flex-wrap gap-[10px] font-body text-[10px] leading-[2]">
      <LabelledValue className="flex flex-wrap grow">
        <div>Listen on:&nbsp;</div>
        <div className="flex flex-wrap">
          <div><FutureTapeLink className="underline">Future Tape</FutureTapeLink>,&nbsp;</div>
          <SpinampLink className="underline" slug="cc0lab-mixtape-vol-1-1669670795000">Spinamp</SpinampLink>
        </div>
      </LabelledValue>
      <LabelledValue className="flex flex-wrap grow">
        <div>Mint on:&nbsp;</div>
        <div className="flex flex-wrap">
          <div><ZoraCreateLink className="underline">Zora</ZoraCreateLink>,&nbsp;</div>
          <PresentMaterialLink className="underline">PM</PresentMaterialLink>
        </div>
      </LabelledValue>
    </div>
  )
}

export function DropsMinterUI() {
  return (
    <div className="flex flex-col gap-[40px] p-[40px] font-display leading-none">
      <div className="font-displayUnderscored text-[24px]">
        <MetadataName label="" />
      </div>
      <div  className="flex flex-col gap-[20px]">
        <StackedLabelledValue>
          <>{'Created by:'}</>
          <MetadataCreator label=""/>
        </StackedLabelledValue>
        <div className="flex gap-[20px]">
          <StackedLabelledValue className="flex-1">
            <>{'Price:'}</>
            <TotalPrice label=""/>
          </StackedLabelledValue>
          <StackedLabelledValue className="flex-1">
            <>{'Quantity:'}</>
            <MintQuantity />
          </StackedLabelledValue>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <ConnectButton>
         {() => {
          return (
            <>
              <MintButton />
              {/* <AccountButton /> */}
              <DisconnectButton />
            </>
          )}}
        </ConnectButton>
        <TxFeedback className="font-body text-[10px]" />
      </div>
      <DropsLinks />
    </div>
  )
}

export default function DropsMinter() {
  return (
    <>
      <DropsMinterMedia />
      <DropsMinterUI />
    </>
  )
}

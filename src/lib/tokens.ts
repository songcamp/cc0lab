// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2023 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import { Token } from "@/lib/reservoir";

export function tokenExternalHref(token: Token) {
  switch(token.chainId) {
    case 1:
      return `https://zora.co/collect/eth:${token.contract}/${token.tokenId}`;
    case 7777777:
      return `https://zora.co/collect/zora:${token.contract}/${token.tokenId}`;
    default:
      console.log(`unsupported chainId: ${token.chainId}`);
      return '#';
  }
}

export function tokenExplorerHref(token: Token) {
  switch(token.chainId) {
    case 1:
      return `https://etherscan.io/address/${token.contract}`;
    case 7777777:
      return `https://explorer.zora.energy/address/${token.contract}`;
    default:
      console.log(`unsupported chainId: ${token.chainId}`);
      return '#';
  }
}
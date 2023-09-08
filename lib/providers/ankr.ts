// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

// import type { Chain } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

export function ankrPublicProvider(config: any) {
  return jsonRpcProvider({
    ...config,
    rpc: (chain) => {
      let endpoint: string | null;
      switch (chain.id) {
        case mainnet.id:
          endpoint = 'https://rpc.ankr.com/eth'
          break
        case sepolia.id:
          endpoint = 'https://rpc.ankr.com/eth_sepolia'
          break
        default:
          console.log(`Unsupported RPC Chain.id: ${chain.id}`)
          endpoint = null
      }
      return endpoint ? { http: endpoint } : null
    }
  })
}
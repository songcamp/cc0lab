// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

'use client';
import React from 'react';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import {
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import { mainnet } from 'wagmi/chains'

// import { ankrPublicProvider } from '../../lib/providers/ankr';
import { publicProvider } from 'wagmi/providers/public';

import { SWRConfig } from 'swr'
import { DropsContractProvider } from '@zora-drops-utils'
// import { NFTFetchConfiguration } from '@zoralabs/nft-hooks'
// import { ZDKFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies'

const { chains, provider } = configureChains(
  [mainnet],
  [
    // ankrPublicProvider({ priority: 0 }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'CC0LAB',
  projectId: 'f5ade014dfc2ffe87c4cc047598d4c5a',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}>
          <DropsContractProvider
            collectionAddress="0x72529ca1ca1be6657cfc9f9f12c614e2fbd8d761"
            networkId="1">
            {children}
          </DropsContractProvider>
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

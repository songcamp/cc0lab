import {
  chain,
  Chain,
} from 'wagmi';

import type { JsonRpcProviderConfig } from '@wagmi/core/providers/jsonRpc';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const ankrPublicRpcEndpoint = (rpcChain: Chain): string | null => {
  switch (rpcChain.id) {
    case chain.mainnet.id:
      return 'https://rpc.ankr.com/eth';
    case chain.goerli.id:
      return 'https://rpc.ankr.com/eth_goerli';
    default:
      return null;
  }
}

export function ankrPublicRpc(rpcChain: Chain) {
  const endpoint = ankrPublicRpcEndpoint(rpcChain);
  if (endpoint) {
    return { http: endpoint };
  } else {
    console.log(`Unsupported RPC Chain.id: ${rpcChain.id}`);
    return null;
  }
};

// remove "rpc" field from base type
export type AnkrPublicProviderConfig = {
  [Property in keyof JsonRpcProviderConfig as Exclude<Property, "rpc">]: JsonRpcProviderConfig[Property]
};

export function ankrPublicProvider(config: AnkrPublicProviderConfig){
  return jsonRpcProvider({
    ...config,
    rpc: ankrPublicRpc
  });
}

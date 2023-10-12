// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2023 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import { cache } from 'react'
import 'server-only'

import { z } from 'zod'
import { paths as Paths } from "@reservoir0x/reservoir-sdk"

export type ApiBaseUrl = 
  | "https://api.reservoir.tools"
  | "https://api-zora.reservoir.tools"

type HttpMethod<P extends keyof Paths> = Extract<keyof Paths[P], string>;

type QueryParameters<P extends keyof Paths, M extends HttpMethod<P>> =
  Paths[P][M] extends { parameters: { query: infer Q } } ? Q : never;

type ResponseSchema<P extends keyof Paths, M extends HttpMethod<P>> =
  Paths[P][M] extends { responses: { '200': { schema: infer S } } } ? S : never;


const apiKey = z.string().parse(process.env.RESERVOIR_API_KEY)
const defaultHeaders = {
  'x-api-key': apiKey
} as const

type Fetch = typeof fetch
type FetchProps = Parameters<Fetch>[1]

export const apiRequest = cache(async <
  Path extends keyof Paths,
  Method extends HttpMethod<Path>
>({
  url: {
    base,
    path,
  },
  method,
  params,
  ...props
}: {
  url: {
    base: ApiBaseUrl,
    path: Path,
  },
  method: Method,
  params: QueryParameters<Path, Method>,
  props?: FetchProps
}): Promise<ResponseSchema<Path, Method>> => {
  const url = new URL(`${base}${path}`)
  url.search = new URLSearchParams(params as Record<string, string>).toString();
  
  const res = await fetch(url.toString(), {
    method,
    headers: defaultHeaders,
    cache: 'force-cache',
    ...props
  })

  const data = (await res.json())

  return data
})

export type TokenResults = NonNullable<ResponseSchema<'/tokens/v6', 'get'>['tokens']>
export type TokenResult = NonNullable<TokenResults[number]>;
export type Token = NonNullable<TokenResult['token']>

export function getTokens({
  base,
  params,
  ...props
}: {
  base: ApiBaseUrl,
  params: QueryParameters<'/tokens/v6', 'get'>,
  props?: FetchProps,
}) {
  return apiRequest({
    url: {
      base, 
      path: '/tokens/v6'
    }, 
    method: 'get', 
    params: params,
    ...props
  })
}

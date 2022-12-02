// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV
const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL

const _host = (
  VERCEL_ENV === 'production' ? 'cc0lab.songcamp.band' :
  VERCEL_URL || 'localhost:3000'
)

const _baseUrl = `https://${_host}`

const _title = 'CC0lab'

const _url = _baseUrl

const _description = 'We are CC0lab—a group of musicians, devs, artists, and rabble-rousers bringing open-source music to the Web3 multiverse. Born from the Headless Chaos project, we’re now aiming our Chaotic creative energy towards creating fully public domain musical works to be used by any and everyone in their web3 journeys.'

const _image = {
  url: `${_baseUrl}/og.png`,
  width: 1200,
  height: 630
}

export type ImageProps = {
  url: string,
  width?: number,
  height?: number,
}

export type SocialProps = {
  title?: string,
  description?: string,
  image?: ImageProps
}

export type TwitterProps = SocialProps & {
  card?: string,
  site?: string,
}
export type OpenGraphProps = SocialProps & {
  type?: string,
  url?: string,
}

export type HeadProps = SocialProps & {
  url?: string,
  og?: OpenGraphProps,
  twitter?: TwitterProps,
  favicon?: ImageProps
}

export default function Head({
  url = _url,
  title = _title,
  description = _description,
  image = _image,
  og = {
    type: 'website',
    url,
    title,
    description,
    image,
  },
  twitter = {
    card: 'summary_large_image',
    site: '@songcamp_',
    title,
    description,
    image,
  },
  favicon = {
    url: '/favicon.png',
    }
}: HeadProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      {og.image && (
        <>
          <meta property="og:image" content={og.image.url} />
          <meta property="og:image:width" content={og.image.width?.toString()} />
          <meta property="og:image:height" content={og.image.height?.toString()} />
        </>
      )}
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:site" content={twitter.site} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      {twitter.image && ( 
        <meta name="twitter:image" content={twitter.image.url} />
      )}
      <link rel="icon" href={favicon.url} />
    </>
  )
}

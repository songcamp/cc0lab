'use client';

import {useEffect} from 'react'
import Script from 'next/script'
import {iframeResizer} from 'iframe-resizer'

export default function IFrame() {
  // 
  useEffect(()=> {
    iframeResizer({ heightCalculationMethod: 'taggedElement' }, '#embed')
  }, [])

  return (
  <>
    <div className="overflow-hidden w-[320px] max-w-full bg-[black]">
    <iframe id="embed" width="100%" className="min-w-full"
    frameBorder="0"
    src="https://testnet.create.zora.co/editions/0xd487eb837c6e4e3b9a08e62e38fabcfae1d3c101/frame?padding=20px&showDetails=true&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23ffffff%22%2C%22accent%22%3A%22%2373dfc7%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23000000%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showPresale=true&showMedia=true&showCollectors=false" />
    </div>
  </>
  )
}

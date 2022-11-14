const namespaces = {
  "xmlns:dct": "http://purl.org/dc/terms/",
  "xmlns:vcard": "http://www.w3.org/2001/vcard-rdf/3.0#"
}

export default function CC0Notice() {
  return (
    <div className="inline-flex p-2 font-body text-[10px] leading-none">
      <p {...namespaces}>
        <a rel="license" href="http://creativecommons.org/publicdomain/zero/1.0/">
          <img src="/CC0Button.svg" alt="CC0" className="pb-2" />
        </a>
        To the extent possible under law,{' '}
        <a rel="dct:publisher" href="https://cc0lab.songcamp.band" className="braces">
          <span property="dct:title">CC0lab</span>
        </a>{' '}
        has waived all copyright and related or neighboring rights to <span property="dct:title">the CC0lab website</span>.
        This work is published from:{' '}
        <span
          property="vcard:Country"
          datatype="dct:ISO3166"
          // @ts-ignore
          content="US" 
          about="https://cc0lab.songcamp.band">
          United States
        </span>.
      </p>
    </div>
  )
}


const namespaces = {
  "xmlns:dct": "http://purl.org/dc/terms/",
  "xmlns:vcard": "http://www.w3.org/2001/vcard-rdf/3.0#"
}

export default function CC0Notice() {
  return (
    <div className="inline-flex p-2 font-body text-[10px] leading-[12px]">
      <p {...namespaces}>
        <a 
          className="float-left pr-[10px] pb-[5px]"
          rel="license noreferrer noopener"
          href="http://creativecommons.org/publicdomain/zero/1.0/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/CC0Button.svg" alt="CC0" />
        </a>
        To the extent possible under law,{' '}
        <a
          rel="dct:publisher noreferrer noopener"
          href="https://cc0lab.songcamp.band"
          className="braces">
          <span property="dct:title">CC0lab</span>
        </a>{' '}
        has waived all copyright and related or neighboring rights to{' '}
        <a
          rel="dct:source noreferrer noopener"
          href="https://github.com/songcamp/cc0lab"
          className="braces">
          <span property="dct:title">the CC0lab website</span>
        </a>.
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


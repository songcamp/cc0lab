// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import P9Window from '../../components/P9Window'
import ArpeggiLink from '../../components/ArpeggiLink'

export default function Page() {
  return (
     <P9Window className="row-start-2 justify-self-center self-center max-h-full z-10">
      <div className="flex flex-col gap-[1.5em] font-display text-[16px] p-[10px] max-w-[40em] min-h-[26.667em]">
      <h3 className="font-displayUnderscored text-[24px]">Mixtape Vol. 1 Remix Cooperation</h3>
      <p>We have made the stems from all songs publicly available for downloading right here! Check them out and join the remix cooperation.</p>
      <h4 className="font-display text-[20px]">How to COOP:</h4>
      <p>Use these stems to make a remix, submit before Feb 24th and the CC0 crew will pick their favorites to publish on Songcamp's record store: Present Materials (with permission from the remix makers).</p>
      <h4 className="font-display text-[20px]">Get the STEMS:</h4>
      <ul>
        <li>Download <a className="braces" rel="noreferrer noopener" href="https://arweave.net/ZlBOLKz_rIsrGx93PrfN_zfw4RFMe4HantbdLAZ4psI">DIRECT</a> from Arweave.</li>
        <li>Remix <ArpeggiLink className="braces" slug="0x8815C5Cf745a8fCdFE134dA299cBF6f3012E2674/sounds">CC0lab</ArpeggiLink> on Arpeggi.</li>
      </ul> 
      </div>
    </P9Window>
  )
}

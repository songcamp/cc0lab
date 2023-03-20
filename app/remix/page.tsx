// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2022 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import P9Window from '../../components/P9Window'
import ArpeggiLink from '../../components/ArpeggiLink'
import PresentMaterialLink from '../../components/PresentMaterialLink'

export default function Page() {
  return (
     <P9Window className="row-start-2 justify-self-center self-center max-h-full z-10">
      <div className="flex flex-col gap-[1.5em] font-display text-[16px] p-[10px] max-w-[40em] min-h-[26.667em]">
      <h3 className="font-displayUnderscored text-[24px]">Mixtape Vol. 1 Remix Cooperation</h3>
      <p>We've officially launched a remix cooperation! Read the full announcement on <a className="braces" rel="noreferrer noopener" href="https://songcamp.mirror.xyz/c2Y6ABdmdAeayp1Q-Mh4Oom6pJlZ_fGBid4pbrvKpfI">Mirror</a> and join here.</p>
      <h4 className="font-display text-[20px]">How to COOP:</h4>
      <ol className="list-inside list-decimal">
      <li><span className="font-displayUnderscored">Get the stems</span> <a className="braces" rel="noreferrer noopener" href="https://arweave.net/noOR4bqVTVEkgfG_7Fy8stCvuTbrJkKnSYpgKQqmLA0">HERE</a> or remix <ArpeggiLink className="braces" slug="0x8815C5Cf745a8fCdFE134dA299cBF6f3012E2674/sounds">CC0lab</ArpeggiLink> on Apreggi.</li>
      <li><span className="font-displayUnderscored">Submit your remixes</span> <a className="braces" rel="noreferrer noopener" href="https://docs.google.com/forms/d/e/1FAIpQLSe6LDfIBcU2eoREhQ5MR-10CbeXkV6YHteNxtHeLsZLaiEB1g/viewform">HERE</a> by April 1st.</li>
      </ol>
      <p>The CC0 crew will mint selected remixes and publish them on <PresentMaterialLink className="braces">Present Material</PresentMaterialLink> with a 70/30 split between you and the CC0lab artists.</p>
      </div>
    </P9Window>
  )
}

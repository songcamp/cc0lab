import P9Window from '../../components/P9Window'
import IFrame from './iframe'

export default function About() {
  return (
    <div className="grid gap-[10px] md:gap-[20px] auto-cols-[minmax(0,auto)] auto-rows-[minmax(0,auto)] row-start-2 justify-self-center justify-items-center items-center h-full z-10">
      <P9Window className="w-max max-w-full max-h-full">
        <IFrame />
      </P9Window>
      <P9Window className="w-full sm:w-auto sm:col-start-2 max-h-full">
        <div className="font-display text-[12px] p-[10px] max-w-[40em] min-h-[26.667em]">
          <p>By minting one of our NFTs, you can become part of the CC0lab journey. Once &lt;50&gt; are minted, we will unlock the stems to each song in the mixtape, kicking off a remix competition.</p>
          <br />
          <span className="underline">Tracklist:</span>
          <ol>
            <li>(00:00) 01 - Infinite Canvas - Conor Dalton, Dontmesswithjuan</li>
            <li>(03:35) 02 - One More Season - anatu, Greydient, Dilip</li>
            <li>(04:53) 03 - Keep Me Quiet - Iara Bloomz, L.Ariel</li>
            <li>(07:17) 04 - Fall Over You - Pozibelle, Dontmesswithjuan, L.Ariel</li>
            <li>(10:13) 05 - alliwannado - anatu, TylerXCordy, Jonn Hart</li>
            <li>(12:16) 06 - Erix - Dontmesswithjuan, Shamanic, Michael Onabolu</li>
            <li>(15:30) 07 - Work - Dontmesswithjuan, Jenn Morel</li>
            <li>(16:52) 08 - Balance Beam - Pozibelle, Jackintheway, James Gardin</li>
            <li>(19:10) 09 - Titan On the Run - Rex Kalibur, Dontmesswithjuan</li>
            <li>(21:32) 10 - Rainfall - Oceantied, Shamanic</li>
            <li>(23:45) 11 - Grudge - Levi, L.Ariel, Shamanic, Dontmesswithjuan</li>
            <li>(26:20) 12 - Jenny Lee - L.Ariel, Rex Kalibur</li>
            <li>(30:14) 13 - Festival - anatu, Levi, Michael Onabolu, Greydient, Dontmesswithjuan</li>
            <li>(32:09) 14 - Zip It - Oceantied, L.Ariel</li>
            <li>(33:16) 15 - Mysterious - Oceantied, Jenn Morel</li>
            <li>(34:07) 16 - Echoes of a Future - Conor Dalton, Dontmesswithjuan</li>
          </ol>
          <br />
          <p>
            Mixtape made with love by Oceantied<br />
            Original artwork made with magic by Private Woman
          </p>
          <br />
          <p>
            All these tracks are CC0, meaning you are free to download them and
            use them as you wish. If you want to know more about CC0, here are
            some official infos. If you want to know about our artist thoughts
            about CC0 throughout the experiment, you can check here.
          </p>
        </div>
      </P9Window>
    </div>
  )
}

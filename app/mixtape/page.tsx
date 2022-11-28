import P9Window from '../../components/P9Window'
import Link from 'next/link'

export default function About() {
  return (
  <P9Window className="row-start-2 justify-self-center self-center max-h-full z-10">
    <div className="font-display text-[28px] p-[40px]">
      <p>CC0lab Mixtape Vol.1</p>
      <p>11/28/2022</p>
      <br />
      {'{'}<Link href="https://create.zora.co/collections/0x72529ca1ca1be6657cfc9f9f12c614e2fbd8d761">Mint on Zora</Link>{'}'}
    </div>
  </P9Window>
  )
}

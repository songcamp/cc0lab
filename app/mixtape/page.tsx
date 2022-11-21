import P9Window from '../../components/P9Window'
import Providers from './providers'
import DropsMinter from '../../components/DropsMinter'
import DropsDescription from '../../components/DropsDescription'

export default function Page() {
  return (
    <div className="grid gap-[10px] md:gap-[20px] auto-cols-[minmax(0,auto)] auto-rows-[minmax(0,auto)] row-start-2 justify-self-center justify-items-center items-center h-full z-10 pointer-events-none">
      <Providers>
        <P9Window className="w-[480px] max-w-full max-h-full pointer-events-auto">
            <DropsMinter />            
          </P9Window>
          
          <P9Window className="w-full md:w-auto md:col-start-2 max-h-full pointer-events-auto">
            <DropsDescription />
          </P9Window>
  
      </Providers>
    </div>
  )
}

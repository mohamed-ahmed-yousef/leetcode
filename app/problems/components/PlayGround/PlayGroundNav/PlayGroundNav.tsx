import FullScreen from './FullScreen/FullScreen'
import Setting from './Setting/Setting'
import SupportedLanguage from './languages/Languages'

export default function PlayGroundNav() {
  return (
    <div className="bg-dark-layer-2 h-[46px] text-gray-300 flex items-end  justify-between   overflow-x-hidden">
      <SupportedLanguage />
      <div className="flex  items-center mb-2 gap-x-2 px-4">
        <Setting />
        <FullScreen />
      </div>
    </div>
  )
}

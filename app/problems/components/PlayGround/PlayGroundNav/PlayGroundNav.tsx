import FullScreen from './FullScreen/FullScreen'
import Setting from './Setting/Setting'

export default function PlayGroundNav() {
  return (
    <div className="bg-dark-layer-2 h-[46px] text-gray-300 flex items-end  justify-between   overflow-x-hidden">
      <p className="bg-dark-layer-1 w-fit  py-1.5   rounded-t-md text-sm px-5 hover:bg-dark-fill-2 hover:text-gray-200 cursor-pointer">
        Javascript
      </p>
      <div className="flex  items-center mb-2 gap-x-2 px-4">
        <Setting />
        <FullScreen />
      </div>
    </div>
  )
}

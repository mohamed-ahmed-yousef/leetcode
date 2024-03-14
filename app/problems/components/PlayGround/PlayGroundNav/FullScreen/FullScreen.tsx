'use client'
import { useState, useEffect } from 'react'
import { AiOutlineFullscreen } from 'react-icons/ai'

export default function FullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
    setIsFullScreen(!isFullScreen)
  }
  // to handle if user press ESC
  useEffect(() => {
    function exitHandler() {
      if (!document.fullscreenElement) {
        setIsFullScreen(false)
        return
      }
      setIsFullScreen(true)
    }

    if (document.addEventListener) {
      document.addEventListener('fullscreenchange', exitHandler)
      document.addEventListener('webkitfullscreenchange', exitHandler)
      document.addEventListener('mozfullscreenchange', exitHandler)
      document.addEventListener('MSFullscreenChange', exitHandler)
    }
  }, [isFullScreen])

  return (
    <div className="group" onClick={handleFullScreen}>
      <AiOutlineFullscreen className=" cursor-pointer w-7 h-7 hover:bg-dark-fill-2 px-1 py-1  rounded-sm " />
      <p
        className="absolute  group-hover:scale-100 transition duration-2000 ease-in-out top-[100px] right-[20px]
           scale-0 bg-dark-layer-2 rounded-md  z-10"
      >
        <span className="bg-dark-layer-1  px-1.5 py-.5 rounded-md">
          {' '}
          Full screen
        </span>
      </p>
    </div>
  )
}

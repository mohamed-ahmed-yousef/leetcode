import TimerImage from './Timersvg'
import { useState, useEffect } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import { FaChevronLeft } from 'react-icons/fa6'

import { FaPause } from 'react-icons/fa6'
import { FaPlay } from 'react-icons/fa'
export default function TimerComponent() {
  const [isShow, setIsShow] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isPlay, setIsPlay] = useState(false)
  const [formatedTime, setFormatedTime] = useState('00:00:00')
  const toDigits = (time: number) => {
    return time < 10 ? `0${time}` : time
  }
  const formateTimer = (time: number) => {
    const Hour = Math.floor(time / 3600)
    const Minutes = Math.floor((time % 3600) / 60)
    const Second = Math.floor(time % 60)

    return `${toDigits(Hour)}: ${toDigits(Minutes)}: ${toDigits(Second)}`
  }
  useEffect(() => {
    let intervalId: NodeJS.Timeout | number = 0
    if (isPlay) {
      intervalId = setInterval(() => {
        setTimer((t) => t + 1)
        setFormatedTime(formateTimer(timer))
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [isPlay, timer])

  const handleResetTime = () => {
    setTimer(0)
    setFormatedTime(formateTimer(0))
    setIsPlay(false)
  }

  return (
    <div>
      <div className=" cursor-pointer h-[35px] flex items-center">
        {!isShow ? (
          <div
            onClick={() => setIsShow(true)}
            className="cursor-pointer flex items-center h-full "
          >
            <TimerImage />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className=" p-2 mr-[2px] rounded-l-md   bg-dark-fill-3 hover:bg-dark-fill-2 text-slate-400 hover:text-slate-200 h-full">
              <FaChevronLeft onClick={() => setIsShow(false)} className="w-3" />
            </div>

            <div className="flex items-center gap-x-2 text-slate-400 hover:text-slate-200 p-2 bg-dark-fill-3 hover:bg-dark-fill-2  mr-[2px] h-full">
              {!isPlay ? (
                <FaPlay onClick={() => setIsPlay(true)} className="w-3" />
              ) : (
                <FaPause onClick={() => setIsPlay(false)} className="w-3" />
              )}
              <p className="text-slate-200">{formatedTime}</p>
            </div>
            <div className="text-slate-400 hover:text-slate-200 bg-dark-fill-3 hover:bg-dark-fill-2 h-full p-2 flex items-center rounded-r-md">
              <FiRefreshCcw
                onClick={handleResetTime}
                className="text-slate-200 w-4"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

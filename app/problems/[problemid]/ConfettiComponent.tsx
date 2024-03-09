'use client'
import useScreenDimensions from './WindowSize'
import Confetti from 'react-confetti'
import { Dispatch, useEffect, SetStateAction } from 'react'
export default function ConfettiComponent({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsModalOpen(false)
    }, 10000)
    return () => clearTimeout(timeoutId)
  }, [])
  const { width, height } = useScreenDimensions()
  return <Confetti width={width} height={height} tweenDuration={10000} />
}

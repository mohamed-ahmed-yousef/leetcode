'use client'
import React, { SetStateAction, Dispatch, useEffect } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { IoClose } from 'react-icons/io5'

type YoutubeModalProps = {
  videoId: string | undefined
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function YoutubeModal({
  videoId,
  setIsOpen,
}: YoutubeModalProps) {
  const handleCloseModal = () => {
    setIsOpen(false)
  }
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
  }
  useEffect(() => {
    const ListenToEvent = () => {
      handleCloseModal()
    }
    addEventListener('keydown', ListenToEvent)
    return () => {
      removeEventListener('keydown', ListenToEvent)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center"
      onClick={handleCloseModal}
    >
      <div className="absolute w-full h-screen bg-zinc-800  opacity-70 "></div>
      <div className="relative ">
        <IoClose
          className="absolute right-[5px] top-[-40px] text-4xl  cursor-pointer "
          onClick={handleCloseModal}
        />

        {videoId && (
          <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
        )}
      </div>
    </div>
  )
}

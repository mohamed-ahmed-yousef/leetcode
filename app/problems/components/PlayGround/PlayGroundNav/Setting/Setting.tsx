'use client'
import { AiOutlineSetting } from 'react-icons/ai'
import { useState } from 'react'
import SettingModal from './SettingModal'

export default function Setting() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  // const h
  return (
    <section>
      <div className="group ">
        <AiOutlineSetting
          className=" cursor-pointer w-7 h-7 hover:bg-dark-fill-2 px-1 py-1  rounded-sm "
          onClick={() => setModalIsOpen(true)}
        />
        <p
          className="absolute scale-0 group-hover:scale-100 transition duration-2000 ease-in-out top-[100px] right-[50px]
                  bg-dark-layer-2 rounded-md z-10 "
        >
          <span className="bg-dark-layer-1  px-1.5 py-.5 rounded-md">
            {' '}
            setting
          </span>
        </p>
      </div>
      {modalIsOpen && <SettingModal setModalIsOpen={setModalIsOpen} />}
    </section>
  )
}

'use client'
import React, { Dispatch, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'
import { useRecoilState } from 'recoil'
import { useFontSize } from '@/app/problems/atoms/FontSizeAtom'

const Modal = ({
  setModalIsOpen,
}: {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const supportText = [12, 13, 14, 15, 16, 17, 18, 19, 20]
  const [AtomValue, setFontSize] = useRecoilState(useFontSize)
  const handleOnChange = (val: any) => {
    setFontSize((prev) => ({ ...prev, fontSize: Number(val.target.value) }))

    localStorage.setItem(`font-size`, val.target.value)
  }
  const handleOnClose = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-layer-2 bg-opacity-75  transition-opacity duration-300 ease-in-out">
      <div
        className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-layer-2 rounded-lg shadow-lg max-w-sm
        px-4 py-2 "
      >
        <div className="flex items-center justify-between pb-2 mb-4 border-b-2 border-layer-1">
          <p className="text-2xl font-semibold">Setting </p>
          <button
            type="button"
            className="hover:bg-red-600 rounded-md p-1.5  text-bold"
            onClick={handleOnClose}
          >
            <IoClose />
          </button>
        </div>
        <div className="flex justify-between items-center py-3">
          <label htmlFor="fontSize" className="text-gray-300 mr-2">
            Font Size:
          </label>
          <select
            id="fontSize"
            className="rounded-md border border-gray-500 text-gray-300 bg-dark-layer-1 py-1 px-2  focus:border-layer-1 w-1/2 text-lg"
            onChange={(e) => handleOnChange(e)}
          >
            {Array.isArray(supportText) &&
              supportText.map((ele) => (
                <option
                  value={ele}
                  key={ele}
                  selected={ele === AtomValue?.fontSize}
                >
                  {Number(ele)}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Modal

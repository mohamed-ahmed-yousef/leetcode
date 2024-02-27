'use client'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa6'
type AccordionProps = {
  header: string[]
  content: string[]
}

export default function Accordion({ header, content }: AccordionProps) {
  const [isActive, setIsActive] = useState(-1)
  const handleOnClick = (indx: number) => {
    if (isActive == indx) setIsActive(-1)
    else setIsActive(indx)
  }
  return (
    <div className=" mt-5">
      {header.map((item, indx) => (
        <div
          className="w-fulll border-t-[2px] border-dark-fill-2  px-[10px] mt-4"
          key={item}
        >
          <div
            className="text-gray-300 my-[4px]  w-full cursor-pointer "
            onClick={() => handleOnClick(indx)}
          >
            <div className="group flex justify-between items-center  ">
              <div className="flex items-center">
                <FaRegLightbulb />
                <p className="mr-[6px]">{item} </p>
              </div>
              <p>{isActive === indx ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
            </div>
            <p
              className={`ml-2 mt-2  ${isActive === indx ? 'block mb-[4px]' : 'hidden'}`}
            >
              {content[indx]}{' '}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

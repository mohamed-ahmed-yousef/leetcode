'use client'
import { useState, useRef, useEffect } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useRefAtom } from '@/app/problems/atoms/RefAtom'
import { useSetRecoilState } from 'recoil'

type AccordionProps = {
  header: string[]
  content: string[]
  Icon: React.ReactNode
}

export default function Accordion({ header, content, Icon }: AccordionProps) {
  const setRef = useSetRecoilState(useRefAtom)
  const HintRef = useRef(null)
  useEffect(() => {
    setRef((prev) => ({ ...prev, hintRef: HintRef?.current }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HintRef?.current])

  const [isActive, setIsActive] = useState(-1)
  const handleOnClick = (indx: number) => {
    if (isActive == indx) setIsActive(-1)
    else setIsActive(indx)
  }
  return (
    <div className=" mt-5" ref={HintRef}>
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
                {Icon}
                <p
                  className={`ml-[6px]  font-semibold ${isActive == indx ? 'text-gray-200 text-lg' : 'text-base'}`}
                >
                  {item}{' '}
                </p>
              </div>
              <p>{isActive === indx ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
            </div>
            <div
              className={`ml-5 mt-2 flex ${isActive === indx ? 'block mb-[4px]' : 'hidden'}`}
            >
              {item == 'Topics'
                ? content.map((item) => (
                    <p
                      className="bg-dark-fill-2 px-3 py-1 rounded-lg ml-[10px]"
                      key={item}
                    >
                      {' '}
                      {item}
                    </p>
                  ))
                : content[indx]}
              {}{' '}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

import { useState } from 'react'
import { isRunOnlineCompilerAtom } from '@/app/problems/atoms/RunAtom'
import { useRecoilValue } from 'recoil'
import { IoClose } from 'react-icons/io5'

export default function SubmitModal() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const { isRun } = useRecoilValue(isRunOnlineCompilerAtom)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button onClick={handleModalOpen}>Open Modal</button>
      {/* isModalOpen && */}
      {isModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen pt-4  pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-dark-layer-2 bg-opacity-75 transition-opacity"
              onClick={handleModalClose}
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div className="relative inline-block align-bottom bg-dark-layer-1 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[min(96vw,600px)]">
              <IoClose
                className="absolute top-0 right-0 text-white text-3xl cursor-pointer hover:text-red-600 transition duration-500"
                onClick={handleModalClose}
              />
              <div className="bg-dark-layer-1 pt-5 pb-4  sm:pb-4  ">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3  sm:mt-0  flex items-center flex-col justify-center">
                    <h3 className="text-2xl leading-6 font-bold  text-red-500 mb-4">
                      Wrong Answer
                    </h3>
                    <div className="mt-2 ml-4">
                      <div className="mb-4 text-gray-300 w-[min(93vw,550px)]">
                        <p className="font-medium mb-[3px] text-lg text-gray-400">
                          Input
                        </p>
                        <pre className="bg-dark-fill-2  rounded-md p-2 lg:p-3 whitespace-pre-wrap">
                          Input
                        </pre>
                      </div>
                      <div className="mb-4 text-gray-300 w-[min(93vw,550px)]">
                        <p className="font-medium mb-[3px] text-lg text-gray-400">
                          Correct Output
                        </p>
                        <pre className="bg-dark-fill-2  w-full rounded-md p-2 lg:p-3 whitespace-pre-wrap">
                          Correct Output
                        </pre>
                      </div>
                      <div className="mb-4 text-gray-300 w-[min(93vw,550px)]">
                        <p className="font-medium mb-[3px] text-lg text-gray-400">
                          Your Answer
                        </p>
                        <pre className="bg-dark-fill-2  rounded-md p-2 lg:p-3 whitespace-pre-wrap">
                          your answer
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

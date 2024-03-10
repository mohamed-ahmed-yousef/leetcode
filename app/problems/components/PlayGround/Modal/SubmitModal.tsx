'use client'
import { useState } from 'react'
import { isRunOnlineCompilerAtom } from '@/app/problems/atoms/RunAtom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { IoClose } from 'react-icons/io5'
import { userWrongAnswerAtom } from '@/app/problems/atoms/UserWrongAnswer'
import ConfettiComponent from '@/app/problems/[problemid]/ConfettiComponent'
import { SuccessTopCenter } from '@/components/Toast/Toast'
import { usePathname } from 'next/navigation'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { fireStore, auth } from '@/app/firebase/firebase'
import { useProblemIsSolved } from '@/app/problems/atoms/ProblemIsSolved'

export default function SubmitModal() {
  const pathname = usePathname()
  console.log(pathname, 'from submit modal')
  let ProblemId: string[] | string = pathname.split('/')
  ProblemId = ProblemId[2]
  const setIsSolved = useSetRecoilState(useProblemIsSolved)
  const [user] = useAuthState(auth)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const { isRun } = useRecoilValue(isRunOnlineCompilerAtom)
  const { userWrongAnswer } = useRecoilValue(userWrongAnswerAtom)
  const [isToastedOpen, setIsToastedOpen] = useState(false)
  console.log(userWrongAnswer, 'from submit modal')
  const firstUserWrongAnswer = userWrongAnswer[0]

  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  const updateSolvedProblem = async () => {
    const currentUser = doc(fireStore, 'users', user?.uid!)
    await updateDoc(currentUser, {
      solvedProblems: arrayUnion(ProblemId),
    })
  }

  return (
    <>
      {!firstUserWrongAnswer && isModalOpen && (
        <>
          {!isToastedOpen && (
            <>
              {SuccessTopCenter('Congrats all tests pass')}
              {setIsToastedOpen(true)}
              {updateSolvedProblem()}
              {setIsSolved((prev) => ({ ...prev, isSolved: true }))}
            </>
          )}
          <ConfettiComponent setIsModalOpen={setIsModalOpen} />
        </>
      )}
      {isModalOpen && firstUserWrongAnswer && (
        <div className="fixed z-50 inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen pt-4  pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-dark-layer-2 bg-opacity-75 transition-opacity"
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
                      Wrong Answer at test case{' '}
                      {firstUserWrongAnswer?.testCaseNumber}
                    </h3>
                    <div className="mt-2 ml-4">
                      <div className="mb-4 text-gray-300 w-[min(93vw,550px)]">
                        <p className="font-medium mb-[3px] text-lg text-gray-400">
                          Input
                        </p>
                        <pre className="bg-dark-fill-2  rounded-md p-2 lg:p-3 whitespace-pre-wrap">
                          {JSON.stringify(firstUserWrongAnswer?.input)}
                        </pre>
                      </div>
                      <div className="mb-4 text-gray-300 w-[min(93vw,550px)]">
                        <p className="font-medium mb-[3px] text-lg text-gray-400">
                          Correct Output
                        </p>
                        <pre className="bg-dark-fill-2  w-full rounded-md p-2 lg:p-3 whitespace-pre-wrap">
                          {JSON.stringify(firstUserWrongAnswer?.correctOutput)}
                        </pre>
                      </div>
                      <div className="mb-4 text-gray-300 w-[min(93vw,550px)]">
                        <p className="font-medium mb-[3px] text-lg text-gray-400">
                          Your Answer
                        </p>
                        <pre className="bg-dark-fill-2  rounded-md p-2 lg:p-3 whitespace-pre-wrap">
                          {JSON.stringify(firstUserWrongAnswer?.userOutput)}
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

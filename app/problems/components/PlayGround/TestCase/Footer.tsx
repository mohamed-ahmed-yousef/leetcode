'use client'
import { BsChevronUp } from 'react-icons/bs'
import { useRecoilValue } from 'recoil'
import { textEditorAtom } from '../../../atoms/TextEditorAtom'
import { OnlineCompiler } from '../TextEditor/OnLineCompiler'
import { userWrongAnswerAtom } from '@/app/problems/atoms/UserWrongAnswer'
import { useSetRecoilState } from 'recoil'

export default function Footer() {
  const { userLang, userCode } = useRecoilValue(textEditorAtom)
  const setUserWrongAnswer = useSetRecoilState(userWrongAnswerAtom)

  const handleOnRun = () => {
    const data = OnlineCompiler(userCode, userLang, 'run')
    setUserWrongAnswer((prev) => ({ ...prev, ...data }))
  }
  const handleOnSubmit = () => {
    const data = OnlineCompiler(userCode, userLang, 'submit')
    setUserWrongAnswer((prev) => ({ ...prev, ...data }))
  }
  return (
    <>
      <div className="sticky bottom-0 mt-[10px] flex items-center justify-between bg-dark-layer-1 w-full h-14  text-gray-300">
        <div
          className=" flex items-center py-1 px-2 hover:text-gray-100  bg-dark-fill-3 w-fit rounded-md 
          hover:bg-dark-fill-2 cursor-pointer  "
        >
          <button> Console </button>
          <BsChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6 w-3" />
        </div>
        <div className=" ">
          <button
            className=" py-1 px-2  hover:text-gray-100  bg-dark-fill-3 w-fit rounded-md 
            hover:bg-dark-fill-2 cursor-pointer mr-3"
            onClick={handleOnRun}
          >
            Run
          </button>
          <button
            className="py-1 px-2   hover:text-gray-100  bg-green-600 w-fit rounded-md cursor-pointer "
            onClick={handleOnSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

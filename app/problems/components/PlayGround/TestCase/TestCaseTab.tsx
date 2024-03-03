'use client'

import { useState } from 'react'
import CaseButton from './CaseButton'
import OneTestCase from './OneTestCase'
import { useRecoilValue } from 'recoil'
import { userWrongAnswerAtom } from '@/app/problems/atoms/UserWrongAnswer'

type TestCaseEditorProps = {
  components: string[][]
}
export default function TestCaseEditor({ components }: TestCaseEditorProps) {
  const WrongAnswerData = useRecoilValue(userWrongAnswerAtom)
  const { type, userWrongAnswer } = WrongAnswerData
  const testCaseNumber = userWrongAnswer[0]?.testCaseNumber
  console.log(WrongAnswerData)
  const [targetTest, setTargetTest] = useState(0)
  // console.log(components)
  return (
    <div className="">
      <div className={`flex gap-x-2 mb-3  `}>
        {components.map((item, indx) => (
          <button
            key={item[0]}
            onClick={() => setTargetTest(indx)}
            className={`${type === 'run' && testCaseNumber === indx + 1 && 'bg-red-600'}`}
          >
            <CaseButton number={indx + 1} selectedTest={targetTest === indx} />
          </button>
        ))}
      </div>
      <div>
        {components.map((item, indx) => (
          <div key={item[0]}>
            {indx === targetTest && (
              <OneTestCase input={item[0]} output={item[1]} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

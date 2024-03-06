'use client'

import { useState } from 'react'
import CaseButton from './CaseButton'
import OneTestCase from './OneTestCase'
import { useRecoilValue } from 'recoil'
import { userWrongAnswerAtom } from '@/app/problems/atoms/UserWrongAnswer'

type TestCaseEditorProps = {
  components: string[][]
}
type userDataProps = {
  userOutput: string[]
  correctOutput: string[]
  testCaseNumber: number
}[]
function GetWrongTestCasesArray(userData: userDataProps) {
  let testCaseNumbers: number[] = []
  let correctOutputs: string[][] = []
  let userOutputs: string[][] = []
  Array.isArray(userData) &&
    userData.forEach(function (item) {
      console.log(item, 'item')
      testCaseNumbers.push(item.testCaseNumber)
      correctOutputs.push(item.correctOutput)
      userOutputs.push(item.userOutput)
    })

  return {
    testCaseNumbers,
    correctOutputs,
    userOutputs,
  }
}

export default function TestCaseEditor({ components }: TestCaseEditorProps) {
  const WrongAnswerData = useRecoilValue(userWrongAnswerAtom)
  console.log('wrong answer from tabs', WrongAnswerData)
  const { type, userWrongAnswer } = WrongAnswerData
  console.log('type:', type, userWrongAnswer)
  const { testCaseNumbers, correctOutputs, userOutputs } =
    GetWrongTestCasesArray(userWrongAnswer)
  console.log(testCaseNumbers, correctOutputs, userOutputs, 'test 2')
  const [targetTest, setTargetTest] = useState(0)
  let currentUserNumberAnswer = 0
  console.log(components, 'our components')
  return (
    <div className="">
      {type === 'run' &&
        (testCaseNumbers.length > 0 ? (
          <p className="text-red-600 mb-3 font-semibold text-xl">
            Wrong Answer
          </p>
        ) : (
          <p className="text-green-600 mb-3 font-semibold text-xl">Accepted</p>
        ))}
      <div className={`flex gap-x-2 mb-3  `}>
        {components.map((item, indx) => (
          <button
            key={item[0]}
            onClick={() => setTargetTest(indx)}
            className={`${type === 'run' ? (testCaseNumbers.includes(indx + 1) ? 'bg-red-600 rounded-lg' : 'bg-green-600 rounded-lg') : ''}`}
          >
            <CaseButton number={indx + 1} selectedTest={targetTest === indx} />
          </button>
        ))}
      </div>
      <div>
        {components.map((item, indx) => (
          <div key={item[0]}>
            {indx === targetTest && (
              <OneTestCase
                input={item[0]}
                output={item[1]}
                currUserOutput={
                  testCaseNumbers.includes(indx + 1)
                    ? userOutputs[currentUserNumberAnswer++]
                    : ''
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

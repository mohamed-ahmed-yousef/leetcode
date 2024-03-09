'use client'
import TestCaseTab from './TestCaseTab'
import TestCaseHeader from './TestCaseHeader'
import Footer from './Footer'
import { useRecoilValue } from 'recoil'
import { testCaseAtom } from './../../../atoms/testCaseAtom'
import { isRunOnlineCompilerAtom } from '@/app/problems/atoms/RunAtom'
import TestCaseSkeleton from '../skeleton/testCaseSkeleton'
import { userWrongAnswerAtom } from '@/app/problems/atoms/UserWrongAnswer'

export default function TestCase() {
  const { testCase } = useRecoilValue(testCaseAtom)
  const { isRun } = useRecoilValue(isRunOnlineCompilerAtom)
  const { type } = useRecoilValue(userWrongAnswerAtom)
  // console.log
  return (
    <div className="overflow-auto  w-full">
      <div className="px-4 py-1 min-w-[400px]">
        <TestCaseHeader />
        {isRun && type == 'run' && <TestCaseSkeleton />}
        {(!isRun || type === 'submit') && <TestCaseTab components={testCase} />}
        <Footer />
      </div>
    </div>
  )
}

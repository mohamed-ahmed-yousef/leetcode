'use client'
import TestCaseTab from './TestCaseTab'
import TestCaseHeader from './TestCaseHeader'
import Footer from './Footer'
import { useRecoilValue } from 'recoil'
import { testCaseAtom } from './../../../atoms/testCaseAtom'

export default function TestCase() {
  const { testCase } = useRecoilValue(testCaseAtom)
  // console.log
  return (
    <div className="overflow-auto  w-full">
      <div className="px-4 py-1 min-w-[400px]">
        <TestCaseHeader />
        <TestCaseTab components={testCase} />
        <Footer />
      </div>
    </div>
  )
}

'use client'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { BsList } from 'react-icons/bs'
import { getProblems } from '@/utils/problems/index'
import { useRouter } from 'next/navigation'
type ProblemNavBarProps = {
  problemId: string | undefined
}

export default function ProblemNavBar({ problemId }: ProblemNavBarProps) {
  const router = useRouter()
  const handleNextAndPrev = (next: boolean) => {
    const problemLength = Object.keys(getProblems).length + 1
    const currProblem = getProblems[problemId as keyof typeof getProblems]
    const currOrder = currProblem?.order

    // console.log("enter here now", currProblem, currOrder)
    if (next) {
      const nextProblemOrder = (currOrder + 1) % problemLength || 1
      const nextProblem = Object.keys(getProblems).find(
        (item) =>
          getProblems[item as keyof typeof getProblems].order ==
          nextProblemOrder
      )

      console.log(nextProblem, nextProblemOrder)
      router.push(nextProblem!)
    } else {
      let previousProblemOrder = currOrder - 1
      if (previousProblemOrder == 0) previousProblemOrder = problemLength - 1
      const previousProblem = Object.keys(getProblems).find(
        (item) =>
          getProblems[item as keyof typeof getProblems].order ==
          previousProblemOrder
      )
      console.log(previousProblem, previousProblemOrder)
      router.push(previousProblem!)
    }
  }

  return (
    <div className=" items-center justify-center h-[35px] hidden md:flex">
      <div
        className="flex items-center cursor-pointer px-2 py-1 h-full  bg-dark-fill-3 hover:bg-dark-fill-2 rounded-l-md mr-[2px] text-slate-300 hover:text-slate-50"
        onClick={() => handleNextAndPrev(false)}
      >
        <FaChevronLeft className="w-5 h-5" />
      </div>

      <div
        className="flex p-2 items-center h-full cursor-pointer font-medium 
                    text-md text-slate-50 bg-dark-fill-3 hover:bg-dark-fill-2 "
      >
        <BsList className="mr-2" />
        Problem List
      </div>
      <div
        className="flex items-center cursor-pointer px-2 py-1 h-full bg-dark-fill-3 hover:bg-dark-fill-2 rounded-r-md ml-[1.5px] text-slate-300 hover:text-slate-50"
        onClick={() => handleNextAndPrev(true)}
      >
        <FaChevronRight className="w-5 h-5" />
      </div>
    </div>
  )
}

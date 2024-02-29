'use client'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { LuCheckCircle } from 'react-icons/lu'
import { TiStarOutline } from 'react-icons/ti'
import { useRefAtom } from '../../atoms/RefAtom'
import { useRecoilValue } from 'recoil'
import { FaTag } from 'react-icons/fa'
import { FaRegLightbulb } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import useGetOneProblem from './hooks/getOneProblem'
import { DBProblems } from '@/types/problem'
import CircleSkeleton from './skeleton/Circle'
import Rectangle from './skeleton/Rectangle'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, fireStore } from '@/app/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

type ProblemInfoProps = {
  problemId: string
}

export default function ProblemInfo({ problemId }: ProblemInfoProps) {
  const { hintRef } = useRecoilValue(useRefAtom)
  const [problemInfo, setProblemInfo] = useState<DBProblems | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [user] = useAuthState(auth)
  console.log(user)
  const [userProblemInfo, setUserProblemInfo] = useState({
    likes: false,
    dislikes: false,
    starred: false,
    solved: false,
  })

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(fireStore, 'users', user?.uid!)
      const docSnap = await getDoc(docRef)
      let userInfo = null
      if (docSnap.exists()) {
        userInfo = docSnap.data()
      }
      setUserProblemInfo({
        likes: userInfo?.likedProblems?.includes(problemId),
        dislikes: userInfo?.dislikedProblems?.includes(problemId),
        starred: userInfo?.starredProblems?.includes(problemId),
        solved: userInfo?.solvedProblems?.includes(problemId),
      })
    }
    if (user !== null) getData()
  }, [problemId, user])

  useEffect(() => {
    const getProblemInfo = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const currentProblem = await useGetOneProblem(problemId, setIsLoading)
      setProblemInfo(currentProblem[0])
    }
    getProblemInfo()
  }, [problemId])

  const difficultyLevel =
    problemInfo?.difficulty === 'Easy'
      ? 'text-olive   '
      : problemInfo?.difficulty === 'Medium'
        ? 'text-dark-yellow '
        : 'text-dark-pink '
  const handleScrollDown = () => {
    if (hintRef) {
      hintRef?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="flex items-center gap-x-2 mt-3 text-gray-300">
      <div className="rounded-full font-medium w-[70px] text-center">
        {isLoading && <Rectangle />}
        {!isLoading && (
          <p
            className={`${difficultyLevel} rounded-full px-3 py-1 bg-dark-fill-3`}
          >
            {' '}
            {problemInfo?.difficulty}{' '}
          </p>
        )}
      </div>
      <div>
        {isLoading && (
          <div className="w-5">
            {' '}
            <CircleSkeleton />
          </div>
        )}
        {userProblemInfo.solved && !isLoading && (
          <LuCheckCircle className="text-dark-green-s w-5" />
        )}
      </div>

      <div className="flex items-center w-8">
        {isLoading && <Rectangle />}
        {!isLoading && (
          <>
            {!userProblemInfo.likes && (
              <AiFillLike className="cursor-pointer mr-[2px]" />
            )}
            {userProblemInfo.likes && (
              <AiFillLike className="cursor-pointer mr-[2px] text-dark-blue-s" />
            )}
            <p>{problemInfo?.likes} </p>
          </>
        )}
      </div>

      <div className="flex items-center w-8 ">
        {isLoading && <Rectangle />}
        {!isLoading && (
          <>
            {!userProblemInfo.dislikes && (
              <AiFillDislike className="cursor-pointer mr-[2px]" />
            )}
            {userProblemInfo.dislikes && (
              <AiFillDislike className="cursor-pointer mr-[2px] text-dark-blue-s" />
            )}
            <p>{problemInfo?.dislikes} </p>
          </>
        )}
      </div>

      <div className="w-8 ">
        <TiStarOutline className="cursor-pointer" />
      </div>
      <div
        className="cursor-pointer flex items-center gap-x-2 bg-dark-fill-3 px-3 py-1 rounded-full hover:text-gray-100"
        onClick={handleScrollDown}
      >
        <FaTag />
        <p>Hints</p>
      </div>
      <div
        className="cursor-pointer flex items-center gap-x-2 bg-dark-fill-3 px-3 py-1 rounded-full hover:text-gray-100"
        onClick={handleScrollDown}
      >
        <FaRegLightbulb />
        <p>Topics </p>
      </div>
    </div>
  )
}

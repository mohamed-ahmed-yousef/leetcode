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
import { runTransaction } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, fireStore } from '@/app/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { notLogin } from '@/components/Toast/Toast'
import Spinner from './skeleton/Spinner'

type ProblemInfoProps = {
  problemId: string
}

export default function ProblemInfo({ problemId }: ProblemInfoProps) {
  const { hintRef } = useRecoilValue(useRefAtom)
  const [problemInfo, setProblemInfo] = useState<DBProblems | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isChangingState, setIsChangingState] = useState(false)
  const [user] = useAuthState(auth)
  console.log(user)
  const [userProblemInfo, setUserProblemInfo] = useState({
    liked: false,
    disliked: false,
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
        liked: userInfo?.likedProblems.includes(problemId),
        disliked: userInfo?.dislikedProblems.includes(problemId),
        starred: userInfo?.starredProblems.includes(problemId),
        solved: userInfo?.solvedProblems.includes(problemId),
      })
    }
    if (user !== null) getData()
  }, [problemId, user])

  useEffect(() => {
    const getProblemInfo = async () => {
      const docRef = doc(fireStore, 'problems', problemId)
      const docSnap = await getDoc(docRef)
      let currentProblem: any = []
      if (docSnap.exists()) {
        currentProblem.push(docSnap.data())
      }
      setIsLoading(false)
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

  const handleLikeClick = async () => {
    if (!user) {
      notLogin('Like')
      return
    }
    setIsChangingState(true)
    await runTransaction(fireStore, async (transaction) => {
      const userRef = doc(fireStore, 'users', user?.uid!)
      const problemRef = doc(fireStore, 'problems', problemId)
      const userDoc = await transaction.get(userRef)
      const problemDoc = await transaction.get(problemRef)
      if (userDoc.exists() && problemDoc.exists()) {
        console.log(userDoc.data())
        if (userProblemInfo?.liked) {
          console.log('enterer here')
          transaction.update(userRef, {
            likedProblems: userDoc
              .data()
              .likedProblems?.filter((id: string) => id !== problemId),
          })
          transaction.update(problemRef, {
            likes: problemDoc.data().likes - 1,
          })
          setProblemInfo((prev) =>
            prev ? { ...prev, likes: prev.likes - 1 } : null
          )
          setUserProblemInfo((prev) => ({ ...prev, liked: false }))
        } else if (userProblemInfo?.disliked) {
          transaction.update(userRef, {
            dislikedProblems: userDoc
              .data()
              .dislikedProblems?.filter((id: string) => id !== problemId),
            likedProblems: [...userDoc.data()?.likedProblems, problemId],
          })
          transaction.update(problemRef, {
            dislikes: problemDoc.data().dislikes - 1,
            likes: problemDoc.data().likes + 1,
          })
          setProblemInfo((prev) =>
            prev
              ? {
                  ...prev,
                  likes: prev?.likes + 1,
                  dislikes: prev?.dislikes - 1,
                }
              : null
          )
          setUserProblemInfo((prev) => ({
            ...prev,
            liked: true,
            disliked: false,
          }))
        } else {
          transaction.update(userRef, {
            likedProblems: [...userDoc.data().likedProblems, problemId],
          })
          transaction.update(problemRef, {
            likes: problemDoc.data().likes + 1,
          })
          setUserProblemInfo({
            ...userProblemInfo,
            liked: !userProblemInfo.liked,
          })
          setProblemInfo((prev) =>
            prev ? { ...prev, likes: prev?.likes + 1 } : null
          )
        }
      }
    })
    setIsChangingState(false)
  }
  const handleDislikeClick = async () => {
    if (!user) {
      notLogin('Dislike')
      return
    }
    setIsChangingState(true)
    await runTransaction(fireStore, async (transaction) => {
      const userRef = doc(fireStore, 'users', user?.uid!)
      const problemRef = doc(fireStore, 'problems', problemId)
      const userDoc = await transaction.get(userRef)
      const problemDoc = await transaction.get(problemRef)

      if (userDoc.exists() && problemDoc.exists()) {
        console.log(userDoc.data())
        if (userProblemInfo?.liked) {
          transaction.update(userRef, {
            likedProblems: userDoc
              .data()
              .likedProblems.filter((id: string) => id !== problemId),
            dislikedProblems: [...userDoc.data().dislikedProblems, problemId],
          })
          transaction.update(problemRef, {
            likes: problemDoc.data().likes - 1,
            dislikes: problemDoc.data().dislikes + 1,
          })
          setProblemInfo((prev) =>
            prev
              ? {
                  ...prev,
                  likes: prev.likes - 1,
                  dislikes: prev.dislikes + 1,
                }
              : null
          )
          setUserProblemInfo((prev) => ({
            ...prev,
            liked: false,
            disliked: true,
          }))
        } else if (userProblemInfo?.disliked) {
          transaction.update(userRef, {
            dislikedProblems: userDoc
              .data()
              .dislikedProblems.filter((id: string) => id !== problemId),
          })
          transaction.update(problemRef, {
            dislikes: problemDoc.data().dislikes - 1,
          })
          setProblemInfo((prev) =>
            prev ? { ...prev, dislikes: prev.dislikes - 1 } : null
          )
          setUserProblemInfo((prev) => ({ ...prev, disliked: false }))
        } else {
          transaction.update(userRef, {
            dislikedProblems: [...userDoc.data().dislikedProblems, problemId],
          })
          transaction.update(problemRef, {
            dislikes: problemDoc.data().dislikes + 1,
          })
          setUserProblemInfo({
            ...userProblemInfo,
            disliked: !userProblemInfo.disliked,
          })
          setProblemInfo((prev) =>
            prev ? { ...prev, dislikes: prev.dislikes + 1 } : null
          )
        }
      }
    })
    setIsChangingState(false)
  }

  const handleStarClick = async () => {
    if (!user) {
      notLogin('Star')
      return
    }
    setIsChangingState(true)
    await runTransaction(fireStore, async (transaction) => {
      const userRef = doc(fireStore, 'users', user?.uid!)
      const problemRef = doc(fireStore, 'problems', problemId)
      const userDoc = await transaction.get(userRef)
      const problemDoc = await transaction.get(problemRef)
      if (userDoc.exists() && problemDoc.exists()) {
        if (userProblemInfo?.starred) {
          transaction.update(userRef, {
            starredProblems: userDoc
              .data()
              .starredProblems.filter((id: string) => id !== problemId),
          })
          setUserProblemInfo((prev) => ({ ...prev, starred: false }))
        } else {
          transaction.update(userRef, {
            starredProblems: [...userDoc.data().starredProblems, problemId],
          })
          setUserProblemInfo((prev) => ({ ...prev, starred: true }))
        }
      }
    })
    setIsChangingState(false)
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
        {isChangingState && <Spinner />}
        {!isLoading && !isChangingState && (
          <>
            {!userProblemInfo.liked && (
              <AiFillLike
                className="cursor-pointer mr-[2px]"
                onClick={() => handleLikeClick()}
              />
            )}
            {userProblemInfo.liked && (
              <AiFillLike
                className="cursor-pointer mr-[2px] text-dark-blue-s"
                onClick={() => handleLikeClick()}
              />
            )}
            <p>{problemInfo?.likes} </p>
          </>
        )}
      </div>
      <div className="flex items-center w-8">
        {isLoading && <Rectangle />}
        {isChangingState && <Spinner />}
        {!isLoading && !isChangingState && (
          <>
            {!userProblemInfo.disliked && (
              <AiFillDislike
                className="cursor-pointer mr-[2px]"
                onClick={() => handleDislikeClick()}
              />
            )}
            {userProblemInfo.disliked && (
              <AiFillDislike
                className="cursor-pointer mr-[2px] text-dark-blue-s"
                onClick={() => handleDislikeClick()}
              />
            )}
            <p>{problemInfo?.dislikes} </p>
          </>
        )}
      </div>
      <div className="flex items-center w-8">
        {isLoading && <Rectangle />}
        {isChangingState && <Spinner />}
        {!isLoading && !isChangingState && (
          <>
            {!userProblemInfo.starred && (
              <TiStarOutline
                className="w-5 cursor-pointer mr-[2px]"
                onClick={() => handleStarClick()}
              />
            )}
            {userProblemInfo.starred && (
              <TiStarOutline
                className="w-5 cursor-pointer mr-[2px] text-dark-yellow"
                onClick={() => handleStarClick()}
              />
            )}
          </>
        )}
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

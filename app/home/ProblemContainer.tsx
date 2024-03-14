'use client'

import { useState } from 'react'
import { useGetProblems } from './hooks/useGetProblems'
import { useEffect } from 'react'
import { DBProblems } from '@/types/problem'
import TableContent from './TableContent'
import ProblemsSkeleton from './skeleton/ProblemsSkeleton'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, fireStore } from '@/app/firebase/firebase'

export default function ProblemContainer() {
  const [problems, setProblems] = useState<DBProblems | null>(null)
  const [solvedProblems, setSolvedProblems] = useState<string[] | null>(null)
  const [user] = useAuthState(auth)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const curr = await useGetProblems(setIsLoading)
      if (user) {
        const docRef = doc(fireStore, 'users', user?.uid!)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const { solvedProblems } = docSnap.data()
          setSolvedProblems(solvedProblems)
        }
      } else {
        setSolvedProblems([])
      }
      setProblems(curr)
    }
    getData()
  }, [user])

  return !isLoading ? (
    <TableContent problems={problems} solvedProblems={solvedProblems} />
  ) : (
    <ProblemsSkeleton />
  )
}

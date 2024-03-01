'use client'

import { useState } from 'react'
import { useGetProblems } from './hooks/useGetProblems'
import { useEffect } from 'react'
import { DBProblems } from '@/types/problem'
import TableContent from './TableContent'
import ProblemsSkeleton from './skeleton/ProblemsSkeleton'

export default function ProblemContainer() {
  const [problems, setProblems] = useState<DBProblems | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const curr = await useGetProblems(setIsLoading)
      setProblems(curr)
    }
    getData()
  }, [])

  return !isLoading ? (
    <TableContent problems={problems} />
  ) : (
    <ProblemsSkeleton />
  )
}

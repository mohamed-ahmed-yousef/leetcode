'use client'
import NavBar from '@/components/NavBar/NavBar'
import AuthPage from './components/AuthPage'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/firebase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { useAuthAtom } from '@/app/auth/atoms/authAtom'
type AuthProps = {}
export default function Auth({}: AuthProps) {
  const [user, loading] = useAuthState(auth)
  const [isloading, setIsLoading] = useState(true)
  const router = useRouter()
  const value = useRecoilValue(useAuthAtom)
  console.log(value)

  useEffect(() => {
    if (user) router.push('/')
    if (!loading && !user) setIsLoading(false)
  }, [user, loading, router])

  if (isloading) return
  return (
    <div className="h-screen bg-gradient-to-b from-zinc-600 to-zinc-900 ">
      <NavBar />
      <AuthPage />
    </div>
  )
}

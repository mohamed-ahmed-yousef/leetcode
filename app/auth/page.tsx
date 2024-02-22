'use client'
import NavBar from '@/components/NavBar/NavBar'
import AuthPage from './components/AuthPage'
import { RecoilRoot } from 'recoil'

type AuthProps = {}
export default function Auth({}: AuthProps) {
  return (
    <RecoilRoot>
      <div className="h-screen bg-gradient-to-b from-zinc-600 to-zinc-900 ">
        <NavBar />
        <AuthPage />
      </div>
    </RecoilRoot>
  )
}

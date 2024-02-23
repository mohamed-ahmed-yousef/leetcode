'use client'
import HomeNavBar from '@/components/NavBar/HomeNavBar'
import Title from './home/Title'
import TableHeader from './home/TableHeader'
import TableContent from './home/TableContent'
import { RecoilRoot } from 'recoil'

export default function Home() {
  return (
    <div className="bg-dark-layer-2 min-h-screen relative">
      {/*nav height is 60px */}
      <RecoilRoot>
        <HomeNavBar />
      </RecoilRoot>
      <Title />
      <div className="text-slate-200 w-9/12 mx-auto">
        <TableHeader />
        <TableContent />
      </div>
    </div>
  )
}

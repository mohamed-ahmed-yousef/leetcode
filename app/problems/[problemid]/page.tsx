'use client'
import HomeNavBar from '@/components/NavBar/HomeNavBar'
import WorkSpace from './WorkSpace'

export default function Problem() {
  return (
    <div className=" w-full h-screen">
      <HomeNavBar homePage />
      <WorkSpace />
    </div>
  )
}

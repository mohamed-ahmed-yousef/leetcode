'use client'
import HomeNavBar from './components/NavBar/HomeNavBar'
import Title from './home/Title'
import TableHeader from './home/TableHeader'

import ProblemContainer from './home/ProblemContainer'
export default function Home() {
  return (
    <div className="bg-dark-layer-2 min-h-screen relative">
      {/*nav height is 60px */}
      <HomeNavBar />
      <Title />
      <div className="text-slate-200 w-9/12 mx-auto">
        <TableHeader />
        <ProblemContainer />
      </div>
    </div>
  )
}

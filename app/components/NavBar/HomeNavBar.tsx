'use client'
import navBarImage from '@/public/logo-full.png'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Link from 'next/link'
import { auth } from '@/app/firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Avatar from '@/public/avatar.png'
import Logout from '@/components/Logout/Logout'
import { useRecoilState } from 'recoil'
import { useAuthAtom } from '@/app/auth/atoms/authAtom'
import { useRouter } from 'next/navigation'
import ProblemNavBar from './ProblemNavBar'
import Timer from './Timer/Timer'

type HomeNavBarProps = {
  homePage?: boolean
  problemId?: string
}

export default function HomeNavBar({ homePage, problemId }: HomeNavBarProps) {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const [authAtoms, setAuthAtoms] = useRecoilState(useAuthAtom)
  const handleOnGoToLogin = () => {
    console.log(authAtoms)
    setAuthAtoms((prev) => ({ ...prev, targetPage: 'login', isOpen: true }))
    console.log(authAtoms)
    router.push('/auth')
  }

  return (
    <div className="flex items-center justify-between bg-dark-layer-1 h-[60px] px-12">
      <div className="flex items-center w-[100px]">
        <Link href="/">
          <Image src={navBarImage} alt="navbar image" className="w-full" />
        </Link>
      </div>
      {homePage && (
        <div className="flex items-center gap-x-6">
          <ProblemNavBar problemId={problemId} />
          <Timer />
        </div>
      )}
      <div className="flex items-center">
        <Link
          href="https://github.com/mohamedahmed-cloud"
          target="_blank"
          className="hidden sm:block"
        >
          <Button
            name="support me"
            className="bg-dark-fill-3  hover:bg-zinc-950 text-brand-orange px-3 py-1.5 "
            type="button"
          />
        </Link>

        {!user ? (
          <Button
            name="Sing in"
            className="bg-dark-fill-3 ml-4 hover:bg-zinc-950 text-slate-300 hover:text-slate-100 px-3 py-1.5"
            type="button"
            onClick={() => handleOnGoToLogin()}
          />
        ) : (
          <>
            <div className="group  cursor-pointer relative mx-4">
              <Image src={Avatar} alt="user Image" className="w-8 h-8 " />
              <div
                className="absolute top-10 right-[-40px] scale-0 group-hover:scale-100
                            transition duration-300 ease-in-out bg-zinc-950 px-3 py-1.5 rounded-lg z-10
                            "
              >
                <p className="text-brand-orange">{user?.email}</p>
              </div>
            </div>
            <Logout />
          </>
        )}
      </div>
    </div>
  )
}

import { FiLogOut } from 'react-icons/fi'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/firebase'

export default function Logout() {
  const [signOut] = useSignOut(auth)
  const handleLogout = async () => {
    await signOut()
  }

  return (
    <div
      className="text-brand-orange bg-dark-fill-3 px-3 py-1.5 rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      <FiLogOut />
    </div>
  )
}

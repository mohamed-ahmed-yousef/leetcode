import { useEffect } from 'react'
import { useAuthAtom } from '../../atoms/authAtom'
import { useSetRecoilState } from 'recoil'

export const HandleCloseModal = () => {
  const setAuthAtom = useSetRecoilState(useAuthAtom)
  const handleCloseModal = () => {
    setAuthAtom((prev) => ({ ...prev, isOpen: false, targetPage: 'login' }))
  }
  useEffect(() => {
    const handleESC = (e: { key: string }) => {
      if (e.key == 'Escape') {
        handleCloseModal()
      }
    }
    addEventListener('keydown', handleESC)
    return () => {
      removeEventListener('keydown', handleESC)
    }
  }, [])
  return handleCloseModal
}

import { useEffect } from 'react'
import { useAuthAtom } from '../../atoms/authAtom'
import { useSetRecoilState } from 'recoil'

export const HandleCloseModal = () => {
  const setAuthAtom = useSetRecoilState(useAuthAtom)
  const handleCloseModal = () => {
    setAuthAtom((prev) => ({ ...prev, isOpen: false, targetPage: 'login' }))
  }
  useEffect(() => {
    const listenToKey = (e: { key: string }) => {
      if (e.key == 'Escape') {
        handleCloseModal()
      }
    }
    addEventListener('keydown', listenToKey)
    return () => {
      removeEventListener('keydown', listenToKey)
    }
  }, [])
  return handleCloseModal
}

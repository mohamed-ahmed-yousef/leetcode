'use client'

import { atom } from 'recoil'

type defaultValueProps = {
  isOpen: boolean
  targetPage: 'login' | 'register' | 'forgetPassword'
}

const defaultValues: defaultValueProps = {
  isOpen: false,
  targetPage: 'login',
}
export const useAuthAtom = atom({
  key: 'authAtom',
  default: defaultValues,
})

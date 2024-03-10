import { atom } from 'recoil'

import { StarterCode } from '@/types/problem'
type defaultValue = {
  starterCode: StarterCode
  problemId: string
}

export const starterCodeAtom = atom<defaultValue>({
  key: 'starterCodeAtom',
  default: {
    starterCode: {
      javascript: '',
      python: '',
      typescript: '',
    },
    problemId: '',
  },
})

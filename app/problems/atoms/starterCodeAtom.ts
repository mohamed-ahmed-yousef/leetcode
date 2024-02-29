import { atom } from 'recoil'

import { StarterCode } from '@/utils/types/problem'
type defaultValue = {
  starterCode: StarterCode
}

export const starterCodeAtom = atom<defaultValue>({
  key: 'starterCodeAtom',
  default: {
    starterCode: {
      javascript: '',
      python: '',
      typescript: '',
    },
  },
})

import { atom } from 'recoil'

type defaultValue = {
  starterCode: string[]
}

export const starterCodeAtom = atom<defaultValue>({
  key: 'starterCodeAtom',
  default: {
    starterCode: [],
  },
})

import { atom } from 'recoil'

type defaultValue = {
  testCase: string[][]
}

export const testCaseAtom = atom<defaultValue>({
  key: 'testCaseAtom',
  default: {
    testCase: [],
  },
})

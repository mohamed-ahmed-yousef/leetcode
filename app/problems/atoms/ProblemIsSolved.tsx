import { atom } from 'recoil'
type defaultValueProps = {
  isSolved: boolean
}
export const useProblemIsSolved = atom<defaultValueProps>({
  key: 'RefAtom',
  default: {
    isSolved: false,
  },
})

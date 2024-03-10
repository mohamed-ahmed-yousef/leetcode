import { atom } from 'recoil'
type defaultValueProps = {
  fontSize: number
}

export const useFontSize = atom<defaultValueProps>({
  key: 'fontSizeAtom',
  default: {
    fontSize: 14,
  },
})

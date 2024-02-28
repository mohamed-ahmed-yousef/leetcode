import { atom } from 'recoil'
type defaultValueProps = {
  hintRef: any
}
export const defaultValue: defaultValueProps = {
  hintRef: null,
}
export const useRefAtom = atom({
  key: 'RefAtom',
  default: defaultValue,
})

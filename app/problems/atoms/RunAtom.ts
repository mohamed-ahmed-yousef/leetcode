import { atom } from 'recoil'

export type defaultValuesProps = {
  isRun: boolean
}

export const isRunOnlineCompilerAtom = atom<defaultValuesProps>({
  key: 'online-compiler-run',
  default: {
    isRun: false,
  },
})

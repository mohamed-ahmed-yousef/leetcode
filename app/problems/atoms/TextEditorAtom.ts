import { atom } from 'recoil'

type textEditorAtomProps = {
  userCode: string
  userLang: string
}

export const textEditorAtom = atom<textEditorAtomProps>({
  key: 'textEditorAtom',
  default: {
    userCode: '',
    userLang: '',
  },
})

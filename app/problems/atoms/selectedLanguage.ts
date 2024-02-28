import { atom } from 'recoil'

type defaultValue = {
  lang: string
}

export const selectedLanguageAtom = atom<defaultValue>({
  key: 'selectedLanguageAtom',
  default: {
    lang: 'python',
  },
})

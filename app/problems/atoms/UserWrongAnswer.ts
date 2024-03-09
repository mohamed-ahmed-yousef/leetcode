import { atom } from 'recoil'

export type UserWrongAnswerAtomProps = {
  userWrongAnswer:
    | {
        userOutput: string[]
        correctOutput: string[]
        input: string[]
        testCaseNumber: number
      }[]
    | string
  type: string
  error?: string
}

export const userWrongAnswerAtom = atom<UserWrongAnswerAtomProps>({
  key: 'userWrongAnswerAtom',
  default: {
    userWrongAnswer: [
      {
        userOutput: [],
        correctOutput: [],
        testCaseNumber: 0,
        input: [],
      },
    ],
    type: '',
    error: '',
  },
})

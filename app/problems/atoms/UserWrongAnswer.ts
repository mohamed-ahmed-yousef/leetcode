import { atom } from 'recoil'

export type UserWrongAnswerAtomProps = {
  userWrongAnswer: {
    userOutput: string[]
    correctOutput: string[]
    testCaseNumber: number
  }[]
  type: string
}

export const userWrongAnswerAtom = atom<UserWrongAnswerAtomProps>({
  key: 'userWrongAnswerAtom',
  default: {
    userWrongAnswer: [
      {
        userOutput: [],
        correctOutput: [],
        testCaseNumber: 0,
      },
    ],
    type: '',
  },
})

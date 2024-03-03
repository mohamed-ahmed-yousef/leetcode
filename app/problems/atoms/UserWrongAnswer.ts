import { atom } from 'recoil'
type UserWrongAnswerAtomProps = {
  userWrongAnswer: {
    userOutput: string[]
    correctOutput: string[]
    testCaseNumber: number
  }[]
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
  },
})

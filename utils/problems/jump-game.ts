import { Problem } from '../types/problem'
import {
  JSStarterCodeJumpGame,
  PyStarterCodeJumpGame,
  TSStarterCodeJumpGame,
} from '../starterCode/jump-game'
import { topics } from '../TopicsAndHints/jump-game'
import { testCase } from '../testcases/jump-game'

export const jumpGame: Problem = {
  id: 'jump-game',
  title: 'Jump Game',
  difficulty: 'Medium',
  problemStatement: [
    [
      { text: 'You are given an integer array ', code: 'nums' },
      { text: 'You are initially positioned at the ' },
      { boldText: 'first index ' },
      {
        text: 'and each element in the array represents your maximum jump length at that position.',
      },
    ],
    [
      { text: 'Return ', code: 'true ' },
      { text: ' if you can reach the last index, or', code: 'false' },
      { text: 'otherwise.' },
    ],
  ],
  examples: [
    {
      id: 1,
      input: 'nums = [2,3,1,1,4] ',
      output: 'true ',
      explanation:
        'Jump 1 step from index 0 to 1, then 3 steps to the last index.',
    },
    {
      id: 2,
      input: 'nums = [3,2,1,0,4] ',
      output: 'false ',
      explanation:
        'You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.',
    },
  ],
  constraints: {
    rangeConstraints: ['1 <= nums.length <= 10^4', '0 <= nums[i] <= 10^5'],
    otherConstraints: [],
  },
  starterCode: {
    javascript: JSStarterCodeJumpGame,
    python: PyStarterCodeJumpGame,
    typescript: TSStarterCodeJumpGame,
  },
  topics,
  testCase,
}

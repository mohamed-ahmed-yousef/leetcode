import { Problem } from '../types/problem'
import {
  JSStarterCodeTwoSum,
  PyStarterCodeTwoSum,
  TSStarterCodeTwoSum,
} from '../starterCode/two-sum'

export const twoSum: Problem = {
  id: 'two-sum',
  title: '1. Two Sum',
  difficulty: 'Easy',
  problemStatement: [
    [
      { text: ' Given an array of integers', code: 'nums' },
      { text: 'and an integer', code: 'target' },
      { text: ', return ', code: 'target' },
      {
        text: 'return indices of the two numbers such that they add up to',
        code: 'target',
      },
    ],

    [
      { text: 'You may assume that each input would have' },
      { boldText: 'exactly one solution' },
      { text: 'and you may not use thesame element twice.' },
    ],
    [{ text: 'You can return the answer in any order.' }],
  ],

  examples: [
    {
      id: 1,

      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    {
      id: 2,
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
      explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].',
    },
    {
      id: 3,
      input: ' nums = [3,3], target = 6',
      output: '[0,1]',
    },
  ],
  constraints: {
    rangeConstraints: [
      '2 ≤ nums.length ≤ 10',
      '-10 ≤ nums[i] ≤ 10',
      '-10 ≤ target ≤ 10',
    ],
    otherConstraints: [[{ boldText: 'Only one valid answer exists.' }]],
  },
  starterCode: {
    javascript: JSStarterCodeTwoSum,
    python: PyStarterCodeTwoSum,
    typescript: TSStarterCodeTwoSum,
  },
}

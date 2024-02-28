import { Problem } from '../types/problem'
import {
  JSStarterCodeSubsets,
  PyStarterCodeSubsets,
  TSStarterCodeSubsets,
} from '../starterCode/subsets'
export const SubSet: Problem = {
  id: 'subsets',
  title: 'Subsets',
  difficulty: 'Medium',
  problemStatement: [
    [
      {
        text: 'Given an integer array',
        code: 'nums ',
      },
      {
        text: 'of ',
        boldText: 'unique ',
      },
      {
        text: 'elements, return all possible subset (the power set).',
      },
    ],
    [
      {
        text: 'The solution set',
        boldText: 'must not',
      },
      {
        text: 'contain duplicate subsets. Return the solution in',
        boldText: 'any order',
      },
      {
        text: '.',
      },
    ],
  ],
  examples: [
    {
      id: 1,
      input: 'nums = [1,2,3]',
      output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
    },
    {
      id: 3,
      input: 'nums = [0]',
      output: '[[],[0]]',
    },
  ],
  constraints: {
    rangeConstraints: ['1 <= nums.length <= 10', '-10 <= nums[i] <= 10'],
    otherConstraints: [
      [
        {
          text: 'All the numbers of ',
          code: 'nums',
        },
        {
          text: ' are ',
        },
        {
          boldText: ' unique',
          text: '.',
        },
      ],
    ],
  },

  starterCode: {
    javascript: JSStarterCodeSubsets,
    python: PyStarterCodeSubsets,
    typescript: TSStarterCodeSubsets,
  },
}

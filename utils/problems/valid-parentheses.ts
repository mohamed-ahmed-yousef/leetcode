import { Problem } from '../types/problem'
import {
  JSStarterCodeValidParentheses,
  PyStarterCodeValidParentheses,
  TSStarterCodeValidParentheses,
} from '../starterCode/valid-parentheses'
import { topics } from '../TopicsAndHints/valid-parentheses'
import { testCase } from '../testcases/valid-parentheses'

export const ValidParentheses: Problem = {
  id: 'valid-parentheses',
  title: 'Valid Parentheses',
  difficulty: 'Easy',

  problemStatement: [
    [
      { text: 'Given a string', code: 's' },
      { text: 'containing just the characters', code: "'('" },
      { text: ',', code: "')'" },
      { text: ',', code: "'{'" },
      { text: ',', code: "'['" },
      { text: 'and', code: "']'" },
      { text: ', determine if the input string is valid.' },
    ],
    [{ text: 'An input string is valid if:' }],
    [{ text: 'Open brackets must be closed by the same type of brackets.' }],
    [{ text: 'Open brackets must be closed in the correct order.' }],
    [
      {
        text: 'Every close bracket has a corresponding open bracket of the same type.',
      },
    ],
  ],
  examples: [
    {
      id: 1,
      input: 's = "()" ',
      output: true,
    },
    {
      id: 2,
      input: 's = "()[]{}" ',
      output: true,
    },
    {
      id: 3,
      input: 's = "(]" ',
      output: false,
    },
    {
      id: 4,
      input: 's = "([)]" ',
      output: false,
    },
  ],
  constraints: {
    rangeConstraints: ['1 <= s.length <= 104'],
    otherConstraints: [
      [
        { code: 's' },
        { text: 'consists of parentheses only', code: "'()[]{}'" },
        { text: '.' },
      ],
    ],
  },
  starterCode: {
    javascript: JSStarterCodeValidParentheses,
    python: PyStarterCodeValidParentheses,
    typescript: TSStarterCodeValidParentheses,
  },
  topics,
  testCase,
}

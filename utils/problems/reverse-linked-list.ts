import { Problem } from '../types/problem'

export const reverseLinkedList: Problem = {
  id: 'reverse-linked-list',
  title: '2. Reverse Linked List',
  problemStatement: '',
  examples: [
    {
      id: 0,
      input: 'head = [1,2,3,4,5]',
      output: '[5,4,3,2,1]',
    },
    {
      id: 1,
      input: 'head = [1,2,3]',
      output: '[3,2,1]',
    },
    {
      id: 2,
      input: 'head = [1]',
      output: '[1]',
    },
  ],
  constraints: {
    rangeConstraints: [],
    otherConstraints: [],
  },
}

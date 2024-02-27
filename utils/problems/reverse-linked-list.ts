import { Problem } from '../types/problem'
import LinkedList from './images/reverse-linked-list-1.jpg'
export const reverseLinkedList: Problem = {
  id: 'reverse-linked-list',
  title: '2. Reverse Linked List',
  problemStatement: '',
  examples: [
    {
      id: 0,
      input: 'head = [1,2,3,4,5]',
      output: '[5,4,3,2,1]',
      img: LinkedList,
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
    otherConstraints: [
      [
        {
          text: 'The number of nodes in the list is the range ',
          code: '[0, 5000]',
        },
        { text: '.' },
      ],
      [{ code: '-5000 <= Node.val <= 5000' }],
    ],
  },
}

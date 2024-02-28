import { Problem } from '../types/problem'
import {
  JSStarterCodeMaximumDepthOfBinaryTree,
  PyStarterCodeMaximumDepthOfBinaryTree,
  TSStarterCodeMaximumDepthOfBinaryTree,
} from '../starterCode/maximum-depth-of-binary-tree'
import MaximumDepthofBinaryTreeImg1 from './images/maximum-depth-of-binary-tree.jpg'

export const MaximumDepthOfBinaryTree: Problem = {
  id: 'maximum-depth-of-binary-tree',
  title: 'Maximum Depth of Binary Tree',
  difficulty: 'Easy',
  problemStatement: [
    [
      { text: 'Given the ', code: 'root' },
      { text: 'of a binary tree, return its maximum depth.' },
    ],
    [
      {
        text: "A binary tree's ",
        boldText: 'maximum depth',
      },
      {
        text: 'is the number of nodes along the longest path from the root node down to the farthest leaf node.',
      },
    ],
  ],
  examples: [
    {
      id: 1,
      input: 'root = [3,9,20,null,null,15,7]',
      output: '3',
      img: MaximumDepthofBinaryTreeImg1,
    },
    {
      id: 2,
      input: 'root = [1,null,2]',
      output: '2',
    },
  ],
  constraints: {
    rangeConstraints: [],
    otherConstraints: [
      [
        {
          text: 'The number of nodes in the tree is in the range [0, 104].',
          code: '[0, 104]',
        },
        {
          text: '.',
        },
      ],
      [
        {
          code: '-100 <= Node.val <= 100',
        },
      ],
    ],
  },
  starterCode: {
    javascript: JSStarterCodeMaximumDepthOfBinaryTree,
    python: PyStarterCodeMaximumDepthOfBinaryTree,
    typescript: TSStarterCodeMaximumDepthOfBinaryTree,
  },
}

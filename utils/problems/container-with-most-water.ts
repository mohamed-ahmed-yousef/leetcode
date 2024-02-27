import { Problem } from '../types/problem'

import ContainerWithMostWaterImg1 from './images/container-with-most-water.jpg'

export const ContainerWithMostWater: Problem = {
  id: 'container-with-most-water',
  title: 'Container With Most Water',
  difficulty: 'Medium',
  problemStatement: [
    [
      { text: 'You are given an integer array', code: 'height' },
      { text: 'of length', code: 'n' },
      { text: '. There are', code: 'n' },
      {
        text: ' vertical lines drawn such that the two endpoints of the',
        code: 'ith',
      },
      { text: ' line are', code: '(i, 0)' },
      { text: 'and', code: '(i, height[i])' },
      { text: '.' },
    ],
    [
      {
        text: 'Find two lines that together with the x-axis form a container, such that the container contains the most water.',
      },
    ],
    [{ text: 'Return the maximum amount of water a container can store.' }],
    [
      { boldText: 'Notice' },
      { text: ' that you may not slant the container.' },
    ],
  ],
  examples: [
    {
      id: 1,
      input: 'height = [1,8,6,2,5,4,8,3,7]',
      output: '49',
      explanation:
        'The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.',
      img: ContainerWithMostWaterImg1,
    },
    {
      id: 1,
      input: 'height = [1,1]',
      output: '1',
    },
  ],
  constraints: {
    rangeConstraints: [
      'n == height.length',
      '2 <= n <= 105',
      '0 <= height[i] <= 104',
    ],
    otherConstraints: [],
  },
}

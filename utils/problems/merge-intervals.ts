import { Problem } from '../types/problem'
import {
  JSStarterCodeMergeIntervals,
  PyStarterCodeMergeIntervals,
  TSStarterCodeMergeIntervals,
} from '../starterCode/merge-intervals'
export const MergeIntervals: Problem = {
  id: 'merge-intervals',
  title: 'Merge Intervals',
  difficulty: 'Medium',
  problemStatement: [
    [
      { text: 'Given an array of', code: 'intervals' },
      { text: ' where ', code: 'intervals[i] = [starti, endi]' },
      {
        text: ', merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
      },
    ],
  ],
  examples: [
    {
      id: 1,
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      explanation:
        'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].',
    },
    {
      id: 2,
      input: 'intervals = [[1,4],[4,5]]',
      output: '[[1,5]]',
      explanation: 'Intervals [1,4] and [4,5] are considered overlapping.',
    },
  ],
  constraints: {
    rangeConstraints: [
      '1 <= intervals.length <= 104',
      'intervals[i].length == 2',
      '0 <= starti <= endi <= 104',
    ],
    otherConstraints: [],
  },
  starterCode: {
    javascript: JSStarterCodeMergeIntervals,
    python: PyStarterCodeMergeIntervals,
    typescript: TSStarterCodeMergeIntervals,
  },
}

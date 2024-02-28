import { BestTimetoBuyandSellStock } from './best-time-to-buy-and-sell-stock'
import { ContainerWithMostWater } from './container-with-most-water'
import { jumpGame } from './jump-game'
import { MaximumDepthOfBinaryTree } from './maximum-depth-of-binary-tree'
import { MergeIntervals } from './merge-intervals'
import { reverseLinkedList } from './reverse-linked-list'
import { SearchA2DMatrix } from './search-a-2d-matrix'
import { SubSet } from './subsets'
import { twoSum } from './two-sum'
import { ValidParentheses } from './valid-parentheses'

export const getProblems = {
  'two-sum': twoSum,
  'reverse-linked-list': reverseLinkedList,
  'jump-game': jumpGame,
  'valid-parentheses': ValidParentheses,
  'search-a-2d-matrix': SearchA2DMatrix,
  'container-with-most-water': ContainerWithMostWater,
  'merge-intervals': MergeIntervals,
  'maximum-depth-of-binary-tree': MaximumDepthOfBinaryTree,
  'best-time-to-buy-and-sell-stock': BestTimetoBuyandSellStock,
  subsets: SubSet,
}

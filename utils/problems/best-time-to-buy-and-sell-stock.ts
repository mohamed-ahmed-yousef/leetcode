import { Problem } from '../types/problem'
import {
  JSStarterCodeBestTimeToBuyAndSell,
  PyStarterCodeBestTimeToBuyAndSell,
  TSStarterCodeBestTimeToBuyAndSell,
} from '../starterCode/best-time-to-buy-and-sell-stock'
import { topics } from '../TopicsAndHints/best-time-to-buy-and-sell-stock'
import { testCase } from '../testcases/best-time-to-buy-and-sell-stock'
export const BestTimetoBuyandSellStock: Problem = {
  id: 'best-time-to-buy-and-sell-stock',
  title: 'Best Time to Buy and Sell Stock',
  difficulty: 'Easy',
  problemStatement: [
    [
      { text: 'You are given an array', code: 'prices ' },
      { text: 'where ', code: 'prices[i]' },
      { text: 'is the price of a given stock on the', code: 'ith' },
      { text: 'day.' },
    ],
    [
      {
        text: 'You want to maximize your profit by choosing a',
        boldText: 'single day',
      },
      {
        text: ' to buy one stock and choosing a',
        boldText: 'different day in the future',
      },
      { text: 'to sell that stock.' },
    ],
    [
      {
        text: 'Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return',
        code: '0',
      },
    ],
  ],
  examples: [
    {
      id: 1,
      input: 'prices = [7,1,5,3,6,4]',
      output: '5',
      explanation:
        'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.',
      note: 'Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.',
    },
    {
      id: 2,
      input: ' prices = [7,6,4,3,1]',
      output: '0',
      explanation:
        'In this case, no transactions are done and the max profit = 0.',
    },
  ],
  constraints: {
    rangeConstraints: ['1 <= prices.length <= 105', '0 <= prices[i] <= 104'],
    otherConstraints: [],
  },
  starterCode: {
    javascript: JSStarterCodeBestTimeToBuyAndSell,
    python: PyStarterCodeBestTimeToBuyAndSell,
    typescript: TSStarterCodeBestTimeToBuyAndSell,
  },
  topics,
  testCase,
}

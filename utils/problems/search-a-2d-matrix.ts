export const SearchA2DMatrix = {
  id: 'search-a-2d-matrix',
  title: 'Search a 2D Matrix',
  problemStatement: [
    [
      {
        text: 'Write an efficient algorithm that searches for a value in an ',
        code: 'm x n ',
      },
      { text: 'matrix. This matrix has the following properties:' },
    ],
    [{ liText: 'Integers in each row are sorted from left to right.' }],

    [
      {
        liText:
          'The first integer of each row is greater than the last integer of the previous row.',
      },
    ],
    [
      { text: 'Given ', code: 'matrix' },
      { text: ', an', code: 'm x n' },
      { text: 'matrix, and', code: 'target' },
      { text: ', return', code: 'true ' },
      { text: 'if ', code: 'target ' },
      { text: ' is in the matrix, and', code: 'false ' },
      { text: 'otherwise.' },
    ],
  ],
  examples: [
    {
      id: 1,
      input: 'matrix = [[1,3,5,7], [10,11,16,20], [23,30,34,60]], target = 3 ',
      output: 'true ',
    },
    {
      id: 2,
      input:
        ' matrix = [[1,3,5,7], [10,11,16,20], [23,30,34,60]], target = 13 ',
      output: 'false',
    },
    {
      id: 3,
      input: 'matrix = [[1]], target = 1 ',
      output: ' true ',
    },
  ],
  constraints: {
    rangeConstraints: [
      'm == matrix.length',
      'n == matrix[i].length',
      '1 <= m, n <= 100',
      '-104 <= matrix[i][j], target <= 104',
    ],
  },
}

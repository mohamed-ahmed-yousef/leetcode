export const TwoSum = {
  test_cases: [
    {
      input: [[2, 7, 11, 15], 9],
      output: [0, 1],
    },
    {
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
    {
      input: [[3, 3], 6],
      output: [0, 1],
    },
  ],
  all_test_case: [
    {
      input: [[2, 7, 11, 15], 9],
      output: [0, 1],
    },
    {
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
    {
      input: [[3, 3], 6],
      output: [0, 1],
    },
    {
      input: [[-3, 4, 3, 90], 0],
      output: [0, 2],
    },
    {
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
  ],
}
export function GetWrapperCode(code: string, lang: string) {
  const all_test_case = TwoSum.all_test_case
  switch (lang) {
    case 'python':
      return `
from typing import List
${code}
solutionList = []
slv = Solution()
all_test_case = ${JSON.stringify(all_test_case)}
for i in all_test_case:
    solutionList.append(slv.twoSum(i["input"][0],i["input"][1]))
print(solutionList)
            `

    default:
      return code
  }
}

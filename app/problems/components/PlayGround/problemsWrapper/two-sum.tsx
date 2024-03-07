export const TwoSum = {
  runTestCases: [
    {
      order: 1,
      input: [[2, 7, 11, 15], 9],
      output: [0, 1],
    },
    {
      order: 2,
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
    {
      order: 3,
      input: [[3, 3], 6],
      output: [0, 1],
    },
  ],
  allTestCase: [
    {
      order: 1,
      input: [[2, 7, 11, 15], 9],
      output: [0, 1],
    },
    {
      order: 2,
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
    {
      order: 3,
      input: [[3, 3], 6],
      output: [0, 1],
    },
    {
      order: 4,
      input: [[-3, 4, 3, 90], 0],
      output: [0, 2],
    },
    {
      order: 5,
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
    {
      order: 6,
      input: [[3, -3, 6, 3], 6],
      output: [0, 1],
    },
  ],
}
export function GetWrapperCode(code: string, lang: string, type: string) {
  let testCase = null
  if (type === 'run') {
    testCase = TwoSum.runTestCases
  } else {
    testCase = TwoSum.allTestCase
  }
  console.log(testCase, lang, 'from twosum', code)
  switch (lang) {
    case 'python':
      return `
from typing import List
${code}
solutionList = []
slv = Solution()
all_test_case = ${JSON.stringify(testCase)}
for i in all_test_case:
    solutionList.append(
      {"testCaseNumber":i["order"], "correctOutput":i["output"], "userOutput":  slv.twoSum(i["input"][0],i["input"][1]) })
print(solutionList)
`
    case 'javascript':
      return `
            ${code}
        let all_test_case = ${JSON.stringify(testCase)}
        let solutionList = []
        for(let i of all_test_case) {
          solutionList.push(
            {"testCaseNumber":i["order"], "correctOutput":i["output"], "userOutput":  twoSum(i["input"][0],i["input"][1]) })
        
        }
        console.log(solutionList)
        `
    case 'typescript':
      return `
            ${code}
        let all_test_case = ${JSON.stringify(testCase)}
        let solutionList = []
        for(let i of all_test_case) {
          solutionList.push(
            {"testCaseNumber":i["order"], "correctOutput":i["output"], "userOutput":   twoSum(i["input"][0] as number[],i["input"][1] as number) })
        
        }
        console.log(solutionList)
        `

    default:
      return code
  }
}

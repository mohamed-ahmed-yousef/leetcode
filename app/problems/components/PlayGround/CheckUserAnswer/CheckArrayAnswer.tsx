type CheckUserAnswer = {
  testCaseNumber: number
  correctOutput: string[]
  userOutput: string[]
}[]
export function CheckArrayAnswer(UserOutput: CheckUserAnswer) {
  console.log('from check array', UserOutput)
  let wrongAnswer = []
  for (let currentTest of UserOutput) {
    const { testCaseNumber, correctOutput, userOutput } = currentTest
    if (!compareArrays(userOutput, correctOutput)) {
      wrongAnswer.push(currentTest)
    }
  }
  return wrongAnswer
}
function compareArrays(arr1: string[], arr2: string[]) {
  console.log('arr1, arr2', arr1, arr2)
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

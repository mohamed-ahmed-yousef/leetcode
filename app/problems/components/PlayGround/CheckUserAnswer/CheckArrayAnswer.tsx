type CheckUserAnswer = {
  testCaseNumber: number
  correctOutput: string[]
  userOutput: string[]
}[]
export function CheckArrayAnswer(UserOutput: CheckUserAnswer) {
  let wrongAnswer = []
  for (let currentTest of UserOutput) {
    const { correctOutput, userOutput } = currentTest
    if (!compareArrays(userOutput, correctOutput)) {
      wrongAnswer.push(currentTest)
    }
  }
  return wrongAnswer
}
function compareArrays(arr1: string[], arr2: string[]) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

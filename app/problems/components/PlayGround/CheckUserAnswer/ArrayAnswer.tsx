type CheckUserAnswer = {
  testCaseNumber: number
  correctOutput: string[]
  userOutput: string[]
}[]
export function CheckUserAnswerForArray(UserOutput: CheckUserAnswer) {
  let wrongAnswer = []
  for (let currentTest of UserOutput) {
    const { testCaseNumber, correctOutput, userOutput } = currentTest
    if (!compareArrays(userOutput, correctOutput)) {
      wrongAnswer.push(currentTest)
    }
  }
  console.log(wrongAnswer)
}
function compareArrays(arr1: string[], arr2: string[]) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

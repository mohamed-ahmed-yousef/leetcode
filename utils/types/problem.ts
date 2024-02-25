type Example = {
  id: number
  input: string
  output: string
  explanation?: string
  img?: string
}
type Constraints = {
  rangeConstraints: string[]
  otherConstraints: string[]
}
export type Problem = {
  id: string
  title: string
  problemStatement: any
  examples: Example[]
  constraints: Constraints
}

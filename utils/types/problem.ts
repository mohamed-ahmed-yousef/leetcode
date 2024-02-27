import { StaticImageData } from 'next/image'

type Example = {
  id: number
  input: string
  output: string
  explanation?: string
  img?: StaticImageData
}
type Constraints = {
  rangeConstraints: string[]
  otherConstraints: any
}
export type Problem = {
  id: string
  title: string
  problemStatement: any
  examples: Example[]
  constraints: Constraints
}

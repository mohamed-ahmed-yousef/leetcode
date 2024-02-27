import { StaticImageData } from 'next/image'

export type ExampleProps = {
  id: number | string
  input: string
  output: string
  explanation?: string
  img?: StaticImageData
  key?: number | string
}
type Constraints = {
  rangeConstraints: string[]
  otherConstraints: any
}
export type Problem = {
  id: string
  title: string
  problemStatement: any
  examples: ExampleProps[]
  constraints: Constraints
}

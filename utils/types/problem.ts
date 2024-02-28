import { StaticImageData } from 'next/image'

export type ExampleProps = {
  id: number | string
  input: string
  output: string | boolean
  explanation?: string
  img?: StaticImageData
  key?: number | string
  note?: string
}
type Constraints = {
  rangeConstraints: string[]
  otherConstraints: any
}
export type StarterCode = {
  javascript: string
  python: string
  typescript: string
}
export type Problem = {
  id: string
  title: string
  problemStatement: any
  examples: ExampleProps[]
  constraints: Constraints
  difficulty: string
  starterCode: StarterCode
}

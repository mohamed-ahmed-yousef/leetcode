import Code from './Code'
type DescriptionProps = {
  text: string
  code?: string
  boldText?: string
}
export default function Decription({ text, code, boldText }: DescriptionProps) {
  return (
    <>
      <span className="text-gray-300 text-[16px] mx-[.5px]"> {text} </span>
      {code && <Code text={code} />}
      {boldText && (
        <span className="text-gray-100 font-semibold mx-[.5px]">
          {' '}
          {boldText}
        </span>
      )}
    </>
  )
}

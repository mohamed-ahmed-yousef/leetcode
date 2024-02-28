import Code from './Code'
type DescriptionProps = {
  text: string
  code?: string
  boldText?: string
  liText?: string
}
export default function ProblemStatement({
  text,
  code,
  boldText,
  liText,
}: DescriptionProps) {
  return (
    <>
      {text && (
        <span className="text-gray-300 text-[16px] mx-[.5px]"> {text} </span>
      )}
      {code && <Code text={code} />}
      {boldText && (
        <span className="text-gray-100 font-semibold mx-[.5px]">
          {' '}
          {boldText}
        </span>
      )}
      {liText && <li className=" my-0 unset-all text-gray-300"> {liText} </li>}
    </>
  )
}

import Code from './Code'
type DescriptionProps = {
  text: string[]
  code?: string[]
  boldText?: string[]
}
export default function Decription({ text, code, boldText }: DescriptionProps) {
  return (
    <div className="mb-1.5">
      {text.map((txt, indx) => (
        <div key={`${txt}`} className="inline">
          <span className="text-gray-300 text-[16px] mx-[.5px]"> {txt} </span>
          {code && code[indx] !== undefined && <Code text={code[indx]} />}
          {boldText && boldText[indx] !== undefined && (
            <span className="text-gray-100 font-semibold mx-[.5px]">
              {' '}
              {boldText[indx]}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

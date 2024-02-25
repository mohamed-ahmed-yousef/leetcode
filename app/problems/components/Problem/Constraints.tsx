import Code from './Code'
type ConstraintsProps = {
  rangeConstraints: string[]
  otherConstraints: string[]
}
export default function Constraints({
  rangeConstraints,
  otherConstraints,
}: ConstraintsProps) {
  return (
    <div className="text-gray-300  mt-5">
      <h1 className="text-gray-200 text-md font-semibold">Constraints:</h1>
      <ul className="list-disc pl-8 mt-3">
        {rangeConstraints.map((item: string) => (
          <li className="mt-[1.5px]" key="item">
            {' '}
            <Code text={item} />
          </li>
        ))}
        {otherConstraints.map((item: string) => (
          <li className="mt-[1.5px] text-gray-100 font-semibold" key="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

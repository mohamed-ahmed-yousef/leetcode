import { text } from 'stream/consumers'
import Code from './Code'
type ConstraintsProps = {
  rangeConstraints: string[]
  otherConstraints: any
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

        {Array.isArray(otherConstraints) && (
          <div>
            {otherConstraints.map(
              (items) =>
                Array.isArray(items) && (
                  <li
                    className={`${items?.map((item) => `${item?.text}-${item?.code}`).join(' ')}`}
                    key={Math.random().toString(36).substring(2, 15)}
                  >
                    {items.map((item) => (
                      <span key={item.text || item.code}>
                        <p className="mt-[1.5px] text-gray-100 font-semibold inline">
                          {item?.textBold}
                        </p>
                        <p className="inline">{item.text}</p>
                        {item?.code && <Code text={item?.code} />}
                      </span>
                    ))}
                  </li>
                )
            )}
          </div>
        )}
      </ul>
    </div>
  )
}

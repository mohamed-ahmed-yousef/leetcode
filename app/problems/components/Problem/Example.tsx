import Image from 'next/image'
import { StaticImageData } from 'next/image'
type ExampleProps = {
  input: string
  output: string
  explanation?: string
  indx: number
  img?: StaticImageData
}
export default function Example({
  indx,
  input,
  output,
  explanation,
  img,
}: ExampleProps) {
  return (
    <div className="text-gray-300">
      <h1 className="lg:text-[18px] mt-5 mb-2 font-semibold">
        Example {indx + 1}:
      </h1>
      {img && (
        <Image
          src={img}
          alt="problem explanation "
          width={400}
          height={400}
          className="my-2 ml-1 rounded"
        />
      )}
      <pre className="bg-dark-fill-2  rounded-md p-2 lg:p-3 whitespace-pre-wrap">
        <div>
          <span className="font-semibold text-gray-100 lg:text-[16px] text-sm">
            Input:{' '}
          </span>
          <span>{input} </span>
        </div>
        <div>
          <span className="font-semibold text-gray-100 lg:text-[16px] text-sm">
            Output:{' '}
          </span>
          <span>{output} </span>
        </div>
        {explanation && (
          <div>
            <span className="font-semibold text-gray-100 lg:text-[16px] text-sm">
              Explanation:{' '}
            </span>
            <span>{explanation} </span>
          </div>
        )}
      </pre>
    </div>
  )
}

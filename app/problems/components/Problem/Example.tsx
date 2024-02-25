type ExampleProps = {
  input: string
  output: string
  explanation?: string
  header: string
}
export default function Example({
  header,
  input,
  output,
  explanation,
}: ExampleProps) {
  return (
    <div className="text-gray-300">
      <h1 className="lg:text-[18px] mt-5 mb-2 font-semibold">{header}</h1>
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
        <div>
          <span className="font-semibold text-gray-100 lg:text-[16px] text-sm">
            Explanation:{' '}
          </span>
          <span>{explanation} </span>
        </div>
      </pre>
    </div>
  )
}

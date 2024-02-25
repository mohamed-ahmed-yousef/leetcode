type OneTestCaseProps = {
  input: string
  output: string
}

export default function OneTestCase({ input, output }: OneTestCaseProps) {
  return (
    <div className="text-gray-300">
      <div>
        <h3 className="text-gray-100 font-medium text-base mb-1 ml-1">Input</h3>
        <pre className="bg-dark-fill-2  rounded-md p-2 lg:p-3 whitespace-pre-wrap">
          {input}
        </pre>
      </div>
      <div className="mt-2">
        <h3 className="text-gray-100 font-medium text-base mb-1 ml-1">
          Output
        </h3>
        <pre className="bg-dark-fill-2  rounded-md p-2 lg:p-3 whitespace-pre-wrap">
          {output}
        </pre>
      </div>
    </div>
  )
}

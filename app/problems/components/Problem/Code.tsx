type CodeProps = {
  text: string
}
export default function Code({ text }: CodeProps) {
  return (
    <code
      className="mb-3 border-2 px-[1px]  rounded   border-code-dark-2 bg-code-dark-1
        text-gray-300 w-fit font-medium text-sm mx-[2px] "
    >
      {text}
    </code>
  )
}

type CaseButtonProps = {
  number: number
  selectedTest: boolean
}
export default function CaseButton({ number, selectedTest }: CaseButtonProps) {
  return (
    <div>
      <p
        className={`py-1 px-2 text-gray-200 hover:text-gray-100 
            hover:bg-dark-fill-3 w-fit rounded-md  ${selectedTest && 'bg-dark-fill-3'}
            `}
      >
        Case {number}
      </p>
    </div>
  )
}

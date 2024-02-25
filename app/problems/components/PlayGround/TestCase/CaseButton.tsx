type CaseButtonProps = {
  number: number
}
export default function CaseButton({ number }: CaseButtonProps) {
  return (
    <div>
      <p
        className="py-1 px-2 text-gray-200 hover:text-gray-100  bg-dark-fill-3 w-fit rounded-md 
            hover:bg-dark-fill-2"
      >
        Case {number}
      </p>
    </div>
  )
}

type ButtonProps = {
  name: string
  type: 'button' | 'submit'
  className: string
}
export default function Button({ name, type, className }: ButtonProps) {
  return (
    <button
      type={type}
      className={`py-3 px-4  gap-x-2  font-semibold rounded-lg border border-transparent
            bg-brand-orange text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none 
            transition duration-300 ease-in-out text-center 
            ${className}
            `}
    >
      {name}
    </button>
  )
}

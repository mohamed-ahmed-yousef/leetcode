type ButtonProps = {
  name: string
  type: 'button' | 'submit'
  className: string
  onClick?: any
  disabled?: boolean
}
export default function Button({
  name,
  type,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`  font-semibold rounded-lg border border-transparent
            bg-brand-orange  hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none 
            transition duration-300 ease-in-out text-center 
            ${className}
            `}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

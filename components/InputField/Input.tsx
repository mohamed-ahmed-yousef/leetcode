type InputFieldProps = {
  name: string
  type: 'email' | 'password' | 'text'
  placeholder: string
}

export default function InputField({
  name,
  type,
  placeholder,
}: InputFieldProps) {
  return (
    <>
      <label
        htmlFor={name}
        className="cursor-pointer block text-sm font-medium mb-2 text-slate-300 mt-4"
      >
        {name}
      </label>
      <input
        type={type}
        id={name}
        className="py-3 px-4 block w-full disabled:opacity-50 disabled:pointer-events-none 
            bg-zinc-700 border-zinc-700 text-gray-500  
            rounded-lg
            "
        placeholder={placeholder}
      />
    </>
  )
}

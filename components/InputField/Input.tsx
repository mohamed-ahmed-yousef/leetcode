type InputFieldProps = {
  name: string
  type: 'email' | 'password' | 'text'
  placeholder: string
  id: string
  register: any
  errors: any
}

export default function InputField({
  name,
  type,
  placeholder,
  register,
  errors,
  id,
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
            bg-zinc-700 border-zinc-700 text-gray-300  
            rounded-lg
            "
        {...register(id)}
        placeholder={placeholder}
      />
      {errors[id]?.message ? (
        <p className="text-[14px] text-slate-200 ">{errors[id]?.message}</p>
      ) : (
        <p className="invisible text-[14px]"> hidden</p>
      )}
    </>
  )
}

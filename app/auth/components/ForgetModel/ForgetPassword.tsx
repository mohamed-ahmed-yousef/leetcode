'use client'
import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/Input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

export default function ForgetPassword() {
  const scheme = z.object({
    email: z.string().email('Invalid email'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(scheme),
  })
  const handleSubmitForgetPassword = (data: any) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(handleSubmitForgetPassword)} noValidate>
      <h1 className="text-white text-2xl">Reset password</h1>
      <p className="text-slate-300 mt-3">
        Forgotten your password? Enter your e-mail address below, and we&apos;ll
        send you an e-mail allowing you to reset it.
      </p>
      <InputField
        name="Email"
        id="email"
        type="email"
        placeholder="example@gmail.com"
        register={register}
        errors={errors}
      />
      <Button
        type="submit"
        name="Reset password"
        className="mt-4 w-full text-md text-center text-white py-3 px-4  gap-x-2"
      />
      <DevTool control={control} />
    </form>
  )
}

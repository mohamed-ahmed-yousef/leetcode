'use client'
import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/Input'
import { useRecoilState } from 'recoil'
import { useAuthAtom } from '../../atoms/authAtom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Login() {
  const [authAtom, setAuthAtom] = useRecoilState(useAuthAtom)
  const handleClick = (targetPage: 'login' | 'register' | 'forgetPassword') => {
    setAuthAtom({ ...authAtom, targetPage })
  }

  const scheme = z.object({
    email: z.string().email('Invalid email'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(32, 'Password must be less than 32 characters long')
      // .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      // .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      // .regex(/[0-9]/, 'Password must contain at least one number')
      // .regex(/[^A-Za-z0-9 ]/, 'Password may contain special characters (e.g., !@#$%^&*)')
      .trim(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(scheme),
  })
  const handleSubmitLogin = (data: any) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)} noValidate>
      <h1 className="text-white text-2xl">Login to leetcode</h1>
      <InputField
        name="Email"
        type="email"
        placeholder="example@gmail.com"
        register={register}
        errors={errors}
        id="email"
      />
      <InputField
        name="Password"
        type="password"
        placeholder="********"
        register={register}
        errors={errors}
        id="password"
      />
      <Button
        type="submit"
        name="Login"
        className="mt-4 w-full text-md text-center"
      />

      <div className="text-right text-brand-orange mt-4">
        <button
          onClick={() => handleClick('forgetPassword')}
          className="hover:underline transition duration-150 ease-in-out"
        >
          forget password?{' '}
        </button>
      </div>
      <div className="flex mt-4 items-center">
        <p className="mr-1 text-white">Not registered?</p>
        <button
          className="text-brand-orange hover:underline transition duration-150 ease-in-out"
          onClick={() => handleClick('register')}
        >
          Create account
        </button>
      </div>
    </form>
  )
}

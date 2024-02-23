import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/Input'
import { useRecoilState } from 'recoil'
import { useAuthAtom } from '../../atoms/authAtom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [authAtom, setAuthAtom] = useRecoilState(useAuthAtom)
  const router = useRouter()
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const handleClick = (targetPage: 'login' | 'register' | 'forgetPassword') => {
    setAuthAtom({ ...authAtom, targetPage })
  }

  const scheme = z.object({
    email: z.string().email('Invalid email'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .trim(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(scheme),
  })
  const handleSubmitLogin = async (data: any) => {
    console.log(data)
    const singup = await signInWithEmailAndPassword(data.email, data.password)
    if (!singup) return
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)} noValidate>
      <h1 className="text-white text-2xl">Login to leetcode</h1>
      <p
        className={`text-sm text-zinc-950 text-center bg-red-500 rounded-lg mx-auto w-fit p-2 
       ${error?.message ? '' : 'invisible'} `}
      >
        {error?.message ? 'Invalid Email or Password' : ''}
      </p>
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
        name={loading ? 'Loading...' : 'Login'}
        className="mt-4 w-full text-md text-center  text-white py-3 px-4  gap-x-2"
        disabled={loading}
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

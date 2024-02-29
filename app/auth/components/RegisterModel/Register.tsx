import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/Input'
import { useRecoilState } from 'recoil'
import { useAuthAtom } from '../../atoms/authAtom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, fireStore } from '@/app/firebase/firebase'
import { useEffect } from 'react'
import { AuthToasterError, AuthToastLoading } from '@/components/Toast/Toast'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function Register() {
  const [authAtom, setAuthAtom] = useRecoilState(useAuthAtom)

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

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
    username: z.string().min(4),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(scheme),
  })
  const handleRegisterSubmit = async (data: any) => {
    console.log(data.email, data.password)
    try {
      const newUser = await createUserWithEmailAndPassword(
        data.email,
        data.password
      )
      if (!newUser) return
      setAuthAtom({ ...authAtom, targetPage: 'login' })
      AuthToastLoading('creating your account', 'loading')
      // for some security reason remove password when add user to firestore
      // let it as it's now for tests.
      await setDoc(doc(fireStore, 'users', newUser.user.uid), {
        ...data,
        likedProblems: [],
        dislikedProblems: [],
        starredProblems: [],
        solvedProblems: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        uid: newUser.user.uid,
      })
    } catch (error: any) {
      toast.dismiss('loading')
      console.log(error.message)
    } finally {
      toast.dismiss('loading')
    }
  }
  useEffect(() => {
    if (error?.message) {
      AuthToasterError('Email Already Exist')
    }
  }, [error])
  return (
    <form noValidate onSubmit={handleSubmit(handleRegisterSubmit)}>
      <h1 className="text-white text-2xl">Register to leetcode</h1>

      <InputField
        name="Email"
        type="email"
        placeholder="example@gmail.com"
        register={register}
        errors={errors}
        id="email"
      />
      <InputField
        name="Username"
        type="text"
        placeholder="Mohamed Yousef"
        register={register}
        errors={errors}
        id="username"
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
        name={loading ? 'loading...' : 'Register'}
        className="mt-4 w-full text-md text-center text-white py-3 px-4  gap-x-2"
        disabled={loading}
      />
      <div className="flex mt-4 items-center">
        <p className="mr-1 text-white">Already have an account?</p>
        <button
          className="text-brand-orange"
          onClick={() => handleClick('login')}
        >
          Login
        </button>
      </div>
    </form>
  )
}

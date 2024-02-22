import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/Input'
import { useRecoilState } from 'recoil'
import { useAuthAtom } from '../../atoms/authAtom'

export default function Login() {
  const [authAtom, setAuthAtom] = useRecoilState(useAuthAtom)
  const handleClick = (targetPage: 'login' | 'register' | 'forgetPassword') => {
    setAuthAtom({ ...authAtom, targetPage })
  }

  return (
    <div>
      <h1 className="text-white text-2xl">Login to leetcode</h1>
      <InputField name="Email" type="email" placeholder="example@gmail.com" />
      <InputField name="Password" type="password" placeholder="********" />
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
    </div>
  )
}

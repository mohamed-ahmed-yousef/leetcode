import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/Input'
import { useRecoilState } from 'recoil'
import { useAuthAtom } from '../../atoms/authAtom'

export default function Register() {
  const [authAtom, setAuthAtom] = useRecoilState(useAuthAtom)
  const handleClick = (targetPage: 'login' | 'register' | 'forgetPassword') => {
    setAuthAtom({ ...authAtom, targetPage })
  }
  return (
    <div>
      <h1 className="text-white text-2xl">Register to leetcode</h1>
      <InputField name="Email" type="email" placeholder="example@gmail.com" />
      <InputField name="Username" type="text" placeholder="Mohamed Yousef" />
      <InputField name="Password" type="password" placeholder="********" />
      <Button
        type="submit"
        name="Register"
        className="mt-4 w-full text-md text-center"
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
    </div>
  )
}

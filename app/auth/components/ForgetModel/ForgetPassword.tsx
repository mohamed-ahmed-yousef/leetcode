import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/Input'

export default function ForgetPassword() {
  return (
    <div>
      <h1 className="text-white text-2xl">Reset password</h1>
      <p className="text-slate-300 mt-3">
        Forgotten your password? Enter your e-mail address below, and we&apos;ll
        send you an e-mail allowing you to reset it.
      </p>
      <InputField name="Email" type="email" placeholder="example@gmail.com" />
      <Button
        type="submit"
        name="Reset password"
        className="mt-4 w-full text-md text-center"
      />
    </div>
  )
}

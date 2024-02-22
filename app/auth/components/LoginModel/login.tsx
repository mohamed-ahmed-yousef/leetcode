import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/Input";
import Link from "next/link";

export default function Login() {
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
        <Link
          href="#"
          className="hover:underline transition duration-150 ease-in-out"
        >
          forget password?{" "}
        </Link>
      </div>
      <div className="flex mt-4 items-center">
        <p className="mr-1 text-white">Not registered?</p>
        <Link href="#" className="text-brand-orange">
          Create account
        </Link>
      </div>
    </div>
  );
}

import { MdClose } from "react-icons/md";
import Login from "../LoginModel/login";
import Register from "../RegisterModel/Register";
import ForgetPassword from "../ForgetModel/ForgetPassword";
export default function Modal() {
  return (
    <>
      <div className="absolute bg-zinc-950 top-0 left-0 w-full h-full opacity-70"></div>
      <div
        className="absolute top-[50%] left-[50%] w-10/12 md:w-6/12 lg:w-4/12 sm:w-8/12 px-2 pb-4 pt-1
            bg-gradient-to-b from-brand-orange to-yellow-950 rounded-md transform -translate-x-[50%] -translate-y-[50%]"
      >
        <button className=" text-slate-100  flex justify-between w-full cursor-default">
          <div></div>
          <MdClose className="w-7 h-7 p-1 rounded-md hover:bg-zinc-900 transistion duration-300 cursor-pointer" />
        </button>
        <div className="p-3">
          {/* <Login /> */}
          {/* <Register /> */}
          <ForgetPassword />
        </div>
      </div>
    </>
  );
}

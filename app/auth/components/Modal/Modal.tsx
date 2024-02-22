import { MdClose } from "react-icons/md";

export default function Modal() {
  return (
    <>
      <div className="absolute bg-zinc-950 top-0 left-0 w-full h-full opacity-70"></div>
      <div
        className="absolute top-[50%] left-[50%] w-2/6 h-1/3 p-2
            bg-gradient-to-b from-brand-orange to-yellow-900  rounded-md  transform -translate-x-[50%] -translate-y-[50%]"
      >
        <button className=" text-slate-100  flex justify-between w-full ">
          <div></div>
          <MdClose className="w-7 h-7 p-1 rounded-md hover:bg-zinc-900 transistion duration-300 " />
        </button>
      </div>
    </>
  );
}

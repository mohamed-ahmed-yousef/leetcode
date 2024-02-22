import Image from "next/image";
import NavImage from "@/public/logo.png";

type NavBarProps = {};
export default function NavBar({}: NavBarProps) {
  return (
    <div
      className="flex items-center justify-between w-full h-[70px] px-5  
            "
    >
      <div className="w-[140px] cursor-pointer">
        <Image src={NavImage} alt="logo image" className="w-full" />
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-brand-orange text-slate-200 hover:bg-slate-200 
                hover:text-brand-orange border-2 hover:border-brand-orange border-transparent
                        px-3 py-1 rounded-lg transition duration-300 ease-in-out
                        "
        >
          sing up
        </button>
      </div>
    </div>
  );
}

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { BsList } from 'react-icons/bs'

export default function ProblemNavBar() {
  return (
    <div className="flex items-center justify-center h-[35px]">
      <div className="flex items-center cursor-pointer px-2 py-1 h-full  bg-dark-fill-3 hover:bg-dark-fill-2 rounded-l-md mr-[2px] text-slate-300 hover:text-slate-50">
        <FaChevronLeft className="w-5 h-5" />
      </div>

      <div
        className="flex p-2 items-center h-full cursor-pointer font-medium 
                    text-md text-slate-50 bg-dark-fill-3 hover:bg-dark-fill-2 "
      >
        <BsList className="mr-2" />
        Problem List
      </div>
      <div className="flex items-center cursor-pointer px-2 py-1 h-full bg-dark-fill-3 hover:bg-dark-fill-2 rounded-r-md ml-[1.5px] text-slate-300 hover:text-slate-50">
        <FaChevronRight className="w-5 h-5" />
      </div>
    </div>
  )
}

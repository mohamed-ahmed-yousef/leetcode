import { BsChevronUp } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="absolute mt-4 bg-dark-layer-1 w-[calc(100%-32px)]  bottom-0 text-gray-300">
      <div
        className="absolute flex items-center py-1 px-2 hover:text-gray-100  bg-dark-fill-3 w-fit rounded-md 
            hover:bg-dark-fill-2 cursor-pointer  bottom-[10px] left-0   "
      >
        <button> Console </button>
        <BsChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6 w-3" />
      </div>
      <div className="absolute right-0 bottom-[10px]">
        <button
          className="py-1 px-2   hover:text-gray-100  bg-dark-fill-3 w-fit rounded-md 
            hover:bg-dark-fill-2 cursor-pointer mr-3"
        >
          Run
        </button>
        <button
          className="py-1 px-2   hover:text-gray-100  bg-green-600 w-fit rounded-md 
 cursor-pointer "
        >
          Submit
        </button>
      </div>
      <div className="invisible h-[60px]"></div>
    </div>
  )
}

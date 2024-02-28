import { AiOutlineFullscreen } from 'react-icons/ai'

export default function FullScreen() {
  return (
    <div className="group ">
      <AiOutlineFullscreen className=" cursor-pointer w-7 h-7 hover:bg-dark-fill-2 px-1 py-1  rounded-sm " />
      <p
        className="absolute  group-hover:scale-100 transition duration-2000 ease-in-out top-[100px] right-[20px]
           scale-0 bg-dark-layer-2 rounded-md  z-10"
      >
        <span className="bg-dark-layer-1  px-1.5 py-.5 rounded-md">
          {' '}
          Full screen
        </span>
      </p>
    </div>
  )
}

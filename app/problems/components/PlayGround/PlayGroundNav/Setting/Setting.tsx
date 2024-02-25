import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai'
export default function Setting() {
  return (
    <div className="group ">
      <AiOutlineSetting className=" cursor-pointer w-7 h-7 hover:bg-dark-fill-2 px-1 py-1  rounded-sm " />
      <p
        className="absolute scale-0 group-hover:scale-100 transition duration-2000 ease-in-out top-[100px] right-[50px]
                bg-dark-layer-2 rounded-md z-10 "
      >
        <span className="bg-dark-layer-1  px-1.5 py-.5 rounded-md">
          {' '}
          setting
        </span>
      </p>
    </div>
  )
}

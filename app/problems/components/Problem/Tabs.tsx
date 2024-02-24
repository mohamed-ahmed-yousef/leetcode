type TabsProps = {
  text: string
}
export default function Tabs({ text }: TabsProps) {
  return (
    <div className="bg-dark-layer-2 h-[46px] text-slate-300 relative cursor-pointer">
      <p className="bg-dark-layer-1 w-fit  py-1.5 absolute bottom-0 rounded-t-md text-sm px-5">
        {text}{' '}
      </p>
    </div>
  )
}

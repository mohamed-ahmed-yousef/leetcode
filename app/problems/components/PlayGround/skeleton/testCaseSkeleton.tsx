export default function TestCaseSkeleton() {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div className="w-full">
        <div className="flex items-center gap-x-2">
          <div className="h-8 bg-zinc-950 rounded-full dark:bg-dark-fill-3 w-20 mb-4"></div>
          <div className="h-8  bg-zinc-950 rounded-full dark:bg-dark-fill-3 w-20 mb-4"></div>
          <div className="h-8  bg-zinc-950 rounded-full dark:bg-dark-fill-3 w-20   mb-4"></div>
        </div>
        <div>
          <div className="h-8  bg-zinc-950 rounded-md dark:bg-dark-fill-3 w-24 mb-2.5"></div>
          <div className="h-12  bg-zinc-950  rounded-lg dark:bg-dark-fill-3 w-full mb-2.5"></div>
        </div>
        <div className="mt-5">
          <div className="h-8  bg-zinc-950 rounded-md dark:bg-dark-fill-3 w-24 mb-2.5"></div>
          <div className="h-12  bg-zinc-950  rounded-lg dark:bg-dark-fill-3 w-full mb-2.5"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

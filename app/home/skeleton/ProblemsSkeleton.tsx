export default function ProblemsSkeleton() {
  return (
    <div className="pb-10">
      {[...Array(10)].map((item) => (
        <div
          className="grid grid-cols-11 gap-x-2 w-full animate-pulse mt-8"
          key={item}
        >
          <div className="h-8 bg-dark-fill-2 rounded-full dark:bg-dark-fill-3  col-span-1"></div>
          <div className="h-8 bg-dark-fill-2 rounded-full dark:bg-dark-fill-3 col-span-3"></div>
          <div className="h-8 bg-dark-fill-2 rounded-full dark:bg-dark-fill-3  col-span-2"></div>
          <div className="h-8 bg-dark-fill-2 rounded-full dark:bg-dark-fill-3 col-span-3"></div>
          <div className="h-8 bg-dark-fill-2 rounded-full dark:bg-dark-fill-3  col-span-2"></div>
        </div>
      ))}
    </div>
  )
}

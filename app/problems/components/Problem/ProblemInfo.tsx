import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { TiStarOutline } from 'react-icons/ti'
import { useRefAtom } from '../../atoms/RefAtom'
import { useRecoilValue } from 'recoil'

type ProblemInfoProps = {
  like: number
  dislike: number
  difficulty: string
}

export default function ProblemInfo({
  like,
  dislike,
  difficulty,
}: ProblemInfoProps) {
  const all = useRecoilValue(useRefAtom)
  const difficultyLevel =
    difficulty === 'Easy'
      ? 'text-olive bg-olive  '
      : difficulty === 'Medium'
        ? 'text-dark-yellow bg-dark-yellow'
        : 'text-dark-pink bg-dark-pink'
  const handleScrollDown = () => {
    all?.hintRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="flex items-center gap-x-2 mt-3 text-gray-300">
      <div
        className={`${difficultyLevel} px-1 py-1 bg-opacity-30 rounded-lg font-medium`}
      >
        {difficulty}
      </div>
      <div className="flex items-center">
        <AiFillLike className="cursor-pointer" />
        <p>{like} </p>
      </div>

      <div className="flex items-center">
        <AiFillDislike className="cursor-pointer" />
        <p>{dislike} </p>
      </div>
      <div>
        <TiStarOutline className="cursor-pointer" />
      </div>
      <div className="cursor-pointer" onClick={handleScrollDown}>
        Hints
      </div>
      <div className="cursor-pointer" onClick={handleScrollDown}>
        Topics
      </div>
    </div>
  )
}

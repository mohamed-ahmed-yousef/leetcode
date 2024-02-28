import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { TiStarOutline } from 'react-icons/ti'
import { useRefAtom } from '../../atoms/RefAtom'
import { useRecoilValue } from 'recoil'
import { FaTag } from 'react-icons/fa'
import { FaRegLightbulb } from 'react-icons/fa6'

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
  const { hintRef } = useRecoilValue(useRefAtom)
  const difficultyLevel =
    difficulty === 'Easy'
      ? 'text-olive   '
      : difficulty === 'Medium'
        ? 'text-dark-yellow '
        : 'text-dark-pink '
  const handleScrollDown = () => {
    hintRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="flex items-center gap-x-2 mt-3 text-gray-300">
      <div
        className={`${difficultyLevel} bg-dark-fill-3 px-3 py-1 rounded-full bg-opacity-30  font-medium`}
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
      <div
        className="cursor-pointer flex items-center gap-x-2 bg-dark-fill-3 px-3 py-1 rounded-full hover:text-gray-100"
        onClick={handleScrollDown}
      >
        <FaTag />
        <p>Hints</p>
      </div>
      <div
        className="cursor-pointer flex items-center gap-x-2 bg-dark-fill-3 px-3 py-1 rounded-full hover:text-gray-100"
        onClick={handleScrollDown}
      >
        <FaRegLightbulb />
        <p>Topics </p>
      </div>
    </div>
  )
}

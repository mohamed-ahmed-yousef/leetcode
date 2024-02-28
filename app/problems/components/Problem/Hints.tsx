import Accordion from '@/components/Accordion/Accordion'
import { FaRegLightbulb } from 'react-icons/fa6'

export default function Hints({ hints }: { hints: string[] | undefined }) {
  const header =
    Array.isArray(hints) && hints.map((_, indx) => `hint  ${indx + 1}`)

  return (
    <>
      {hints && Array.isArray(header) && (
        <Accordion header={header} content={hints} Icon={<FaRegLightbulb />} />
      )}
    </>
  )
}

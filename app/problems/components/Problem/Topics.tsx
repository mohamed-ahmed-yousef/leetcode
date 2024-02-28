import { FaTag } from 'react-icons/fa'
import Accordion from '@/components/Accordion/Accordion'

export default function Topics({ topics }: { topics: string[] }) {
  return <Accordion content={topics} header={['Topics']} Icon={<FaTag />} />
}

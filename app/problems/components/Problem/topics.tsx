import { FaTag } from 'react-icons/fa'
import Accordion from '@/components/Accordion/Accordion'

export default function Topics() {
  const header = ['Topics']
  return <Accordion content={['content1']} header={header} Icon={<FaTag />} />
}


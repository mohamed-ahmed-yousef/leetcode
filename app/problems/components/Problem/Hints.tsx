import Accordion from '@/components/Accordion/Accordion'

export default function Hints() {
  const header = ['hint 1', 'hint 2', 'hint 3', 'hint 4']
  const content = ['content 1', 'content 2', 'content 3', 'content 4']
  return (
    <div className="">
      <Accordion header={header} content={content} />
    </div>
  )
}

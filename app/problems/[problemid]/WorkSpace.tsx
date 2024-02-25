import Split from 'react-split'
import Problem from '../components/Problem'
import PlayGround from '../components/PlayGround/PlayGround'

export default function WorkSpace({ problem }) {
  return (
    <Split className="split min-h-[calc(100vh-106px)]" minSize={0}>
      <Problem problem={problem} />
      <PlayGround />
    </Split>
  )
}

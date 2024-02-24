import Split from 'react-split'
import Problem from '../components/Problem'

export default function WorkSpace() {
  const giveStyle = {
    minHeight: 'calc(100vh - 60px)',
  }
  return (
    <Split className="split  " style={giveStyle} minSize={0}>
      <Problem />
      <div className="overflow-auto">Text editor here </div>
    </Split>
  )
}

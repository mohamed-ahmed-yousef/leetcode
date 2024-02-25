import PlayGroundNav from './PlayGroundNav/PlayGroundNav'
import Split from 'react-split'
import TestCase from './TestCase/TestCaseContainer'
import TextEditor from './TextEditor/TextEditor'
// import Footer from './TestCase/Footer'

export default function PlayGround() {
  return (
    <div className="bg-dark-layer-1">
      <PlayGroundNav />
      <Split
        className="h-[calc(100vh-106px)]  overflow-y-hidden"
        direction="vertical"
        sizes={[60, 40]}
        minSize={10}
      >
        <TextEditor />
        <TestCase />
      </Split>
    </div>
  )
}

import TestCaseTab from './TestCaseTab'
import TestCaseHeader from './TestCaseHeader'
import Footer from './Footer'

export default function TestCase() {
  return (
    <div className="overflow-y-auto relative">
      <div className="px-4 py-2">
        <TestCaseHeader />
        <TestCaseTab
          components={[
            ['Input 1', 'output 1'],
            ['Input 2', 'output 2'],
            ['Input 3', 'output 3'],
          ]}
        />
        <Footer />
      </div>
    </div>
  )
}

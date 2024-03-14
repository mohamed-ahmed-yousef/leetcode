import Tabs from './Problem/Tabs'
import ProblemInfo from './Problem/ProblemInfo'
import ProblemStatement from './Problem/problemStatement'
import Example from './Problem/Example'
import Constraints from './Problem/Constraints'
import { Problem } from '@/types/problem'
import Hints from './Problem/Hints'
import Topics from './Problem/Topics'
import { useSetRecoilState } from 'recoil'
import { starterCodeAtom } from '@/app/problems/atoms/starterCodeAtom'
import { testCaseAtom } from '../atoms/testCaseAtom'

type ProblemDescriptionProps = {
  problem: Problem
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  const {
    constraints,
    problemStatement,
    examples,
    id,
    title,
    starterCode,
    hints,
    topics,
    testCase,
  } = problem
  const setStarterCode = useSetRecoilState(starterCodeAtom)
  const steTestCase = useSetRecoilState(testCaseAtom)
  setStarterCode((prev) => ({
    ...prev,
    starterCode: starterCode,
    problemId: id,
  }))
  steTestCase((prev) => ({ ...prev, testCase: testCase }))

  return (
    <div className="bg-dark-layer-1  ">
      <div className=" bg-dark-layer-2  ">
        <div className="bg-dark-layer-1  ">
          <Tabs text={'Description'} />
          <div className="  pb-7 h-[calc(100vh-106px)] overflow-auto ">
            <div className="max-w-[800px] p-2 lg:p-4 min-w-[500px]">
              <h1 className="text-xl text-white font-bold">{title}</h1>
              <ProblemInfo problemId={id} />
              <div className="mt-5">
                {Array.isArray(problemStatement) &&
                  problemStatement?.map((items) => (
                    <div className="mb-1.5" key={items[0]}>
                      {Array.isArray(items) &&
                        items?.map((item) => (
                          <ProblemStatement
                            key={id}
                            code={item?.code}
                            text={item?.text}
                            boldText={item?.boldText}
                            liText={item?.liText}
                          />
                        ))}
                    </div>
                  ))}
              </div>
              <div>
                {Array.isArray(examples) &&
                  examples?.map((item, indx) => (
                    <Example
                      key={item.id}
                      indx={indx}
                      input={item.input}
                      output={item.output}
                      explanation={item?.explanation}
                      img={item?.img}
                    />
                  ))}
              </div>
              <Constraints
                rangeConstraints={constraints?.rangeConstraints}
                otherConstraints={constraints?.otherConstraints}
              />
              <Topics topics={topics} />
              <Hints hints={hints} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProblemDescription

import Tabs from './Problem/Tabs'
import ProblemInfo from './Problem/ProblemInfo'
import Description from './Problem/Description'
import Example from './Problem/Example'
import Constraints from './Problem/Constraints'
type ProblemDescriptionProps = {}

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
  return (
    <div className="bg-dark-layer-1  ">
      <div className=" bg-dark-layer-2  ">
        <div className="bg-dark-layer-1  h-[calc(100vh-60px)] overflow-y-auto">
          <Tabs text={'Description'} />
          <div className="p-2 lg:p-4  pb-7">
            <div className="max-w-[800px]">
              <h1 className="text-xl text-white font-bold">1.Two Sum</h1>
              <ProblemInfo like={23} dislike={4} difficulty="Easy" />
              <div className="mt-5 ">
                <Description
                  code={['nums', 'target', 'target']}
                  text={[
                    'Given an array of integers ',
                    'and an integer',
                    'return indices of the two numbers such that they add up to',
                  ]}
                />
                <Description
                  boldText={['exactly one solution']}
                  text={[
                    'You may assume that each input would have ',
                    ', and you may not use thesame element twice.',
                  ]}
                />
                <Description
                  text={['You can return the answer in any order.']}
                />
              </div>
              <div>
                <Example
                  header="Example 1 :"
                  input="nums = [2,7,11,15], target = 9 "
                  output="[0,1] "
                  explanation="Because nums[0] + nums[1] == 9, we return [0, 1]."
                />
                <Example
                  header="Example 2 :"
                  input="nums = [2,7,11,15], target = 9 "
                  output="[0,1] "
                  explanation="Because nums[0] + nums[1] == 9, we return [0, 1]."
                />
                <Example
                  header="Example 3 :"
                  input="nums = [2,7,11,15], target = 9 "
                  output="[0,1] "
                  explanation="Because nums[0] + nums[1] == 9, we return [0, 1]."
                />
              </div>

              <Constraints
                rangeConstraints={[
                  '2 <= nums.length <= 10^4',
                  '-10^9 <= nums[i] <= 10^9',
                  '-10^9 <= target <= 10^9',
                  'Only one valid answer exists.',
                ]}
                otherConstraints={[
                  'You can return the answer in any order.',
                  'You may assume that each input would have exactly one solution.',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProblemDescription

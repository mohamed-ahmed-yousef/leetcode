'use client'
import { selectedLanguageAtom } from '@/app/problems/atoms/selectedLanguage'
import { useRecoilValue, useSetRecoilState } from 'recoil'
export default function SupportedLanguage() {
  const { lang } = useRecoilValue(selectedLanguageAtom)
  const setLanguage = useSetRecoilState(selectedLanguageAtom)
  const handleOnChange = (value: string) => {
    console.log(value)
    setLanguage((prev) => ({ ...prev, lang: value }))
  }
  return (
    <div>
      <select
        className="bg-dark-layer-1 w-fit  py-2  
            rounded-t-md text-sm px-2 hover:bg-dark-fill-2 hover:text-gray-200 hover:bg-zinc-950 cursor-pointer"
        onChange={(e) => handleOnChange(e.target.value)}
      >
        <option selected={lang == 'python'} className="cursor-pointer">
          python
        </option>
        <option selected={lang == 'javascript'} className="cursor-pointer">
          javascript
        </option>
        <option selected={lang == 'typescript'} className="cursor-pointer ">
          typescript
        </option>
      </select>
    </div>
  )
}

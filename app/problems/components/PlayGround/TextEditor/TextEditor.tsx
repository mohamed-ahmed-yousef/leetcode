'use client'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { useRecoilValue } from 'recoil'
import { starterCodeAtom } from '@/app/problems/atoms/starterCodeAtom'
import { selectedLanguageAtom } from '@/app/problems/atoms/selectedLanguage'
import { OnlineCompiler } from './OnLineCompiler'
import { useState } from 'react'

export default function TextEditor() {
  const { starterCode, problemId } = useRecoilValue(starterCodeAtom)
  const { lang } = useRecoilValue(selectedLanguageAtom)
  const [code, setCode] = useState<string>('')
  console.log(starterCode)
  const extensions =
    lang === 'python'
      ? [python()]
      : lang === 'javascript' || lang == 'typescript'
        ? [javascript()]
        : []
  const handleOnChange = (value: string) => {
    setCode(value)
    console.log(starterCode, 'hi', problemId, 'this is problem id')
  }

  const handleOnSubmit = () => {
    console.log('sumbit now', lang)
    OnlineCompiler(code, lang)
  }

  return (
    <div className="overflow-y-auto">
      <CodeMirror
        height="h-full"
        extensions={extensions}
        theme={vscodeDark}
        onChange={handleOnChange}
        value={starterCode[lang as keyof typeof starterCode] as string}
      />
      <button
        onClick={handleOnSubmit}
        className=" w-full  py-2  
            rounded-b-md text-sm px-2  text-gray-200 bg-zinc-950 cursor-pointer"
      >
        Submit
      </button>
    </div>
  )
}

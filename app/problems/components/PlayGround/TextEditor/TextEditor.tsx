'use client'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { useRecoilValue } from 'recoil'
import { starterCodeAtom } from '@/app/problems/atoms/starterCodeAtom'
import { selectedLanguageAtom } from '@/app/problems/atoms/selectedLanguage'
import { textEditorAtom } from '../../../atoms/TextEditorAtom'
import { useSetRecoilState } from 'recoil'

export default function TextEditor() {
  const { starterCode, problemId } = useRecoilValue(starterCodeAtom)
  const { lang } = useRecoilValue(selectedLanguageAtom)
  const setTextEditor = useSetRecoilState(textEditorAtom)

  // let newStarterCode = localStorage.getItem(`${lang}-${problemId}`)
  let newStarterCode = null
  let finalValue = starterCode[lang as keyof typeof starterCode] as string
  if (newStarterCode) finalValue = newStarterCode

  const extensions =
    lang === 'python'
      ? [python()]
      : lang === 'javascript' || lang == 'typescript'
        ? [javascript()]
        : []
  const handleOnChange = (value: string) => {
    setTextEditor((prev) => ({ ...prev, userCode: value, userLang: lang }))
    console.log(starterCode, 'hi', problemId, 'this is problem id')
    // localStorage.setItem(`${lang}-${problemId}`, value)
  }

  return (
    <div className="w-full overflow-auto">
      <CodeMirror
        height="100%"
        extensions={extensions}
        theme={vscodeDark}
        onChange={handleOnChange}
        value={finalValue}
      />
    </div>
  )
}

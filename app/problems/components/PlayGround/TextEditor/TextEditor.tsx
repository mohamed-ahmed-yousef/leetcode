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
  console.log(starterCode)
  const extensions =
    lang === 'python'
      ? [python()]
      : lang === 'javascript' || lang == 'typescript'
        ? [javascript()]
        : []
  const handleOnChange = (value: string) => {
    setTextEditor((prev) => ({ ...prev, userCode: value, userLang: lang }))
    console.log(starterCode, 'hi', problemId, 'this is problem id')
  }

  return (
    <div>
      <div className="overflow-y-auto">
        <CodeMirror
          height="h-full"
          extensions={extensions}
          theme={vscodeDark}
          onChange={handleOnChange}
          value={starterCode[lang as keyof typeof starterCode] as string}
        />
      </div>
    </div>
  )
}

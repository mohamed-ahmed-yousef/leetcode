'use client'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { useRecoilValue } from 'recoil'
import { starterCodeAtom } from '@/app/problems/atoms/starterCodeAtom'
import { selectedLanguageAtom } from '@/app/problems/atoms/selectedLanguage'

export default function TextEditor() {
  const { starterCode } = useRecoilValue(starterCodeAtom)
  const { lang } = useRecoilValue(selectedLanguageAtom)
  const extensions =
    lang === 'python'
      ? [python()]
      : lang === 'javascript' || lang == 'typescript'
        ? [javascript()]
        : []
  return (
    <div className="overflow-y-auto">
      <CodeMirror
        height="h-full"
        extensions={extensions}
        theme={vscodeDark}
        // try to solve the type error here.
        value={starterCode[lang as keyof typeof starterCode] as string}
      />
    </div>
  )
}

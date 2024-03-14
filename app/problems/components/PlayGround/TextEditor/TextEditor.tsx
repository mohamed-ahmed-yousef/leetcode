'use client'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { useRecoilValue, useRecoilState } from 'recoil'
import { starterCodeAtom } from '@/app/problems/atoms/starterCodeAtom'
import { selectedLanguageAtom } from '@/app/problems/atoms/selectedLanguage'
import { textEditorAtom } from '../../../atoms/TextEditorAtom'
import { useSetRecoilState } from 'recoil'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/firebase'
import { useFontSize } from '@/app/problems/atoms/FontSizeAtom'
import { useEffect } from 'react'

export default function TextEditor() {
  const { starterCode, problemId } = useRecoilValue(starterCodeAtom)
  const { lang } = useRecoilValue(selectedLanguageAtom)
  const [fontSizeAtom, setFontSizeAtom] = useRecoilState(useFontSize)
  const setTextEditor = useSetRecoilState(textEditorAtom) // here is work
  const [user] = useAuthState(auth)
  let newStarterCode = null
  let finalFontSize = fontSizeAtom?.fontSize
  let newFontSize = 0
  if (user) {
    newStarterCode = localStorage.getItem(`${lang}-${problemId}`)
    newFontSize = Number(localStorage.getItem('font-size'))
  }
  let finalValue = starterCode[lang as keyof typeof starterCode] as string
  if (newStarterCode) finalValue = newStarterCode
  if (newFontSize && finalFontSize !== newFontSize) {
    finalFontSize = newFontSize
    setFontSizeAtom((prev) => ({ ...prev, fontSize: newFontSize }))
  }
  useEffect(() => {
    setTextEditor((prev) => ({ ...prev, userCode: finalValue, userLang: lang }))
  }, [finalValue, lang, setTextEditor])

  const extensions =
    lang === 'python'
      ? [python()]
      : lang === 'javascript' || lang == 'typescript'
        ? [javascript()]
        : []
  const handleOnChange = (value: string) => {
    setTextEditor((prev) => ({ ...prev, userCode: value, userLang: lang }))
    if (user) {
      localStorage.setItem(`${lang}-${problemId}`, value)
    }
  }
  const TextEditorStyle = {
    fontSize: `${finalFontSize}px`,
  }
  return (
    <div className={`w-full overflow-auto `} style={TextEditorStyle}>
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

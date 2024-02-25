import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode'

export default function TextEditor() {
  return (
    <div className="overflow-y-auto">
      <CodeMirror
        height="h-full"
        extensions={[javascript({ jsx: true })]}
        theme={vscodeDark}
      />
    </div>
  )
}

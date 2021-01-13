import React, {
  FunctionComponent,
  memo,
  useRef,
  useState,
  useEffect
} from 'react'

type Props = {
  name: string
  value: string
  onChange: any
  handleBlur: any
}
const FormTextArea: FunctionComponent<Props> = ({
  name,
  value,
  onChange,
  handleBlur
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [text, setText] = useState('')
  const [textAreaHeight, setTextAreaHeight] = useState('60px')
  const [parentHeight, setParentHeight] = useState('60px')

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`)
  }, [text])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto')
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
    setText(event.target.value)

    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div
      style={{
        minHeight: parentHeight
      }}
    >
      <textarea
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        ref={textAreaRef}
        rows={1}
        style={{
          height: textAreaHeight
        }}
      />
    </div>
  )
}

export default memo(FormTextArea)

import React, {
  FunctionComponent,
  memo,
  useRef,
  useState,
  useEffect
} from 'react'
import { TextareaStyled } from 'organisms/Form/styles'
import WarningIcon from '@material-ui/icons/Warning'

type Props = {
  name: string
  value: string
  onChange: any
  handleBlur: any
  placeholder?: string
  disabled?: boolean
  darkMode: boolean
  error: boolean
}
const FormTextArea: FunctionComponent<Props> = ({
  name,
  value,
  onChange,
  handleBlur,
  placeholder,
  disabled,
  darkMode,
  error
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [text, setText] = useState('')
  const [textAreaHeight, setTextAreaHeight] = useState('60px')
  const [parentHeight, setParentHeight] = useState('60px')

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`)
  }, [text, value])

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
        minHeight: parentHeight,
        width: '100%',
        display: 'inline-flex'
      }}
      data-testid='FormTextarea'
    >
      <TextareaStyled
        darkMode={darkMode}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        ref={textAreaRef}
        rows={1}
        style={{
          height: textAreaHeight,
          resize: 'none'
        }}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
      />
      {error && <WarningIcon style={{
        width: '18px',
        margin: 'auto',
        height: '18px',
        fill: darkMode ? 'white' : 'black'
      }} />}
    </div>
  )
}

export default memo(FormTextArea)

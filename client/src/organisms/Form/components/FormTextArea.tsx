import React, {
  FunctionComponent,
  memo,
  useRef,
  useState,
  useEffect,
  Fragment
} from 'react'
import { TextareaStyled } from 'organisms/Form/styles'

type Props = {
  label: string
  name: string
  value: string
  onChange: any
  handleBlur: any
  placeholder?: string
  disabled?: boolean
  darkMode: boolean
  error: boolean
  icon?: boolean
}
const FormTextArea: FunctionComponent<Props> = ({
  label,
  name,
  value,
  onChange,
  handleBlur,
  placeholder,
  disabled,
  darkMode,
  error,
  icon
}) => {
  const textareaRef: any = React.useRef(null)

  const [currentValue, setCurrentValue] = useState('')

  useEffect(() => {
    textareaRef.current.style.height = '0px'
    const scrollHeight = textareaRef.current.scrollHeight
    textareaRef.current.style.height = scrollHeight + 'px'
  }, [value, currentValue])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(event.target.value)

    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div
      style={{
        minHeight: '60px',
        width: '100%',
        display: 'inline-flex'
      }}
      data-testid='FormTextarea'
    >
      <TextareaStyled
        aria-label={label}
        darkMode={darkMode}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        ref={textareaRef}
        rows={1}
        style={{
          resize: 'none'
        }}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        icon={icon}
      />
    </div>
  )
}

export default memo(FormTextArea)

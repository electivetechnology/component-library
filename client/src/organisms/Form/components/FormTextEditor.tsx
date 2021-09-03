import React, {
  FunctionComponent,
  memo,
  useContext,
  useState,
  useRef,
  useEffect
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { EditorLabel, RequiredStyled, TextEditorStyled } from '../styles'
import { Editor } from '@tinymce/tinymce-react'
import WarningIcon from '@material-ui/icons/Warning'
import { theme } from 'styles/theme'
import { useEffectAfterMount } from 'utils/base'
// import { useFormEditorInput, useFormInput } from 'organisms/Form/hooks'

const FormTextEditor: FunctionComponent = () => {
  const valueRef = useRef()
  const blurRef = useRef()
  const {
    inputValue,
    name,
    label,
    outlined,
    disabled = false,
    required,
    status,
    requiredError
  } = useContext(InputContext)

  const { updateInput, onBlur, darkMode = false } = useContext(FormContext)

  const [value, setValue] = useState(inputValue)

  const { statusType } = status || {}

  const error = statusType === 'error' || requiredError

  // ensure value passed to input is updated
  // track value internally
  // when blur update value and send

  const onChange = (newValue: any) => {
    console.group('onChange')
    console.log(newValue)
    console.groupEnd()
    valueRef.current = newValue
    // updateInput(name, newValue)
  }

  const handleBlur = (newValue: any) => {
    console.group('handleBlur')
    console.log(newValue)
    console.groupEnd()
    blurRef.current = valueRef.current
    updateInput(name, valueRef.current)
  }

  useEffectAfterMount(() => {
    setValue(inputValue)
  }, [inputValue])

  useEffectAfterMount(() => {
    console.group('useEffectAfterMount')
    console.log(blurRef.current)
    console.groupEnd()
    blurRef.current && onBlur(name)
  }, [blurRef.current])

  return (
    <TextEditorStyled disabled={disabled} darkMode={darkMode} error={error}>
      <EditorLabel>
        {label}
        {required && <RequiredStyled disabled={disabled}>*</RequiredStyled>}
      </EditorLabel>
      <Editor
        apiKey='bf6mljfgcw8s1y8vjj7gotxmhtr1bs7jdttorpreswqh54lt'
        initialValue={valueRef.current}
        disabled={disabled}
        init={{
          browser_spellcheck: true,
          height: 200,
          menubar: false,
          plugins: [
            'autolink lists link print preview fullscreen hr',
            'table wordcount autoresize directionality'
          ],
          toolbar:
            'bold italic underline | bullist numlist | formatselect | link |',
          table_toolbar: '',
          table_advtab: false,
          table_row_advtab: false,
          table_cell_advtab: false
        }}
        onEditorChange={onChange}
        onBlur={handleBlur}
      />
      {error && (
        <WarningIcon
          style={{
            width: '18px',
            margin: 'auto',
            height: '18px',
            fill: theme.primaryColorValencia
          }}
        />
      )}
    </TextEditorStyled>
  )
}

export default memo(FormTextEditor)

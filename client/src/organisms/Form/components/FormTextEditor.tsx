import React, {
  FunctionComponent,
  memo,
  useContext,
  useState,
  useRef,
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import {
  TextEditorWarningStyled,
  EditorLabel,
  RequiredStyled,
  TextEditorStyled
} from '../styles'
import { Editor } from '@tinymce/tinymce-react'
import WarningIcon from '@material-ui/icons/Warning'
import { theme } from 'styles/theme'
import { useEffectAfterMount } from 'utils/base'
import FormStatus from 'organisms/Form/components/FormStatus'

const FormTextEditor: FunctionComponent = () => {
  const valueRef = useRef()
  const {
    inputValue,
    name,
    label,
    outlined,
    disabled = false,
    required,
    status,
    requiredError,
    options,
    handleInputChange
  } = useContext(InputContext)
  const { editorSetup } = options || {}

  const { updateInput, onBlur, darkMode = false } = useContext(FormContext)

  const [value, setValue] = useState(inputValue)
  const [send, setSend] = useState(inputValue)

  const { statusType } = status || {}
  const error = statusType === 'error' || requiredError

  useEffectAfterMount(() => {
    setValue(inputValue)
  }, [inputValue])

  const handleChange = (newValue: any) => {
    handleInputChange && handleInputChange(newValue)
    setSend(newValue)
  }

  const handleBlur = () => {
    updateInput(name, send)
    valueRef.current = send
  }

  useEffectAfterMount(() => {
    onBlur(name)
  }, [valueRef.current])

  return (
    <TextEditorWarningStyled error={error}>
      <TextEditorStyled disabled={disabled} darkMode={darkMode} error={error}>
        <EditorLabel>
          {label}
          {required && <RequiredStyled disabled={disabled}>*</RequiredStyled>}
        </EditorLabel>
        <Editor
          apiKey='bf6mljfgcw8s1y8vjj7gotxmhtr1bs7jdttorpreswqh54lt'
          initialValue={value}
          disabled={disabled}
          init={{
            browser_spellcheck: true,
            height: 200,
            menubar: false,
            plugins: [
              'autolink lists link print preview fullscreen hr',
              'table wordcount autoresize directionality'
            ],
            toolbar: options?.tools
              ? options.tools
              : 'bold italic underline | bullist numlist | formatselect | link |',
            table_toolbar: '',
            table_advtab: false,
            table_row_advtab: false,
            table_cell_advtab: false,
            setup: editorSetup && editorSetup
          }}
          onEditorChange={handleChange}
          onBlur={handleBlur}
        />
      </TextEditorStyled>
      <FormStatus />
      {error && (
        <WarningIcon
          style={{
            width: '18px',
            margin: 'auto',
            height: '18px',
            fill: theme.primaryColor
          }}
        />
      )}
    </TextEditorWarningStyled>
  )
}

export default memo(FormTextEditor)

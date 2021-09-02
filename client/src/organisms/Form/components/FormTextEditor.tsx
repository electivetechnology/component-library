import React, { FunctionComponent, memo, useContext, useState } from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { EditorLabel, RequiredStyled, TextEditorStyled } from '../styles'
import { Editor } from '@tinymce/tinymce-react'
import WarningIcon from '@material-ui/icons/Warning'
import { theme } from 'styles/theme'

const FormTextEditor: FunctionComponent = () => {
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

  const [initialValue] = useState(inputValue)

  const { statusType } = status || {}

  const error = true

  const handleBlur = () => {
    onBlur(name)
  }

  const onChange = (value: any) => {
    updateInput(name, value)
  }

  return (
    <TextEditorStyled disabled={disabled} darkMode={darkMode} error={error}>
      <EditorLabel>
        {label}
        {required && <RequiredStyled disabled={disabled}>*</RequiredStyled>}
      </EditorLabel>
      <Editor
        apiKey='bf6mljfgcw8s1y8vjj7gotxmhtr1bs7jdttorpreswqh54lt'
        initialValue={initialValue}
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

import React, { FunctionComponent, memo, useContext } from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { EditorLabel } from '../styles'
import { Editor } from '@tinymce/tinymce-react'
import { useFormInput } from 'organisms/Form/hooks'

const FormTextEditor: FunctionComponent = () => {
  const {
    inputValue,
    name,
    type,
    label,
    options,
    outlined,
    disabled,
    required,
    status,
    requiredError
  } = useContext(InputContext)


  const { statusType } = status || {}

  const error = statusType === 'error' || requiredError

  const { onBlur, darkMode } = useContext(FormContext)

  const { value, onChange } = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <div style={{ paddingBottom: '8px' }}>
      <EditorLabel>{label}</EditorLabel>
      <Editor
        apiKey="bf6mljfgcw8s1y8vjj7gotxmhtr1bs7jdttorpreswqh54lt"
        initialValue={value}
        disabled={disabled}
        init={{
          browser_spellcheck: true,
          height: 200,
          menubar: false,
          plugins: [
            'autolink lists link print preview fullscreen hr',
            'table wordcount autoresize directionality',
          ],
          toolbar:
            'bold italic underline | bullist numlist | formatselect | link |',
        }}
        onEditorChange={onChange}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default memo(FormTextEditor)
